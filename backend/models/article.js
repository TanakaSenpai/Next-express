const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  categories: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
