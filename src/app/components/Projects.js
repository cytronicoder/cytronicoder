"use client";

import { useState, useEffect } from "react";

// Styles
import styles from "./Projects.module.css";

// Components
import Project from "./Project";

export default function Projects() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const [projects, setProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch GitHub data
        fetcher("/api/github")
            .then((data) => {
                // Filter out the profile repository
                const filteredProjects = data.filter((project) => project.name !== "cytronicoder");
                setProjects(filteredProjects);
                setIsLoaded(true);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    return (
        <div className={styles.container}>
            {isLoaded ? (
                <div>
                    <p>I&apos;ve been working on...</p>
                    {error ? (
                        <>
                            <p>
                                <code>Oops! {error.message} :(</code>
                            </p>
                            <p>
                                Please check back later, or contact me on{" "}
                                <a
                                    href="https://twitter.com/cytronicoder"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Twitter.
                                </a>
                            </p>
                        </>
                    ) : (
                        <div className={styles.projects}>
                            {projects.length > 0 ? (
                                projects
                                    // Sort by last updated
                                    .sort(
                                        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
                                    )
                                    // Reverse order for descending
                                    .reverse()
                                    // Limit to one project
                                    .slice(0, 1)
                                    // Map projects with a unique key
                                    .map((project, index) => (
                                        <Project
                                            project={project}
                                            key={project.id || `${project.name}-${index}`}
                                        />
                                    ))
                            ) : (
                                <p>
                                    I do not have any public projects on GitHub at the moment.
                                    Check back later!
                                </p>
                            )}
                        </div>
                    )}
                    <p style={{ textAlign: "right" }}>...and more!</p>
                </div>
            ) : (
                <div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
}
