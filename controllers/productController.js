const Product = require("../Models/Product");
const Cart = require("../Models/Cart");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
};

const getAllProducts = async (req, res) => {
  // const {songName, artist, rating} = req.query;
  // let searchQuery = {};

  // if(songName) searchQuery.songName = songName;
  // if(artist) searchQuery.artist = artist;
  // if(rating) searchQuery.rating = rating;

  // if(searchQuery !== {}){
    const product = await Product.find({});
    res.status(200).json({product})
  // }else{
  //   const product = await Product.find()
  // }
};

const getAProduct = async(req, res) => {
  const id = req.query;

  const product = Product.findById(id);
}

const addToCart = async (req, res) => {
  const {id} = req.body;
  console.log(id + " id");

  const add = await Product.findById(id)
  const {name, price, image} = add;
  const cart = await Cart.create({name, price, image});

  res.status(200).json({msg: `${add} was added to your cart.`, cart});
}

module.exports = {
  createProduct,
  getAllProducts,
  addToCart,
  getAProduct
};
