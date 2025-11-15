"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./SpotifyWidget.module.css";

export default function SpotifyWidget() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const [song, setSong] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchSpotifyData = async () => {
            try {
                const data = await fetcher("/api/spotify");

                if (data.fallback) {
                    console.log("Spotify API is rate limited");
                    if (!song.isPlaying) {
                        setSong({ isPlaying: false });
                    }
                    return;
                }

                setSong(data);
                setIsLoaded(true);
            } catch (error) {
                console.error("Error fetching Spotify data:", error);
                setSong({ isPlaying: false, error: true });
                setIsLoaded(true);
            }
        };

        fetchSpotifyData();

        const spotifyInterval = setInterval(fetchSpotifyData, 30 * 1000);
        return () => clearInterval(spotifyInterval);
    }, [song.isPlaying]);

    return (
        <>
            {isLoaded ? (
                <div className={styles.cassette}>
                    <div className={styles.cassetteContent}>
                        <div className={styles.cassetteTop}>
                            <div className={styles.reel}>
                                <div className={`${styles.reelInner} ${song.isPlaying ? styles.spinning : ''}`}></div>
                            </div>
                            <div className={styles.tape}></div>
                            <div className={styles.reel}>
                                <div className={`${styles.reelInner} ${song.isPlaying ? styles.spinning : ''}`}></div>
                            </div>
                        </div>
                        <div className={styles.songInfo}>
                            {song.isPlaying ? (
                                <Link
                                    href={song.songUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.songLink}
                                >
                                    <div className={styles.songTitle}>{song.title}</div>
                                    <div className={styles.artistName}>{song.artist}</div>
                                </Link>
                            ) : (
                                <div className={styles.notPlaying}>
                                    <div className={styles.songTitle}>...</div>
                                    <div className={styles.artistName}>Not playing</div>
                                </div>
                            )}
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.button}></div>
                            <div className={styles.button}></div>
                            <div className={styles.button}></div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <a
                            href="https://github.com/cytronicoder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewMore}
                        >
                            Check out my Spotify profile →
                        </a>
                    </div>
                </div>
            ) : (
                <div className={styles.loading}>
                    Loading music player...
                </div>
            )}
        </>
    );
}
