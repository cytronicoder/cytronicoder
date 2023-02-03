import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/Spotify.module.css";

import SpotifyLogo from "@/logos/spotify.svg";

import Code from "@/components/Code";

export default function Spotify() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const [song, setSong] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch the song data from the Spotify API every second
    const interval = setInterval(async () => {
      fetcher("/api/spotify").then((data) => {
        setSong(data);
        setIsLoaded(true);
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {isLoaded ? (
        <div className={styles.header}>
          <Image
            src={SpotifyLogo}
            alt="Spotify Logo"
            width={24}
            height={24}
            className={styles.logo}
          />
          {song.isPlaying ? (
            <div>
              <h2 className={styles.title}>I am currently listening to <Link href={song.songUrl} target="_blank" rel="noopener noreferrer">{song.title}</Link> by {song.artist}.</h2>
            </div>
          ) : (
            <h2 className={styles.title}>I am not currently listening to anything.</h2>
          )}
        </div>
      ) : (
        <div className={styles.header}>
          <h2 className={styles.title}>Loading...</h2>
        </div>
      )}

      <Code language="javascript">
        {`useEffect(() => {
  // Fetch the song data from the Spotify API every second
  const interval = setInterval(async () => {
    fetcher("/api/spotify").then((data) => {
      setSong(data);
      setIsLoaded(true);
    });
  }, 1000);
  
  // Clear the interval when the component unmounts
  return () => clearInterval(interval);
}, []);`}
      </Code>

    </div>
  );
}