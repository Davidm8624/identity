const path = require("path");
const cloudinary = require("cloudinary").v2;
//becasue we put v2 up here we dont have to specify that later in the code
const fs = require('fs')

const oldUploadProductImage = async (req, res) => {
  if (!req.files) {
    throw new Error("no file provided");
  }

  // console.log(req.files);
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new Error("choose an img only");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new Error("maxsize is 1 mb");
  }
  const imagePath = path.join(
    __dirname,
    "../public/uploads",
    productImage.name
  );
  // console.log(productImage);
  await productImage.mv(imagePath);
  res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
};

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

//this can be done in the same controller but there are dont in diffrent ares becasue they have diffrent routes, so just to look better
