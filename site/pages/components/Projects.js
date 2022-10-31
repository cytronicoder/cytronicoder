import { useState, useEffect } from "react";
import styles from "../../styles/Projects.module.css";

const owner = "cytronicoder";
const numProjectsToDisplay = 2;

export default function Projects() {
  // fetch projects from github api
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${owner}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  // remove bio project
  const filteredProjects = projects.filter((project) => project.name !== owner);

  // show random projects
  const randomProjects = filteredProjects.sort(() => Math.random() - 0.5);

  const projectsToDisplay = randomProjects.slice(0, numProjectsToDisplay);

  const projectList = projectsToDisplay.map((project) => (
    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
      <div className={styles.card} key={project.id}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </a>
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <p>
        Here is a list of some of my projects. You can find more on my{" "}
        <a
          href="https://github.com/cytronicoder"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          GitHub
        </a>
        .
      </p>

      <div className={styles.grid}>{projectList}</div>
    </div>
  );
}
