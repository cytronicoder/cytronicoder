import SoonWidget from "../items/SoonWidget";
import styles from "./Widgets.module.css";

export default function Widgets({ isHack }) {
  return (
    <div className={styles.widgets}>
      <SoonWidget />
    </div>
  );
}
