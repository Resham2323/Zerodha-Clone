require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./model/holdingModel");
const { PositionModel } = require("./model/positionModel");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares should be first
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3002"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// Frontend build
app.use("/", express.static(path.join(__dirname, "public/frontend")));
app.get("*", (req, res, next) => {
  // Only handle frontend routes, skip /dashboard and API
  if (req.path.startsWith("/dashboard") || req.path.startsWith("/all")) return next();
  res.sendFile(path.join(__dirname, "public/frontend", "index.html"));
});

// Dashboard build
app.use("/dashboard", express.static(path.join(__dirname, "public/dashboard")));
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dashboard", "index.html"));
});

// Routes
app.get("/allholdings", async (req, res) => {
  console.log("✅ /allholdings route hit hua");
  try {
    let allholdings = await HoldingsModel.find({});
    res.json(allholdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionModel.find({});
  res.json(allpositions);
});

app.use("/", authRoute);

// DB + Server start
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
});