import Script from "next/script";
import styles from "../styles/Webring.module.css";

const Webring = () => {
  return (
    <div className={styles.webring}>
      <div id="webring-wrapper">
        <a
          href="https://webring.hackclub.com/"
          id="previousBtn"
          className="webring-anchor"
          title="Previous"
        >
          ‹
        </a>
        <a
          href="https://webring.hackclub.com/"
          className="webring-logo"
          title="Hack Club Webring"
          alt="Hack Club Webring"
        ></a>
        <a
          href="https://webring.hackclub.com/"
          id="nextBtn"
          className="webring-anchor"
          title="Next"
        >
          ›
        </a>
        <Script
          src="https://webring.hackclub.com/public/embed.min.js"
          onError={() => {
            console.log("Error loading webring script!");
          }}
          onLoad={() => {
            console.log("Webring script loaded!");
          }}
        />
      </div>
    </div>
  );
};

export default Webring;
