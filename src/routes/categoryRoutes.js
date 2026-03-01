const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers/categoryControllers");
const { upload } = require("../config/cloudinary"); 



// URL: POST /api/auth/register
router.post("/create-category", upload.single("image"), categoryControllers.createCategory);


module.exports = router;