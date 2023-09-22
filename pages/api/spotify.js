import querystring from "querystring";
require("dotenv").config();

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

// Basic Authorization
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

// Set up API endpoints
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// STEP 1: get an access token
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

// STEP 2: get the user's currently playing song
const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// This function gets the current song that is playing in my Spotify account.
export default async function handler(req, res) {
  try {
    // First, we execute the getNowPlaying() function, which is responsible for calling the Spotify API and returning the song information.
    const response = await getNowPlaying();

    // If the response status is 204 (no content), or if it is greater than 400 (an error has occurred), we return a JSON object with the isPlaying property set to false.
    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    // If we have a response, we can assume that the song is playing.
    // We can now destructure the song information from the response.
    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((artist) => artist.name)
      .join(", ")
      .replace(/,(?!.*,)/gim, " and");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    // Finally, we return a JSON object with the song information.
    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    // If an error occurs, we return a 500 status code and the error message.
    console.error(error);
    return res.status(500).json({ error });
  }
}
