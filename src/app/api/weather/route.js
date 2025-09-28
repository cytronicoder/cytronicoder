const WEATHER_API_ENDPOINT = `https://api.data.gov.sg/v1/environment/air-temperature`;

let cachedWeatherData = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 15 * 60 * 1000;

const getWeatherData = async () => {
    const response = await fetch(WEATHER_API_ENDPOINT);

    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    return response.json();
};

export async function GET() {
    try {
        const now = Date.now();
        if (cachedWeatherData && (now - cacheTimestamp) < CACHE_DURATION) {
            return new Response(JSON.stringify(cachedWeatherData), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        const data = await getWeatherData();

        if (!data || !data.items || !data.items[0] || !data.items[0].readings) {
            if (cachedWeatherData) {
                console.log("Weather API returned no data, serving cached data");
                return new Response(JSON.stringify(cachedWeatherData), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                });
            }

            return new Response(
                JSON.stringify({ error: "No weather data available", temperature: "unavailable", unit: "°C" }),
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

        const weatherData = {
            temperature: averageTemperature.toFixed(1),
            unit: "°C",
        };

        cachedWeatherData = weatherData;
        cacheTimestamp = now;

        return new Response(
            JSON.stringify(weatherData),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching weather data:", error);

        if (cachedWeatherData) {
            console.log("Weather API error, serving cached data");
            return new Response(JSON.stringify(cachedWeatherData), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        if (error.status === 429) {
            return new Response(
                JSON.stringify({
                    error: "Rate limited",
                    message: "Weather API rate limited, please try again later",
                    temperature: "unavailable",
                    unit: "°C",
                    fallback: true
                }),
                {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        return new Response(
            JSON.stringify({ error: "Internal Server Error", temperature: "unavailable", unit: "°C" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
