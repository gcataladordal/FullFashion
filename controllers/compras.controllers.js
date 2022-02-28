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
        var busquedaPedidos = await Pedido.find({id_usuario:req.body.idUsuario})
        res.json(busquedaPedidos)

    },

    actualizarPedido: async (req, res) => {
        //? Falta actualizar los campos de los articulos
        //Si pedido devolucion es false, hace una actualizacion
        if(!req.body.devolucion){
            var actualizarPedido = await Pedido.findOneAndUpdate({id_pedido: req.body.id_pedido}, {devolucion:true})
            res.json(actualizarPedido)

            //Si pedido devolucion es true, cambia el estado a devuelto: los pedidos en histroail devueltos no se veran.
        }else{
            var devueltaPedido = await Pedido.findOneAndUpdate({id_pedido: req.body.id_pedido}, {estado:"devuelto"})
            res.json(devueltaPedido)

        }
        

    }

}




module.exports = actionCompras