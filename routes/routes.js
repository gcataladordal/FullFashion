const router = require("express").Router()
const req = require("express/lib/request")
const res = require("express/lib/response")
const { required } = require("nodemon/lib/config")
const products = require("../controllers/product.controllers")
const user = require("../controllers/users.controllers")
const Stripe = require("stripe")

const stripe = new Stripe("sk_test_51KWzYqAT2Dvvoq4FP3inAGTdnEcI6cQ0lepOWuW8ExJUbOGkvCVqzNx2Cc82Q4xOTw0hUaGeb0algovVt3gI6fSB00NfBV2hGR")

router.post("/register", user.addUser)
// router.post("/register", (req,res)=>{
//     console.log(req.body)
//     res.json(req.body)
//     // console.log("entra en el endpoint");

// });

router.post("/checkout", async (req, res)  => {
    
    const { id, amount } = req.body

   const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Pack full fashion",
        payment_method: id,
        confirm: true

    })
    console.log(payment);
    res.send({message: "Compra realizada correctamente"})
})


router.post("/busquedalook", products.buscarProductos);
// router.get("/resultadolook/:altura/:color/:estilo/:peso/:talla/:target", function (req,res) {


router.get("/resultadolook/", (req,res) => {
    res.json(req.params)

})


module.exports = router