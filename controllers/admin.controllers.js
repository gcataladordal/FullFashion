const mongoose = require("mongoose")
const Producto = require("../models/productModel")


const admin = {

    addProduct: (req, res) => { addProduct(req, res) },

    eraseProduct: (req, res) => { eraseProduct(req, res) },

    modifyProduct: (req, res) => { modifyProduct(req, res) },

}

async function addProduct(req, res) {
    const { nombre, target, tipo, estilo, color, imagen } = req.body;
    console.log(req.body)
    const productToSave = new Producto({
        nombre,
        target,
        tipo_prenda: tipo,
        estilo,
        color,
        imgUrl: imagen
    })
    await productToSave.save();
    console.log(req.body);
    console.log("Esta es el producto" + productToSave)
    res.send({ message: "Procuto insertado correctamente" })

}

function modifyProduct(req, res) {
    
    const {nombre, target, tipo, estilo, color, imagen, id} = req.body
    
    Producto.find({ id_producto: id }, function (err, prenda) {
        if (err) throw err;
        if (nombre != "") { prenda[0].nombre = nombre; }
        if (target != "") { prenda[0].target = target; }
        if (tipo != "") { prenda[0].tipo_prenda = tipo; }
        if (estilo != "") { prenda[0].estilo = estilo; }
        if (color != "") { prenda[0].color = color; }
        if (imagen != "") { prenda[0].imgUrl = imagen; }
        prenda[0].save(function (err) {
            if (err) throw err;
            console.log("Actualización correcta");
        });
    });}

function eraseProduct(req, res) {

const {id} = req.body
Producto.deleteOne({ id_producto: id }).then(function(){
    console.log("Data deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});
     
    // Producto.findById('621b847730c9f49187b264db', function(err, user){
    //     if (err) throw err;
    //     user.remove(function(err){
    //         if (err) throw err;
    //         console.log("Borrado correcto");
    //     }); 
    // });
}


module.exports = admin

