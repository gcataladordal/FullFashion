const mongoose = require("mongoose")
const Producto = require("../models/productModel")

// función que busca todos los productos
const products = {
    buscarProductos: async (req, res) => {
        console.log("pasa por funcion buscar productos")
        let resulBusqArriba = await busquedaArriba(req)
        let resulBusqAbajo = await busquedaAbajo(req)
        let resulBusqZapatos = await busquedaZapatos(req)
        let resultado = {
            partesDeArriba : resulBusqArriba,
            partesDeAbajo : resulBusqAbajo,
            zapatos : resulBusqZapatos
        }
        console.log("*****************************************************************************")
        console.log(resultado)
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
    // variable vacía para meter solo 3 resultados con el for que lo hace
    const resultadoArriba3 = []
    for (let i = 0; i <= 2; i++) {
        resultadoArriba3.push(resultadoArriba[(random(0, resultadoArriba.length))])
    }
    console.log(resultadoArriba3);
    return resultadoArriba3;
    
}

// busca las partes de arriba según recoge del body
async function busquedaAbajo(req) {
    var resultadoAbajo = await Producto.find({
        "target": req.body.target,
        "estilo": req.body.estilo,
        "color": req.body.color,
        "tipo_prenda": "abajo"
    })
    console.log(resultadoAbajo);
    // variable vacía para meter solo 3 resultados con el for que lo hace
    const resultadoAbajo2 = []
    for (let i = 0; i <= 1; i++) {
        resultadoAbajo2.push(resultadoAbajo[(random(0, resultadoAbajo.length))])
    }
    console.log(resultadoAbajo2);
    return resultadoAbajo2;
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
    const resultadoZapato1 = []
    // para pusear el resultado solo 1, con el random
    resultadoZapato1.push(resultadoZapato[(random(0, resultadoZapato.length))])
    console.log(resultadoZapato1);
    return resultadoZapato1;
}

// generar números aleatorios con mínimo y máximo
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = products