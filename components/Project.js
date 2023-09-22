import Link from "next/link";

// Styles
import styles from "@/styles/Project.module.css";

export default function Project({ project, key }) {
  return (
    <Link
      href={project.url}
      key={key}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.project}>
        <h3 className={styles.project_title}>{project.name}</h3>
        <span className={styles.language}>
          Built w/ {project.language || "unknown language"}
        </span>
        <p className={styles.project_description}>{project.description}</p>
      </div>
    </Link>
  );
}
