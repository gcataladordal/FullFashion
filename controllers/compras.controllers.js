const Stripe = require("stripe")
const Pedido = require('../models/compraModel')
const mongoose = require("mongoose")
const stripe = new Stripe("sk_test_51KWzYqAT2Dvvoq4FP3inAGTdnEcI6cQ0lepOWuW8ExJUbOGkvCVqzNx2Cc82Q4xOTw0hUaGeb0algovVt3gI6fSB00NfBV2hGR")
const nodemailer = require("nodemailer")


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


    },
    enviarMail: async (req, res) => {
     
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, //true para el puerto 465, false para otros puertos
            auth: {
                user: 'fullfashion211@gmail.com',
                pass: 'aoenowzavvtthpzf' //password generado con password application de Google
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        var mailOptions = {
            from: 'Full Fashion <fullfashion211@gmail.com>',
            to: `${req.body.email}`,
            subject: "Factura de Full Fashion",
            text: "¡Hola! Gracias por comprar en Full Fashion. Aquí tienes la factura que nos has pedido de tu compra. Gracias por confiar en nosotros.",

            html: `<div><img src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesHome/Logo2.png" width=100px height=100px /><br /><p>Full Fashion S.A</p><p>Calle Mongo, Madrid, 95959</p><p>fullfashion211@gmail.com</p><hr size="10" width="300%" align="left" color="grey"></hr>    <p><b>Nombre del cliente:</b> ${req.body.nombre}</p><p><b>Direccion de envío:</b> ${req.body.direccion}</p><p><b>Población de envío:</b> ${req.body.poblacion}</p><p>${req.body.cp}</p><div className="container"><p align="justify"><b>Fecha y hora de la compra: </b>${req.body.fechaCompra}</p><p align="justify"><b>Modo de envío:</b> ${req.body.modoEnvio}</p></div><table className="table"><thead><tr><th>Productos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Cantidad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Precio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th></tr></thead><tbody><tr><td>${req.body.producto}</td><td>1</td><td>${req.body.precio}</td></tr></tbody></table><div><div><p align="justify">Gracias por tu compra, estamos felices de ser partícipes de tu nuevo look. El envío puede demorarse entre 3 y 5 días laborables si has elegido correo ordinario y punto de recogida; y 24h si has elegido correo certificado. Según nuestras políticas de devoluciones* dispones de 2 cambios después de realizar la compra, el primero puedes elegir hasta un máximo de 3 prendas y si todavía no te convence no te preocupes, puedes devolvernos todo el pack completo, los gastos de envío y devoluciones va incluido en el precio final de compra. Dispones de 30 días para realizar dicho cambio.</p><br /><p align="justify">*Políticas de devoluciones de Full Fashion: Si deseas realizar la devolución de un artículo comprado en FullFashion.com, dispones de 30 días desde la fecha de envío de tu pedido.Los artículos deben conservar todas las etiquetas y estar en perfecto estado. Puedes encontrar más información acerca de la Política de Cambios y Devoluciones o del derecho de desistimiento en la Ley 7/1996, de 15 de enero de 1996, de Ordenación del Comercio Minorista (Boletín Oficial del Estado nº 15, de 17 de enero de 1996).</p></div></div></div >`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email enviado.")
            }
        })
        

    },





}




module.exports = actionCompras