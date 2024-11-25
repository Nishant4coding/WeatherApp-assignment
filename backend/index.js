const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// Mock API for news articles
app.get("/news", (req, res) => {
  const articles = [
    {
      id: 1,
      title: "Breaking News: Tech Innovation",
      description: "A new technology is reshaping the industry...",
      url: "https://example.com/news1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Economy Update: Market Trends",
      description: "The global market trends are showing...",
      url: "https://example.com/news2",
      image: "https://via.placeholder.com/150",
    },
  ];
  res.json(articles);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
