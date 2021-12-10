const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  addToCart
} = require("../controllers/productController");

const { uploadProductImage } = require("../controllers/uploadController");

router.route("/sell").post(createProduct);
router.route("/shop").get(getAllProducts);
router.route("/uploads").post(uploadProductImage);
router.route("/buy").post(addToCart);

module.exports = router;
