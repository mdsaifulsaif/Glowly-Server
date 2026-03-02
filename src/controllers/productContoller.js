const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      regularPrice,
      salePrice,
      categoryID,
      stock,
      isFeatured,
    } = req.body;

    
    if (!req.files || !req.files.thumbnail) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please upload a main thumbnail image",
        });
    }

    
    const thumbnailUrl = req.files.thumbnail[0].path;


  
    let galleryImages = [];
    if (req.files.images) {
      galleryImages = req.files.images.map((file) => file.path);
    }


   
    const product = await Product.create({
      name,
      description,
      regularPrice,
      salePrice,
      thumbnail: thumbnailUrl,
      images: galleryImages,
      categoryID,
      stock: stock || 0,
      isFeatured: isFeatured || false,
    });

    res.status(201).json({
      success: true,
      message: "Product created with images!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createProduct };
