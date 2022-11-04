import Widget from "../Widget";
import styles from "../Widget.module.css";

export default function LionCityHacksWidget() {
  return (
    <Widget logo="/hack/lioncityhacks.svg" title="Lion City Hacks">
      <p>
        If you are currently in Singapore, you can join the Lion City Hacks
        hackathon on December 3rd at Red Hat SG. Join us for 12 hours of
        hacking, workshops & friendship. For more information, visit{" "}
        <a className={styles.link} href="https://lioncityhacks.com/">
          lioncityhacks.com
        </a>
        .
      </p>
    </Widget>
  );
}
