const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    name: "Ibsham Chaudhary",
  });
});

app.listen(PORT);
