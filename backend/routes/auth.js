const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
    }
    return res.status(200).json(user);
})

router.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body; // Move this up to define `email`

  try {
    // Check for existing user with the same email
    const isDupliUser = await User.findOne({ email });
    if (isDupliUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPass });
    await newUser.save();

    return res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "An error occurred" });
  }
});


module.exports = router;
