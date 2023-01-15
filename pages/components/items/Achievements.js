import Widget from "./Widget";
import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <Widget logo="/achievements.svg" title="Achievements">
      <div className={styles.achievements}>
        <ul className={styles.achievementsList}>
          <li className={styles.achievement}>
            Gold division in USACO
          </li>
          <li className={styles.achievement}>
            Received Honor Roll of Distinction (top 1%) for the American
            Mathematics Competition 8 and the Certificate of Achievement for
            AMC10
          </li>
          <li className={styles.achievement}>
            First place in Singapore for:{" "}
            <ul className={styles.achievementsList}>
              <li className={styles.achievement}>
                BEBRAS International Challenge on Informatics and Computational
                Thinking (BEBRAS)
              </li>
              <li className={styles.achievement}>
                Design Thinking with Robotics and Computational Thinking
                International Competition Finals (DrCT)
              </li>
              <li className={styles.achievement}>
                Singapore Math Global Assessments Final (SINGA)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Widget>
  );
}
