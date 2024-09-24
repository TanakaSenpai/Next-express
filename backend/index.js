const express = require("express");
const cors = require("cors")
const userRoutes = require("./routes/user")
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

app.get("/api/", (req, res) => {
    res.status(200).send("Ki chas tui?")
})
app.listen(port, () => {
    console.log("Server listening on port", port);
})
