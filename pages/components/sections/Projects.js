import Widget from "../items/Widget";
import styles from "./Projects.module.css";

export default function Projects({ projects }) {
  const projectList = randomProjects.map((project) => (
    <a
      href={project.html_url}
      key={project.id}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.card}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </a>
  ));

  return (
    <Widget logo="/logos/github.svg" title="Projects">
      <div className={styles.grid}>{projectList}</div>
    </Widget>
  );
}
