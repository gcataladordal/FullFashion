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
            // console.log("******")
            // console.log(req.body.id_producto)
            let zapatoOne;
            do {
                let resulBusqZapatos = await busquedaZapatos(req);
                zapatoOne = resulBusqZapatos[0];
                console.log("Tenemos" + req.body.id_producto)
                console.log("Buscado" +zapatoOne.id_producto);
            } while (req.body.id_producto === zapatoOne.id_producto);

            res.json(zapatoOne);

        } else if (req.body.tipo_prenda === "arriba") {
            let resulBusqArriba = await busquedaArriba(req)
        } else {
            let resulBusqAbajo = await busquedaAbajo(req)
        }
        // let resultado = {
        //     todasPartesDeArriba: resulBusqArriba,
        //     todasPartesDeAbajo: resulBusqAbajo,
        //     todosZapatos: resulBusqZapatos
        // }
        res.json(req.body);
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