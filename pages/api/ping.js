export default function handler(req, res) {
  // fetch
  try {
    // send back a success response
    res.status(200).json({ status: "ok" });
  } catch (error) {
    // send back an error response
    res.status(500).json({ status: "error" });
  }
}
