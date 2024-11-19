import querystring from "querystring";

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

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

    if (!response.ok) {
        throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    return response.json();
};

const getNowPlaying = async (access_token) => {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    return response;
};

export async function GET() {
    try {
        const { access_token } = await getAccessToken();
        const response = await getNowPlaying(access_token);

        if (response.status === 204 || response.status > 400) {
            return new Response(
                JSON.stringify({ isPlaying: false }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

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

        return new Response(
            JSON.stringify({
                album,
                albumImageUrl,
                artist,
                isPlaying,
                songUrl,
                title,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching currently playing song:", error);

        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
