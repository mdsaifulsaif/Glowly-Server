const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const imageUploadRoutes = require("./routes/imageupuloadRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes")

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501","http://127.0.0.1:5500",],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api", imageUploadRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", reviewRoutes)

module.exports = app;
