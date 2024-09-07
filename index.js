const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose")
require("dotenv").config()
const app = express();
const ProductModel = require("./models/product.model")
app.set("view engine","ejs")
let PORT = 5001;
app.use(express.urlencoded({extended:true}))
let URI = process.env.MONGO_DB_URI
// Setup Mongodb connection
const ProductRouter =require("./routes/product.route")
app.use("/product",ProductRouter)
mongoose.connect(URI)
.then(()=>{
    console.log("mongodb iyaf connnect oooo")
})
.catch((err)=>{
    console.log(err,"mongodb no connect")
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("error wa o")
    }else{
        console.log("Server ti start")
    }
})

// dotenv .env - environment variables