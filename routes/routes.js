const router = require("express").Router()
const products = require("../controllers/product.controllers")
const user = require("../controllers/users.controllers")

router.post("/register", user.registro)
router.post("/login", user.loguear)


router.post("/busquedalook", products.buscarProductos);
// router.get("/resultadolook/:altura/:color/:estilo/:peso/:talla/:target", function (req,res) {


router.get("/resultadolook/", (req,res) => {
    res.json(req.params)

})


module.exports = router