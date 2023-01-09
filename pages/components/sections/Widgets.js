import HackClubBankWidget from "../items/HackClub/BankWidget";

import SoonWidget from "../items/SoonWidget";
import styles from "./Widgets.module.css";

export default function Widgets({ isHack }) {
  return (
    <div className={styles.widgets}>
      {isHack ? (
        <>
          <HackClubBankWidget />
        </>
      ) : (
        <>
          {/* <SoonWidget /> */}
        </>
      )}
    </div>
  );
}
