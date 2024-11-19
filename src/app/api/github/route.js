import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

export async function GET() {
    try {
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

            return new Response(JSON.stringify(projects), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(null, { status });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message || "Unknown error occurred" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
