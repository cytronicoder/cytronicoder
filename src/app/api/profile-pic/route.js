let cachedProfileData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000;

export async function GET() {
    try {
        const now = Date.now();
        if (cachedProfileData && (now - cacheTimestamp) < CACHE_DURATION) {
            return new Response(
                JSON.stringify(cachedProfileData),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const response = await fetch("https://slack.cytronicoder.com/api/current-profile-pic");
        if (!response.ok) {
            if (cachedProfileData) {
                console.log("External API failed, serving cached data");
                return new Response(
                    JSON.stringify(cachedProfileData),
                    {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }

            if (response.status === 429) {
                console.warn("Rate limited by external API, no cached data available");
                return new Response(
                    JSON.stringify({
                        error: "Rate limited",
                        message: "External API rate limited, please try again later",
                        fallback: true
                    }),
                    {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }

            throw new Error(`Failed to fetch profile image: ${response.statusText}`);
        }

        const imageUrl = response.url;
        cachedProfileData = { imageUrl };
        cacheTimestamp = now;

        return new Response(
            JSON.stringify({ imageUrl }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching profile image:", error);

        if (cachedProfileData) {
            return new Response(
                JSON.stringify(cachedProfileData),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
