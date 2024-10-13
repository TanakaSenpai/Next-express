const express = require("express");
const User = require("../models/user");

const router = express.Router();


router.get("/getname/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId).select("name");
    if (user)
        return res.status(200).json(user)
    else
        return res.status(404).json({ message: "User not found" });
})

module.exports = router;
