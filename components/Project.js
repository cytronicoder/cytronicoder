import styles from "@/styles/Project.module.css";
import Link from "next/link";

export default function Project({ project, key }) {
    return (
        <Link href={project.url} key={key} target="_blank" rel="noopener noreferrer">
            <div className={styles.project}>
                <h3 className={styles.project_title}>{project.name}</h3>
                <span className={styles.language}>{project.language}</span>
                <p className={styles.project_description}>{project.description}</p>
            </div>
        </Link>
    );
}