import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Styles
import styles from "@/styles/CurrentlyPlaying.module.css";

// Assets
import SpotifyLogo from "@/assets/spotify.svg";
import Tilt from "./Tilt";

export default function Spotify() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const [song, setSong] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch the song data from the Spotify API every second
    const interval = setInterval(async () => {
      fetcher("/api/spotify")
        .then((data) => {
          // console.log(data);
          setSong(data);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Tilt>
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
                <h2 className={styles.title}>I am currently listening to <span className={styles.underline_on_hover}><Link href={song.songUrl} target="_blank" rel="noopener noreferrer">{song.title}</Link></span> by {song.artist}!</h2>
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
      </div>
    </Tilt>
  );
}