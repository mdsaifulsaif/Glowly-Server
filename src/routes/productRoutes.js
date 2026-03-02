const express = require("express");
const router = express.Router();
const productContollers = require("../controllers/productContoller");
const { upload } = require("../config/cloudinary");
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/adminMiddleware");


const productUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 }, 
  { name: "images", maxCount: 10 }, 
]);


router.post("/create-product", protect, isAdmin,  productUpload, productContollers.createProduct);

module.exports = router;
