const User = require("../model/UserModel");
const { createSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {

  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password,
      username,
      createdAt: new Date(),
    });
    console.log("signup plain password:", password);
    console.log("signup hashed password:", hashedPassword);


    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Signup failed" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    console.log("LOGIN REQ BODY:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

  const auth = await bcrypt.compare(password.trim(), user.password);
console.log("Auth result:", auth);
console.log("Password in DB:", user.password);

    if (!auth) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      success: true,
      message: "User logged in successfully"
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Login failed" });
  }
};