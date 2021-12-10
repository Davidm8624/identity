const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require('fs')

const uploadProductImage = async () => {
  const response = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "file-upload"
  });
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(200).json({image: {src: response.secure_url}})
};

module.exports = {
  uploadProductImage,
};