import Link from "next/link";

// Styles
import styles from "./Project.module.css";

export default function Project({ project }) {
    return (
        <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={styles.project}>
                <h3 className={styles.project_title}>{project.name}</h3>
                <p className={styles.project_description}>{project.description}</p>
            </div>
        </Link>
    );
}
