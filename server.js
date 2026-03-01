const express = require("express");
const app = express();

app.use(express.json()); 

app.post("/webhook", (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== "string") {
    return res.status(400).json({
      error: "Invalid input. 'data' must be a string."
    });
  }

  const sorted = data.split("").sort();

  res.json({
    word: sorted
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});