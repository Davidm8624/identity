const Product = require("../Models/Product");
const Cart = require("../Models/Cart");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
};

const getAllProducts = async (req, res) => {
  const {songName, artist, rating} = req.query;
  let searchQuery = {};

  if(songName) searchQuery.songName = songName;
  if(artist) searchQuery.artist = artist;
  if(rating) searchQuery.rating = rating;

  const product = await Product.find(searchQuery);
  res.status(200).json({product})
};

const getAProduct = async(req, res) => {
  const id = req.query;

  const product = Product.findById({id});
}

const addToCart = async (req, res) => {
  const id = req.body;

  const add = await Product.findById(id);
  const cart = Cart.create({add});
  res.json({status: 200, msg: `${add} was added to your cart.`});
}

module.exports = {
  createProduct,
  getAllProducts,
  addToCart,
  getAProduct
};
