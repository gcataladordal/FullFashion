const router = require("express").Router()
const products = require("../controllers/product.controllers")

router.post("/register", (req,res)=>{
    console.log(req.body)
    res.json(req.body)
    // console.log("entra en el endpoint");
});

router.post("/busquedalook", products.buscarProductos);

module.exports = router