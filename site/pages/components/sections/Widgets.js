import HackClubBankWidget from "../items/HackClub/BankWidget";
import LionCityHacksWidget from "../items/HackClub/LionCityHacks";

import SoonWidget from "../items/SoonWidget";
import styles from "./Widgets.module.css";

export default function Widgets({ isHack }) {
  return (
    <div className={styles.widgets}>
      {isHack ? (
        <>
          <LionCityHacksWidget />
          <HackClubBankWidget />
        </>
      ) : (
        <>
          <SoonWidget />
        </>
      )}
    </div>
  );
}
