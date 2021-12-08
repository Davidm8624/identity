require("dotenv").config()
require("express-async-errors")
const fileUpload = require('express-fileupload')
const express = require('express')
const app = express()
const productRouter = require('./routes/productsRouter')
const connectDB = require('./DB/connect')

const cloudinary = require('cloudinary').v2
cloudinary.config({ 
  cloud_name: process.env.cloud_name ,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

const notFoundError = require('./Middleware/Not-found')
const errorHandlerMiddleware = require('./Middleware/Error-handler')

const port = process.env.PORT || 3000
app.use(express.json())
app.use(fileUpload({useTempFiles: true})) //its better to save it in the temp to that it wont just use all the ram trying to hold all of the images
app.use(express.static('./public')) //this is where the front end is at
app.get('/', (req,res)=>{
  res.send('<h1>file upload starter</h1>')
})
app.use('/api/v1/products', productRouter)
app.use(notFoundError)
app.use(errorHandlerMiddleware)

const start = async() => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log('listening at ' + port))
  }catch(error){
    console.log(error);
  }
}

start()