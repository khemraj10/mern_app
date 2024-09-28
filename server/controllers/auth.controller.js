const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwt");

let signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

let login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication Failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = await generateToken({userId: user._id});

    return res.status(200).json({
      success: true,
      message: "Authentication successful!",
      resp: {
        token: token,
        username: user.username
      }
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }

};

module.exports = { login, signup };
