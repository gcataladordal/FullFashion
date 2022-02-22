const router = require("express").Router()
const products = require("../controllers/product.controllers")

router.post("/register", (req,res)=>{
    console.log(req.body)
    res.json(req.body)
    // console.log("entra en el endpoint");
});


module.exports = router