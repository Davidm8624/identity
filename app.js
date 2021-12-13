require("dotenv").config()
require("express-async-errors")
const fileUpload = require('express-fileupload')
const express = require('express')
const app = express()
const shopRouter = require('./routes/shopRouter')
const connectDB = require('./DB/connect')

const cloudinary = require('cloudinary').v2

cloudinary.config({ 
  cloud_name: process.env.CLOUD_KEY,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const notFoundError = require('./Middleware/Not-found')
const errorHandlerMiddleware = require('./Middleware/Error-handler')

const port = process.env.PORT || 3000;
app.use(express.json())
.use(fileUpload({useTempFiles: true}))

.use("/", express.static('./public')) 
.use('/api/v1/products', shopRouter)
.use(notFoundError)
// .use(errorHandlerMiddleware)

const start = async() => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log('listening at ' + port))
  }catch(error){
    console.log(error);
  }
}

start()