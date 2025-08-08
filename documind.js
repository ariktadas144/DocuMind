export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { action, documentId, text } = req.body;

  const resp = await fetch("https://api.documind.example/v1/process", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.DOCUMIND_API_KEY}`
    },
    body: JSON.stringify({ action, documentId, text })
  });

  const data = await resp.json();
  res.status(200).json(data);
}
