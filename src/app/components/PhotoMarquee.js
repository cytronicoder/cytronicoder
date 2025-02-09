"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PhotoMarquee.module.css";

export default function PhotoMarquee() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("/api/photos")
            .then((res) => res.json())
            .then((data) => {
                setPhotos(data.sort(() => Math.random() - 0.5));
            });
    }, []);

    return (
        <div className={styles.marqueeContainer}>
            {photos.length > 0 && (
                <div key={photos.join("-")} className={styles.marqueeContent}>
                    {photos.concat(photos).map((src, index) => (
                        <div key={index} className={styles.photoWrapper}>
                            <Image
                                src={src}
                                alt={`Photo ${index + 1}`}
                                width={300}
                                height={400}
                                className={styles.photo}
                                priority={true}
                                quality={100}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}