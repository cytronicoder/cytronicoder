import { Octokit } from "@octokit/core";
require("dotenv").config();

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

export default async function handler(req, res) {
    // The first step is to make the request to the GitHub API
    const { data, status } = await octokit.request("GET /users/cytronicoder/repos", {
        type: "owner",
        sort: "updated",
        per_page: 100,
    });

    // If the request is successful, we'll map through the data and return only what we need
    if (status === 200) {
        const projects = data.map((project) => {
            return {
                name: project.name,
                description: project.description,
                url: project.html_url,
                language: project.language,
                stars: project.stargazers_count,
                forks: project.forks_count,
            };
        });

        res.status(200).json(projects);
    } else {
        // If the request fails, we'll return the status code
        res.status(status);
    }
}
