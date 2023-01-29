import Script from "next/script";
import styles from "@/styles/KonjerAffiliate.module.css";

export default function KonjerAffiliate() {
    return (
        <>
            <Script src="https://gumroad.com/js/gumroad.js" />

            <div className={styles.konjerAffiliate}>
                <p className={styles.description}>You can keep the library alive through donations or by buying a custom book!</p>
                <div className={styles.donate}>
                    <a class="gumroad-button" href="https://gumroad.com/a/963666131/ioyybt" data-gumroad-overlay-checkout="true">Keep the library alive on</a>
                    <a class="gumroad-button" href="https://gumroad.com/a/963666131/mbcngf" data-gumroad-overlay-checkout="true">Get a custom book on</a>
                </div>

                <p className={styles.postscript}>As I am affiliated with Konjer, I will receive a small commission from any purchases made through the links above. However, all of the proceeds will go to building the <a href="https://saishack.club" target="_blank" rel="noopener noreferrer">SAIS Hack Club.</a></p>
            </div>
        </>
    );
}