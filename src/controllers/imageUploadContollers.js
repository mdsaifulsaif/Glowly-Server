const uploadImage = async (req, res) => {
  try {
    // 1. Check if the file exists in the request
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file selected!",
      });
    }

    // 2. Get the Cloudinary URL from the file object
    const imageUrl = req.file.path;

    // 3. Send the URL back to the client (Frontend)
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully!",
      url: imageUrl,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again.",
      error: error.message,
    });
  }
};


module.exports = { uploadImage };
