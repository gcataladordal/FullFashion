const mongoose = require("mongoose")
const Producto = require("../models/productModel")


const admin = {

    addProduct: (req, res) => { addProduct (req, res )}
}

    async function addProduct (req, res) {
        const { nombre, target, tipo, estilo, color, imagen } = req.body;

        const productToSave = new Producto({
           nombre,
           target,
           tipo,
           estilo,
           color,
           imagen
        })
        await productToSave.save();
        console.log(req.body);
        console.log("Esta es el producto" + productToSave)
        res.send({ message: "Procuto insertado correctamente" })

    }


module.exports = admin

