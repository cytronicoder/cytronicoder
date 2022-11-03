import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./HackClubBankWidget.module.css";

import Icon from "@hackclub/icons";

export default function HackClubBankWidget() {
  const [toggle, setToggle] = useState(false);

  const toggleWidget = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.getElementsByClassName(styles.widgetBody)[0].style.display =
        "block";
    } else {
      document.getElementsByClassName(styles.widgetBody)[0].style.display =
        "none";
    }
  }, [toggle]);

  return (
    <div className={styles.widget}>
      <div className={styles.widgetHeader}>
        <Image
          src="/hack/bank.svg"
          alt="Hack Club Bank logo"
          width={32}
          height={32}
          className={styles.widgetLogo}
        />
        <h2 className={styles.widgetTitle}>Hack Club Bank</h2>
        {toggle ? (
          <Icon
            glyph="up-caret"
            size={32}
            onClick={toggleWidget}
            className={styles.widgetToggle}
          />
        ) : (
          <Icon
            glyph="down-caret"
            size={32}
            onClick={toggleWidget}
            className={styles.widgetToggle}
          />
        )}
      </div>
      <div className={styles.widgetBody}>
        <p className={styles.widgetText}>
          The SAIS Hack Club now has a bank account! We're currently working on getting everything
          set up, but in the meantime, you can donate to us through the form
          below.
        </p>
        <div className={styles.widgetFormAndQR}>
          <iframe
            src="https://bank.hackclub.com/donations/start/sais-hack-club"
            className={styles.widgetIframe}
          ></iframe>

          <div className={styles.widgetQR}>
            <Image
              src="/hack/qr.png"
              alt="Hack Club Bank QR code"
              width={256}
              height={256}
              className={styles.widgetQRImage}
            />

            <p className={styles.widgetQRText}>
              You can also scan this QR code to donate to us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
