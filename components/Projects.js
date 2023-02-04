import { useState, useEffect } from "react";
import styles from "@/styles/Projects.module.css";
import Link from "next/link";
import Project from "./Project";

export default function Projects() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Fetch GitHub data
        fetcher("/api/github").then((data) => {
            // console.log(data);
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
                            <Project project={project} key={project.id} />
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