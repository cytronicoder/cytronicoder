import { useEffect } from "react";
import styles from "./SoonWidget.module.css";

import Code from "./Code";

export default function SoonWidget() {
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
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
  });`}
      </Code>
    </div>
  );
}
