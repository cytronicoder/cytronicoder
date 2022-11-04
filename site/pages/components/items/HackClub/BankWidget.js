import Widget from "../Widget";
import styles from "../Widget.module.css";

export default function BankWidget() {
  return (
    <Widget logo="/hack/bank.svg" title="SAIS Hack Club Bank">
      <p>
        The SAIS Hack Club now has a bank account! We're currently working on
        getting everything set up, but in the meantime, you can donate to us
        through the form linked{" "}
        <a
          className={styles.link}
          href="https://bank.hackclub.com/donations/start/sais-hack-club"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </Widget>
  );
}
