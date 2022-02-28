const Stripe = require("stripe")
const Pedido = require('../models/compraModel')
const mongoose = require("mongoose")
const stripe = new Stripe("sk_test_51KWzYqAT2Dvvoq4FP3inAGTdnEcI6cQ0lepOWuW8ExJUbOGkvCVqzNx2Cc82Q4xOTw0hUaGeb0algovVt3gI6fSB00NfBV2hGR")


const actionCompras = {
    pago: async (req, res) => {

        const { id, amount, id_usuario, productos, estado, fecha_creacion, modo_entrega, direccion, cp, poblacion, devolucion, filtros } = req.body
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
            filtros
        })
        compraToSave.save()
        res.send({ message: "Compra realizada correctamente" })
    },
    buscarCompras: async (req, res) => {
        var busquedaPedidos = await Pedido.find({ id_usuario: req.body.idUsuario })
        res.json(busquedaPedidos)

    },

    actualizarPedido: async (req, res) => {
        console.log(req.body);
        const datosCambio = { productos: req.body.productos };
        var actualizarPedido = await Pedido.findOneAndUpdate({ id_pedido: req.body.id_pedido }, datosCambio)
        // var actualizarPedido = await Pedido.findOneAndUpdate({id_pedido: req.body.id_pedido}, {devolucion:true})
        res.json("actualizadoPedido");

    },
    quitarPedido: async (req, res) => {
        console.log(req.body);
        //Si pedido devolucion es true, cambia el estado a devuelto: los pedidos en histroail devueltos no se veran.
        var devueltaPedido = await Pedido.findOneAndUpdate({ id_pedido: req.body.id_pedido }, { estado: "devuelto" })
        res.json("quitarPedido")

    },
    devolucionPrimera:async (req, res) => {
        console.log(req.body);
        var actualizarPedido = await Pedido.findOneAndUpdate({id_pedido: req.body.id_pedido}, {devolucion:true})
        res.json("devolucionPrimera");

    }

}




module.exports = actionCompras