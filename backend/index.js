const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/user")
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

mongoose.connect("mongodb://localhost:27017/article_postings").then(() => console.log("MongoDB connected successfully...")).catch(err => console.log(err));

app.get("/api/", (req, res) => {
    res.status(200).send("Ki chas tui?")
})
app.listen(port, () => {
    console.log("Server listening on port", port);
})
