"use client";

import { useState, useEffect } from "react";
import OptimizedImage from "./OptimizedImage";
import styles from "./PhotoMarquee.module.css";

export default function PhotoMarquee() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch("/api/photos");

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                }

                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    setPhotos(data.sort(() => Math.random() - 0.5));
                } else {
                    setError("No photos available");
                }

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching photos:", error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (isLoading) {
        return <div className={styles.marqueeContainer}>Loading photos...</div>;
    }

    if (error) {
        return <div className={styles.marqueeContainer}>Unable to load photos: {error}</div>;
    }

    return (
        <div className={styles.marqueeContainer}>
            {photos.length > 0 && (
                <div key={photos.join("-")} className={styles.marqueeContent}>
                    {photos.concat(photos).map((src, index) => (
                        <div key={index} className={styles.photoWrapper}>
                            <OptimizedImage
                                src={src}
                                alt={`Photo ${index + 1}`}
                                width={300}
                                height={400}
                                className={styles.photo}
                                priority={index < 4}
                                quality={85}
                                sizes="(max-width: 768px) 50vw, 300px"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}