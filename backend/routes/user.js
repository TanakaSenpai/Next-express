const express = require("express");
const User = require("../models/user");

const router = express.Router();


router.get("/", (req, res) => {
    return res.json({
        name: "lol"
    })
})



module.exports = router;
