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
            console.log("******")
            console.log(req.body.id_producto)
            console.log(req.body)

            let numPren = req.body.numero_prenda;
            console.log(numPren)
            let zapatoOne;
            //Busca un zapato que no sea el mismo y lo devuelve
            do {
                let resulBusqZapatos = await busquedaZapatos(req);
                resulBusqZapatos["new"]="nuevo";
                zapatoOne = resulBusqZapatos[0];
                console.log("Tenemos" + req.body.id_producto)
                console.log("Buscado" + zapatoOne.id_producto);
                console.log(zapatoOne)
            } while (req.body.id_producto === zapatoOne.id_producto);
            console.log(zapatoOne);

            res.json(zapatoOne);

        } else if (req.body.tipo_prenda === "arriba") {
            console.log("******")
            console.log(req.body.id_producto)
            let arribaOne;
            do {
                let resulBusqArriba = await busquedaArriba(req)
                arribaOne = resulBusqArriba[0];
                console.log("Tenemos" + req.body.id_producto)
                console.log("Buscado" + arribaOne.id_producto);
            } while (req.body.id_producto === arribaOne.id_producto);

            res.json(arribaOne);


        } else if (req.body.tipo_prenda === "abajo") {
            console.log("******")
            console.log(req.body.id_producto)

            let abajoOne;
            do {
                let resulBusqAbajo = await busquedaAbajo(req)
                abajoOne = resulBusqAbajo[0];
                console.log("Tenemos" + req.body.id_producto)
                console.log("Buscado" + abajoOne.id_producto);
            } while (req.body.id_producto === abajoOne.id_producto);

            res.json(abajoOne);

        }
        // let resultado = {
        //     todasPartesDeArriba: resulBusqArriba,
        //     todasPartesDeAbajo: resulBusqAbajo,
        //     todosZapatos: resulBusqZapatos
        // }
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