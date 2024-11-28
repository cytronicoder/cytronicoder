"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Assets
import SpotifyLogo from "../../../public/spotify.svg";
import Widget from "./Widget";

export default function SpotifyWidget() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const [song, setSong] = useState({});
    const [weather, setWeather] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Fetch Spotify data every second
        const interval = setInterval(async () => {
            fetcher("/api/spotify")
                .then((data) => {
                    setSong(data);
                    setIsLoaded(true);
                })
                .catch((error) => console.log(error));
        }, 1000);

        // Fetch weather data once
        fetcher("/api/weather")
            .then((data) => {
                setWeather(data.temperature ? `${data.temperature}°C` : "unavailable");
            })
            .catch((error) => console.log("Weather fetch error:", error));

        // Clear interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isLoaded ? (
                <Widget svg={SpotifyLogo}>
                    It's currently {weather || "unavailable"} in Singapore, and{" "}
                    {song.isPlaying ? (
                        <Link
                            href={song.songUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            I'm listening to {song.title} by {song.artist}!
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
