// backend/index.js
const express = require('express');
const app = express();
const port = 5000;

app.get('/status', (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
