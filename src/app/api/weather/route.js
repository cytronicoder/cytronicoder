const WEATHER_API_ENDPOINT = `https://api.data.gov.sg/v1/environment/air-temperature`;

const getWeatherData = async () => {
    const response = await fetch(WEATHER_API_ENDPOINT);

    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    return response.json();
};

export async function GET() {
    try {
        const data = await getWeatherData();

        if (!data || !data.items || !data.items[0] || !data.items[0].readings) {
            return new Response(
                JSON.stringify({ error: "No weather data available" }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const readings = data.items[0].readings;
        const averageTemperature =
            readings.reduce((sum, reading) => sum + reading.value, 0) /
            readings.length;

        return new Response(
            JSON.stringify({
                temperature: averageTemperature.toFixed(1),
                unit: "°C",
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching weather data:", error);

        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
