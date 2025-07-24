const jwt = require("jsonwebtoken");

const jwtAuthMiddleWare = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) res.status(401).json({ message: "Unauthorized" });
  const token = auth.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, "hello");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

const generateJwtToken = (useDetail) => {
  return jwt.sign(useDetail, "hello");
};

module.exports = { jwtAuthMiddleWare, generateJwtToken };
