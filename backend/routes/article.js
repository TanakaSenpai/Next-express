const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Article = require("../models/article")


router.get("/articles", async (req, res) => {
    const articles = await Article.find().sort({createdAt: -1});
    res.status(200).json(articles);
})

router.get("/article/:id", async (req, res) => {
    const id = req.params.id;
    const article = await Article.findById(id);

    if (article) return res.status(200).json(article);
    else return res.status(404).json({message: "Article not found"})
})

router.post("/create", async (req, res) => {
    try {
        const { title, content, authorId, categories } = req.body;   
        const newArticle = new Article({ title, content, authorId, categories });
        await newArticle.save();
        res.status(200).json({message: "Article saved successfully."})
    } catch (error) {
        res.status(500).json({message: "Error creating article: " + error.message});
    }
})

router.post("/update", async (req, res) => {
    try {
        const { _id, title, content, categories } = req.body;   
        if (!_id) return res.status(400).json({ message: "Invalid article ID." });
        if (!mongoose.Types.ObjectId.isValid(_id)) {
          return res.status(400).json({ message: "Invalid article ID" });
        }
        const updatedArticle = await Article.findByIdAndUpdate(_id, { title, content, categories }, { new: true });
        if (!updatedArticle) return res.status(404).json({message: "Article not found"})
        res.status(200).json({message: "Article updated successfully.", article: updatedArticle})
    } catch (error) {
        res.status(500).json({message: "Error updating article: " + error.message});
    }
})

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid article ID" });
    }
    try {
        await Article.findByIdAndDelete(id);
        return res.status(200).json({ message: "Article deleted successfully." })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
});


module.exports = router;
