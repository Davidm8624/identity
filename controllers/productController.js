const Product = require("../Models/Product");
const Cart = require("../Models/Cart");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
};

const getAllProducts = async (req, res) => {
  const {songName, artist, rating, creator} = req.query;
  let searchQuery = {};

  if(songName) searchQuery.songName = songName;
  if(artist) searchQuery.artist = artist;
  if(rating) searchQuery.rating = rating;
  if(creator) searchQuery.creator = creatorID;

  const product = await Product.find(songQuery);
};

const addToCart = async(req, res)=> {
  const {songName, artist, rating, creator} = req.query;
  let searchQuery = {};

  if(songName) searchQuery.songName = songName;
  if(artist) searchQuery.artist = artist;
  if(rating) searchQuery.rating = rating;
  if(creator) searchQuery.creator = creatorID;

  const add = await Product.find(songQuery);
  const cart = Cart.create({add});
  res.json({status: 200, msg: `${add} was added to your cart.`});
}

module.exports = {
  createProduct,
  getAllProducts,
  addToCart
};
