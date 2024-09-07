const { displayDaniel,displayEJS,displayCreateProductPage, displayProducts, submitProduct } = require("../controllers/product.controller");
const express =require("express");
const router = express.Router()
router.get("/",displayDaniel)
router.get("/fish",displayEJS)
router.get("/createproduct",displayCreateProductPage)
router.get("/displayproducts",displayProducts)
router.post("/submitproduct",submitProduct)
module.exports = router