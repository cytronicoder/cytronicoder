import styles from "@/styles/Project.module.css";
import Link from "next/link";

export default function Project({ project, key }) {
    return (
        <Link href={project.url} key={key} target="_blank" rel="noopener noreferrer">
            <div className={styles.project}>
                <h3 className={styles.project_title}>{project.name}</h3>
                <ul className={styles.project_stats}>
                    <li className={styles.project_stat}>
                        <span className={styles.language}>{project.language}</span>
                    </li>
                    <li className={styles.project_stat}>
                        <span className={styles.stars}>{project.stars}</span>
                        {project.stars === 1 ? (
                            <span className={styles.project_stat_label}>{" "}star</span>
                        ) : (
                            <span className={styles.project_stat_label}>{" "}stars</span>
                        )}
                    </li>
                </ul>

                <p className={styles.project_description}>{project.description}</p>
            </div>
        </Link>
    );
}