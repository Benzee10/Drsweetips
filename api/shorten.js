export default async function handler(req, res) {
  const { longUrl } = req.query;

  const apiKey = "7fbe2d5006b6b205c76595f8a80e46db218f9";
  const cuttlyUrl = `https://cutt.ly/api/api.php?key=${apiKey}&short=${encodeURIComponent(longUrl)}`;

  try {
    const response = await fetch(cuttlyUrl);
    const data = await response.json();

    if (data.url.status === 7) {
      res.status(200).json({ shortLink: data.url.shortLink });
    } else {
      res.status(400).json({ error: data.url.title || "Shortening failed" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal error: " + err.message });
  }
}
