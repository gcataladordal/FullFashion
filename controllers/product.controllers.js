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
        console.log("*****************************************************************************")
        // console.log(resultado)
        res.json(resultado)
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
    // variable vacía para meter solo 3 resultados con el for que lo hace además de random
    // const resultadoArriba3 = []
    // for (let i = 0; i <= 2; i++) {
    //     resultadoArriba3.push(resultadoArriba[(random(0, resultadoArriba.length))])
    // }

    // console.log(resultadoArriba);
    return resultadoArriba;
}

// busca las partes de arriba según recoge del body
async function busquedaAbajo(req) {
    var resultadoAbajo = await Producto.find({
        "target": req.body.target,
        "estilo": req.body.estilo,
        "color": req.body.color,
        "tipo_prenda": "abajo"
    })

    // variable vacía para meter solo 3 resultados con el for que lo hace además de random
    // const resultadoAbajo2 = []
    // for (let i = 0; i <= 1; i++) {
    //     resultadoAbajo2.push(resultadoAbajo[(random(0, resultadoAbajo.length))])
    // }

    // console.log(resultadoAbajo);
    return resultadoAbajo;
}

// busca los zapatos según recoge del body
async function busquedaZapatos(req) {
    var resultadoZapato = await Producto.find({
        "target": req.body.target,
        "estilo": req.body.estilo,
        "color": req.body.color,
        "tipo_prenda": "zapatos"
    })
    // variable vacía para meter solo 1 resultado
    // const resultadoZapato1 = []
    // para pusear el resultado solo 1, con el random
    // resultadoZapato1.push(resultadoZapato[(random(0, resultadoZapato.length))])

    // console.log(resultadoZapato);
    return resultadoZapato;
}

// generar números aleatorios con mínimo y máximo
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = products