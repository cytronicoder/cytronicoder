import fs from "fs";
import path from "path";
import Image from "next/image";
import styles from "./PhotoMarquee.module.css";

export default function PhotoMarquee() {
    const photosDirectory = path.join(process.cwd(), "public", "photos");
    const photoFiles = fs.readdirSync(photosDirectory);

    const photos = photoFiles.map((fileName) => `/photos/${fileName}`);
    photos.sort(() => Math.random() - 0.5);

    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {photos.concat(photos).map((src, index) => (
                    <div key={index} className={styles.photoWrapper}>
                        <Image
                            src={src}
                            alt={`Photo ${index + 1}`}
                            width={300}
                            height={400}
                            className={styles.photo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
