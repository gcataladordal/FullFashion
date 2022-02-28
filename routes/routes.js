const router = require("express").Router()
const products = require("../controllers/product.controllers")
const user = require("../controllers/users.controllers")
const Stripe = require("stripe")
const admin = require("../controllers/admin.controllers")
const actionCompras = require("../controllers/compras.controllers")


const stripe = new Stripe("sk_test_51KWzYqAT2Dvvoq4FP3inAGTdnEcI6cQ0lepOWuW8ExJUbOGkvCVqzNx2Cc82Q4xOTw0hUaGeb0algovVt3gI6fSB00NfBV2hGR")

router.post("/register", user.registro)
router.post("/login", user.loguear)

router.post("/checkout", actionCompras.pago) 

router.post("/addproduct", admin.addProduct)
router.post("/deleteproduct", admin.eraseProduct)
router.post("/modifyproduct", admin.modifyProduct)

router.post("/historial", actionCompras.buscarCompras);

router.post("/allproductofiltro", products.buscarProductos);

router.post("/buscararticulo", products.buscarProducto);
router.post("/actualizarpedido", actionCompras.actualizarPedido);

router.post("/busquedalook", products.buscarProductos);
// router.get("/resultadolook/:altura/:color/:estilo/:peso/:talla/:target", function (req,res) {

router.post("/estilosfavoritos", user.addEstilosFav);

router.post("/direcciondos", user.addSegundaDireccion)

router.get("/resultadolook/", (req,res) => {
    res.json(req.params)

})


module.exports = router