const Category = require("../models/category.model");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a category image" });
    }


    const category = await Category.create({
      name,
      image: req.file.path, 
    });

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createCategory
}