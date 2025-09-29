"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import SpotifyLogo from "../../../public/spotify.svg";
import Widget from "./Widget";

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
                <Widget svg={SpotifyLogo}>
                    {song.isPlaying ? (
                        <Link
                            href={song.songUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline_on_hover}
                        >
                            I am listening to {song.title} by {song.artist}!
                        </Link>
                    ) : (
                        <>I am not currently listening to anything.</>
                    )}
                </Widget>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Loading...
                </div>
            )}
        </>
    );
}
