const express = require("express");

const app = express();
app.use(express.json());

// POST endpoint
app.post("/n", (req, res) => {
  const { data } = req.body;

  // Validate input
  if (!data || typeof data !== "string") {
    return res.status(400).json({ error: "Invalid input. 'data' must be a string." });
  }

  // Convert string to array of characters
  const charArray = data.split("");

  // Sort alphabetically
  const sortedArray = charArray.sort();

  // Return result
  res.json({
    word: sortedArray
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});