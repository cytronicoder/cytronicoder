import Link from "next/link";
import { useState, useEffect } from "react";

// Assets
import SpotifyLogo from "@/assets/spotify.svg";
import Widget from "./Widget";

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
    <>
      {isLoaded ? (
        <Widget svg={SpotifyLogo}>
          {song.isPlaying ? (
            <>
              I am currently listening to{" "}
              <Link
                href={song.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {song.title}
              </Link>{" "}
              by {song.artist}!
            </>
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
