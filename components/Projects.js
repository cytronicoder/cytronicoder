import { useState, useEffect } from "react";
import styles from "@/styles/Projects.module.css";
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
                // console.log(data);
                setProjects(data);
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
                <div className={styles.header}>
                    <h2 className={styles.title}>Here are some of my projects:</h2>
                    {error ? (
                        <p className={styles.description}>Error: {error.message}</p>
                    ) : (
                        <div className={styles.projects}>
                            {projects.length > 0 ? (
                                projects
                                    .sort((a, b) => b.stars - a.stars)
                                    .slice(0, 3)
                                    .map((project) => (
                                        <Project project={project} key={project.id} />
                                    ))
                            ) : (
                                <p className={styles.description}>
                                    I do not have any public projects on GitHub at the moment. Check back later!
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className={styles.header}>
                    <h2 className={styles.title}>Loading...</h2>
                </div>
            )}
        </div>
    );
}