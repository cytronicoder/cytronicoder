export async function GET() {
    try {
        const response = await fetch("https://slack.cytronicoder.com/api/current-profile-pic");

        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch profile image: ${response.statusText}`);
        }

        const imageUrl = response.url;

        // Return the image URL as JSON
        return new Response(
            JSON.stringify({ imageUrl }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching profile image:", error);

        // Return error details in the response
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
