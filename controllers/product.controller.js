const ProductModel = require("../models/product.model");
var nodemailer = require("nodemailer");

let message = "";
const displayDaniel = (req, res) => {
  res.send("Hello Daniel");
};
const displayEJS = (req, res) => {
  // res.send(allStudents)
  // res.sendFile(__dirname+"/index.html")
  res.render("engine", { username: "Akinlolu", gender: "female" });
};
const displayCreateProductPage = (req,res) => {
  res.render("createproductpage", { message });
  message = "";
};
const displayProducts = (req, res) => {
  ProductModel.find().then((allProducts) => {
    console.log(allProducts);
    // res.send({allProducts})
    res.render("displayproducts", { allProducts });
  });
};
const submitProduct = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  var mailOptions = {
    from: "seyidami13@gmail.com",
    to: ["onifadjosh@gmail.com","akinlolutenten@gmail.com","muhammedabiodun42@gmail.com","seyiodekomaya@gmail.com"],
    subject: `You have created a new product called ${req.body.productName}`,
    html:"<h1 style='background-color: purple;'>Congratulations!</h1>"
  };

  console.log(req.body);
  // allProducts.push(req.body)
  let form = new ProductModel(req.body);
  form
    .save()
    .then(() => {
      console.log("it has saved ooo");
      message = "product added successfully!";
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.redirect("/product/createproduct");
    })
    .catch((err) => {
      console.log(err, "it did not save ooo");
      message = "product could not be added, please try again";
      res.redirect("/product/createproduct");
    });
};
module.exports = {
  displayDaniel,
  displayEJS,
  displayCreateProductPage,
  displayProducts,
  submitProduct,
};
