export default async function handler(req, res) {
  const { courseName } = req.query;
  res.status(200).json({ message: `Quiz for ${courseName}` });
}
