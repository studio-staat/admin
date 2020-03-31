import express from "express";

const app = express();
const port = process.env.FILESERVER_PORT || 6000;

app.post("*", (req, res) => {
  res.json({ fs: true });
});

app.listen(port, "localhost", () => {
  console.log(`🚀  File server ready at http://localhost:${port}`);
});
