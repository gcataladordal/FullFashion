const Stripe = require("stripe")
const Pedido = require('../models/compraModel')
const mongoose = require("mongoose")
const stripe = new Stripe("sk_test_51KWzYqAT2Dvvoq4FP3inAGTdnEcI6cQ0lepOWuW8ExJUbOGkvCVqzNx2Cc82Q4xOTw0hUaGeb0algovVt3gI6fSB00NfBV2hGR")
async function pago(req, res) {

    const { id, amount, id_usuario, productos, estado, fecha_creacion, modo_entrega, direccion, cp, poblacion, devolucion } = req.body

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Pack full fashion",
        payment_method: id,
        confirm: true

    })
    const compraToSave = new Pedido({
        id_usuario,
        productos,
        estado,
        fecha_creacion,
        modo_entrega,
        direccion,
        cp,
        poblacion,
        devolucion,
        metodo_pago: id
    })
    compraToSave.save()
    console.log(req.body);
    console.log("Esta es la compra para la bd" + compraToSave)
    res.send({ message: "Compra realizada correctamente" })
}




module.exports = pago