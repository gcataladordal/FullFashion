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
        let filtro = { id_pedido: req.body.id_usuario };
        let cambio = { direccion2: req.body.direccion2, poblacion2: req.body.poblacion2, cp2: req.body.cp2 }
        var actualizarPedido = await Pedido.findOneAndUpdate({})
        res.json(actualizarPedido)

    },
    enviarMail: async (req, res) => {
        // let email = req.body.email
        // let pass = req.body.password
        console.log("hola");
        const transporter = nodemailer.createTransport({

            // host: 'smtp-relay.sendinblue.com',
            // port: 587,
            // auth: {
            //     user: 'fullfashion211@gmail.com',
            //     pass: 'gcsrl1234'
            // }

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
            from: '<fullfashion211@gmail.com>',
            to: "foogy12@gmail.com",
            subject: "Factura de Full Fashion",
            // text: "¡Hola! Gracias por comprar en Full Fashion. Aquí tienes la factura que nos has pedido de tu compra. Gracias por confiar en nosotros.",
            html: '<h1>¡Hola!<h2><br/><h2>Gracias por comprar en Full Fashion. Aquí tienes la factura que nos has pedido de tu compra. Gracias por confiar en nosotros.</h2>',
            // attachments:[{
            //     filename:"factura_Full Fashion.pdf",
            //     path:"./public/factura_Full Fashion.pdf",
            //     contentType: 'application/pdf'
            // }]
        };
        let info = await transporter.sendMail({
            from: '"FullFashion" <fullfashion211@gmail.com>', // sender address
            to: "foogy12@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    },





}




module.exports = actionCompras