import { useState, useEffect } from "react";
import styles from "@/styles/Projects.module.css";
import Link from "next/link";

export default function Projects() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Fetch GitHub data
        fetcher("/api/github").then((data) => {
            setProjects(data);
            setIsLoaded(true);
        });
    }, []);

    return (
        <div className={styles.container}>
            {isLoaded ? (
                <div className={styles.header}>
                    <h2 className={styles.title}>Here are some of my projects:</h2>
                    <div className={styles.projects}>
                        {projects.sort(() => 0.5 - Math.random()).slice(0, 3).map((project) => (
                            <Link href={project.url} key={project.id} target="_blank" rel="noopener noreferrer">
                                <div className={styles.project}>
                                    <h3 className={styles.project_title}>{project.name}</h3>
                                    <p className={styles.project_description}>{project.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.header}>
                    <h2 className={styles.title}>Loading...</h2>
                </div>
            )}
        </div>
    );
}