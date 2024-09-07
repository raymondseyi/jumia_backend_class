const mongoose = require("mongoose")
// Product Schema
const ProductSchema = mongoose.Schema({
    productName : {type:String,required:true},
    productPrice : {type:Number, required:true},
    productQuantity : {type:Number, required:true},
    productImage : {type:String,required:true},
    productDate : {type : String, default:Date.now()}
})
const ProductModel = mongoose.model("product_collection",ProductSchema);
// Product Model
module.exports = ProductModel
