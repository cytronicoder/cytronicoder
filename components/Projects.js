import { useState, useEffect } from "react";

// Styles
import styles from "@/styles/Projects.module.css";

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
        // console.log(data);
        // Filter out the profile repository
        data = data.filter((project) => project.name !== "cytronicoder");
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
            <>
              <p className={styles.description}>
                <code>Oops! {error.message} :(</code>
              </p>
              <p className={styles.description}>
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
                  // Sort by last updated, then slice the first 3, then reverse the order
                  .sort(
                    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
                  )
                  .slice(0, 3)
                  .reverse()
                  .map((project) => (
                    <Project project={project} key={project.id} />
                  ))
              ) : (
                <p className={styles.description}>
                  I do not have any public projects on GitHub at the moment.
                  Check back later!
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
