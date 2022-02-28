const mongoose = require("mongoose")
const Producto = require("../models/productModel")

// función que busca todos los productos
const products = {
    buscarProductos: async (req, res) => {
        let resulBusqArriba = await busquedaArriba(req)
        let resulBusqAbajo = await busquedaAbajo(req)
        let resulBusqZapatos = await busquedaZapatos(req)
        let resultado = {
            todasPartesDeArriba: resulBusqArriba,
            todasPartesDeAbajo: resulBusqAbajo,
            todosZapatos: resulBusqZapatos
        }
        res.json(resultado)
    },

    buscarProducto: async (req, res) => {
        //Me mira de que tipo es ese producto y me busca todos
        if (req.body.tipo_prenda === "zapatos") {

            let numPren = req.body.numero_prenda;
            let zapatoOne;
            //Busca un zapato que no sea el mismo y lo devuelve
            do {
                let resulBusqZapatos = await busquedaZapatos(req);
                zapatoOne = resulBusqZapatos[0];
               
            } while (req.body.id_producto === zapatoOne.id_producto);

            let zapatoEntero = {
                _id: zapatoOne._id,
                nombre: zapatoOne.nombre,
                target: zapatoOne.target,
                tipo_prenda: zapatoOne.tipo_prenda,
                estilo: zapatoOne.estilo,
                color: zapatoOne.color,
                imgUrl: zapatoOne.imgUrl,
                id_producto: zapatoOne.id_producto,
                numero_prenda: numPren,
            }
            
            res.json(zapatoEntero);

        } else if (req.body.tipo_prenda === "arriba") {
            let numPren = req.body.numero_prenda;
            let arribaOne;
            do {
                let resulBusqArriba = await busquedaArriba(req)
                arribaOne = resulBusqArriba[0];
            } while (req.body.id_producto === arribaOne.id_producto);

            let topEntero = {
                _id: arribaOne._id,
                nombre: arribaOne.nombre,
                target: arribaOne.target,
                tipo_prenda: arribaOne.tipo_prenda,
                estilo: arribaOne.estilo,
                color: arribaOne.color,
                imgUrl: arribaOne.imgUrl,
                id_producto: arribaOne.id_producto,
                numero_prenda: numPren,
            }
            res.json(topEntero);


        } else if (req.body.tipo_prenda === "abajo") {
            let numPren = req.body.numero_prenda;
            let abajoOne;
            do {
                let resulBusqAbajo = await busquedaAbajo(req)
                abajoOne = resulBusqAbajo[0];
            } while (req.body.id_producto === abajoOne.id_producto);

            let botEntero = {
                _id: abajoOne._id,
                nombre: abajoOne.nombre,
                target: abajoOne.target,
                tipo_prenda: abajoOne.tipo_prenda,
                estilo: abajoOne.estilo,
                color: abajoOne.color,
                imgUrl: abajoOne.imgUrl,
                id_producto: abajoOne.id_producto,
                numero_prenda: numPren,
            }
            res.json(botEntero);

        }
       
    }
}



// busca las partes de arriba según recoge del body
async function busquedaArriba(req) {
    var resultadoArriba = await Producto.find({
        "target": req.body.target,
        "estilo": req.body.estilo,
        "color": req.body.color,
        "tipo_prenda": "arriba"
    })
    // variable vacía que lo puseha directamente random
    const resultadoArribaRandom = []
    for (let i = 0; i < resultadoArriba.length; i++) {
        let randomNumber = (random(0, resultadoArriba.length - 1))
        resultadoArribaRandom.push(resultadoArriba[randomNumber])
        resultadoArriba.splice(randomNumber, 1)
    }

    return resultadoArribaRandom;
}

// busca las partes de arriba según recoge del body
async function busquedaAbajo(req) {
    var resultadoAbajo = await Producto.find({
        "target": req.body.target,
        "estilo": req.body.estilo,
        "color": req.body.color,
        "tipo_prenda": "abajo"
    })

    // variable vacía que lo puseha directamente random
    const resultadoAbajoRandom = []
    for (let i = 0; i < resultadoAbajo.length; i++) {
        let randomNumber = (random(0, resultadoAbajo.length - 1))
        resultadoAbajoRandom.push(resultadoAbajo[randomNumber])
        resultadoAbajo.splice(randomNumber, 1)
    }

    return resultadoAbajoRandom;
}

// busca los zapatos según recoge del body
async function busquedaZapatos(req) {
    var resultadoZapato = await Producto.find({
        "target": req.body.target,
        "estilo": req.body.estilo,
        "color": req.body.color,
        "tipo_prenda": "zapatos"
    })
    // variable vacía que lo puseha directamente random
    const resultadoZapatoRandom = []
    for (let i = 0; i < resultadoZapato.length; i++) {
        let randomNumber = (random(0, resultadoZapato.length - 1))
        resultadoZapatoRandom.push(resultadoZapato[randomNumber])
        resultadoZapato.splice(randomNumber, 1)
    }

    return resultadoZapatoRandom;
}

// generar números aleatorios con mínimo y máximo
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = products