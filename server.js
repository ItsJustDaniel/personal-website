const express = require("express");
const app = express();
const fs = require("fs");

const articles = fs.readdirSync("./BlogArticles").map((article, index) => ({
  name: article,
  id: index,
  time: fs.statSync("./BlogArticles/" + article).mtime,
  content: fs.readFileSync("./BlogArticles/" + article, "utf8"),
}));
app.get("/api/blog", (req, res) => {
  res.json(articles);
});

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
