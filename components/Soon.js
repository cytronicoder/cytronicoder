import { useEffect } from "react";

// Styles
import styles from "@/styles/Soon.module.css";

// Components
import Code from "./Code";

export default function Soon() {
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
      })
      .catch((error) => {
        document.getElementById("quote").innerHTML = "Something went wrong!";
        document.getElementById("author").innerHTML = "Try again later";
      });
  }, []);

  return (
    <div className={styles.soon}>
      <h3 className={styles.soonText}>Cool stuff coming soon!</h3>

      <p className={styles.quoteQuestion}>
        In the meantime, why not check out a random quote?
      </p>

      <div className={styles.quoteContainer}>
        <p className={styles.quoteText} id="quote"></p>
        <p className={styles.quoteAuthor} id="author"></p>
      </div>

      <Code language="javascript">
        {`const quote = fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quote").innerHTML = data.content;
    document.getElementById("author").innerHTML = data.author;
  })
  .catch((error) => {
    document.getElementById("quote").innerHTML = "Something went wrong!";
    document.getElementById("author").innerHTML = "Try again later";
  });`}
      </Code>
    </div>
  );
}
