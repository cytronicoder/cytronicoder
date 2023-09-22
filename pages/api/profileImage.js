export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://slack.cytronicoder.com/api/current-profile-pic"
    );
    const imageUrl = response.url;
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Error fetching profile image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
