const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  addToCart
} = require("../controllers/productController");

const { uploadProductImage } = require("../controllers/uploadController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImage);
router.route("/c").post(addToCart);

module.exports = router;
