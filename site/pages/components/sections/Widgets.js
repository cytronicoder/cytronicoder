import HackClubBankWidget from "../items/HackClubBankWidget";
import styles from "./Widgets.module.css";

export default function Widgets() {
  return (
    <div className={styles.widgets}>
      <HackClubBankWidget />
    </div>
  );
}
