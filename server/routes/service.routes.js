const express = require("express");
const { validateToken } = require("../middlewares/validation");
const router = express.Router();

// const serviceController = require("../controllers/serviceController");

router.post("/", validateToken, (req, res) => {
  res.status(200).json({ message: "Protected Route Access" });
});

module.exports = router;
