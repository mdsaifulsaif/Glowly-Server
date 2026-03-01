const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/authcontollers");
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddlwarre = require("../middlewares/adminMiddleware")


// Registration Route
// URL: POST /api/auth/register
router.post("/register", userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.get("/all-users", authMiddleware.protect, adminMiddlwarre.isAdmin, userControllers.getAllUsers);

module.exports = router;