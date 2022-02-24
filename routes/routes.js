const router = require("express").Router()
const products = require("../controllers/product.controllers")

router.post("/register", (req,res)=>{
    console.log(req.body)
    res.json(req.body)
    // console.log("entra en el endpoint");
});

router.post("/busquedalook", products.buscarProductos);
// router.get("/resultadolook/:altura/:color/:estilo/:peso/:talla/:target", function (req,res) {


router.get("/resultadolook/", (req,res) => {
    res.json(req.params)

})


module.exports = router