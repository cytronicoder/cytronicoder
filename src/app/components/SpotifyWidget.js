"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import SpotifyLogo from "../../../public/spotify.svg";
import Widget from "./Widget";

import styles from "./SpotifyWidget.module.css";

export default function SpotifyWidget() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const [song, setSong] = useState({});
    const [weather, setWeather] = useState(null);
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

        const fetchWeatherData = async () => {
            try {
                const data = await fetcher("/api/weather");
                setWeather(data.temperature ? `${data.temperature}°C` : "unavailable");
            } catch (error) {
                console.error("Weather fetch error:", error);
                setWeather("unavailable");
            }
        };

        fetchSpotifyData();
        fetchWeatherData();

        const spotifyInterval = setInterval(fetchSpotifyData, 30 * 1000);
        return () => clearInterval(spotifyInterval);
    }, []);

    return (
        <>
            {isLoaded ? (
                <Widget svg={SpotifyLogo}>
                    It is currently {weather || "unavailable"} in Singapore, and{" "}
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
