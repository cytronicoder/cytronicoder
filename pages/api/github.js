import { Octokit } from "@octokit/core";
require("dotenv").config();

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });


/**
 * Returns a list of projects from my GitHub account
 * @param {*} req 
 * @param {*} res 
 * @returns
 * [
 *  {
 *      name: "project-name",
 *      description: "project-description",
 *      url: "project-url",
 *      language: "project-language",
 *      stars: "project-stars",
 *      forks: "project-forks"
 *  }
 * ]
 */
export default async function handler(req, res) {
    const { data } = await octokit.request("GET /users/cytronicoder/repos", {
        type: "owner",
        sort: "updated",
        per_page: 100,
    });

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
}
