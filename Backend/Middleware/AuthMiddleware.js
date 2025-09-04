const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    // Attach user info to request for later use
    req.user = user;
    next(); // <--- important to pass control to the next route handler
  } catch (err) {
    return res.status(401).json({ status: false, message: "Token invalid" });
  }
};