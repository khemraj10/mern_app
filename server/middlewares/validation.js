const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const authToken = req.header("Authorization");
  try {
    if (!authToken) return res.status(401).json({ error: "Access denied" });

    const decoded = jwt.verify(token, "yourSecretKey");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(`Error in Validating Token`, error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { validateToken };
