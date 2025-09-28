import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

let cachedGithubData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 10 * 60 * 1000;

export async function GET() {
    try {
        const now = Date.now();
        if (cachedGithubData && (now - cacheTimestamp) < CACHE_DURATION) {
            return new Response(JSON.stringify(cachedGithubData), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        const { data, status } = await octokit.request("GET /users/cytronicoder/repos", {
            type: "owner",
            sort: "updated",
            per_page: 100,
        });

        if (status === 200) {
            const projects = data.map((project) => ({
                name: project.name,
                description: project.description,
                url: project.html_url,
                language: project.language,
                stars: project.stargazers_count,
                forks: project.forks_count,
            }));

            cachedGithubData = projects;
            cacheTimestamp = now;

            return new Response(JSON.stringify(projects), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            if (cachedGithubData) {
                console.log("GitHub API failed, serving cached data");
                return new Response(JSON.stringify(cachedGithubData), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                });
            }
            return new Response(null, { status });
        }
    } catch (error) {
        console.error("Error fetching GitHub data:", error);

        if (cachedGithubData) {
            console.log("GitHub API error, serving cached data");
            return new Response(JSON.stringify(cachedGithubData), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        if (error.status === 429) {
            return new Response(
                JSON.stringify({
                    error: "Rate limited",
                    message: "GitHub API rate limited, please try again later",
                    fallback: true
                }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        return new Response(
            JSON.stringify({ error: error.message || "Unknown error occurred" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
