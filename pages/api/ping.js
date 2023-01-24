// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * Ping endpoint
 * @param {*} req 
 * @param {*} res 
 * @returns
 * {
 * status: "ok" // or "error"
 * }
 */
export default function handler(req, res) {
  // fetch
  try {
    res.status(200).json({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: "error" });
  }
}
