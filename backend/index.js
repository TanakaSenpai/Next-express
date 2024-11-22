const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/article")
const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/auth", authRoutes);
app.use("/article", articleRoutes)

mongoose.connect("mongodb://localhost:27017/article_postings").then(() => console.log("MongoDB connected successfully...")).catch(err => console.log(err));

app.get("/api/", (req, res) => {
    res.status(200).send("Ki chas tui?")
})
app.listen(port, () => {
    console.log("Server listening on port", port);
})
