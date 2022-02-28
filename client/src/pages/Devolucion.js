import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox } from "antd";
import { Row, Col } from 'react-bootstrap';
import axios from "axios";

function Devolucion() {

    const [cambios, setCambios] = useState("");

    // el check 
    const onChangeCheck = (checkedValues) => {
        setCambios(checkedValues);
    };

    const isDisabled = (id) => {
        return cambios.length > 2 && cambios.indexOf(id) === -1;
    };


    const recogerCambiosDevolucion = () => {
        var datos = JSON.parse(localStorage.getItem("resultDevo"));

        //Si ha seleccinado algun producto
        if (cambios.length > 0) {

            let datos = [];
            if (cambios.length == 1) {
                datos.push(JSON.parse(cambios));
            } else if (cambios.length == 2) {
                for (let i = 0; i < cambios.length; i++) {
                    datos.push(JSON.parse(cambios[i]));
                }
            } else {
                for (let i = 0; i < cambios.length; i++) {
                    datos.push(JSON.parse(cambios[i]));
                }
            }
            console.log(datos)
            //Va buscando por cantidad de articulos selecionados [1,2,3]
            for (let i = 0; i < datos.length; i++) {
                console.log(datos[i])
                //Se recoge la info par la busqueda del articulo
                let info = {
                    id_producto: datos[i].id_producto,
                    id_pedido: datos[i].id_pedido,
                    target: datos[i].target,
                    estilo: datos[i].estilo,
                    color: datos[i].color,
                    tipo_prenda: datos[i].tipo_prenda,
                    numero_prenda: datos[i].numero_prenda
                }
                //Se manda para que busque uno distinto al que se tiene
                axios.post("/buscararticulo", info).then((res) => {
                    //Cambiar el  true el pedido
                    console.log(resultado[0].id_pedido);
                   
                    //Se necesita el valor de devolucion del pedido para hacer un condicional en la actualizacion
                    let infoPedidos = JSON.parse(localStorage.getItem("pedidos"));
                    //Se busca en todas las compras su estado devolucion por su id_pedido
                    for (let i = 0; i < infoPedidos.length; i++) {
                        // console.log(infoPedidos[i].devolucion);
                        //id.pedido = resultado[0].id_pedido
                        if (infoPedidos[i].id_pedido === resultado[0].id_pedido) {
                            var infoDevolucion = infoPedidos[i].devolucion;
                        }

                    }
                    //Se prepara la info para la busqueda en mongoose
                    let info = {
                        id_pedido: resultado[0].id_pedido,
                        devolucion: infoDevolucion
                    }
                    //Se redirige al checkpoint
                    axios.post("/actualizarpedido", info).then((res) => {
                        console.log(res.data)
                    })

                    window.location.href = "http://localhost:3000/perfil";

                })

            }

        } else {
            alert("Seleciona Alguna")
        }
    }

    var resultado = JSON.parse(localStorage.getItem("devolucion"));
    // console.log(resultado);

    let valorTop1 = {
        id_producto: resultado[0].id_producto,
        id_pedido: resultado[0].id_pedido,
        color: resultado[0].color,
        estilo: resultado[0].estilo,
        target: resultado[0].target,
        tipo_prenda: resultado[0].tipo_prenda,
        numero_prenda: 0
    }

    let valorTop2 = {
        id_producto: resultado[1].id_producto,
        id_pedido: resultado[1].id_pedido,
        color: resultado[1].color,
        estilo: resultado[1].estilo,
        target: resultado[1].target,
        tipo_prenda: resultado[1].tipo_prenda,
        numero_prenda: 1
    }

    let valorTop3 = {
        id_producto: resultado[2].id_producto,
        id_pedido: resultado[2].id_pedido,
        color: resultado[2].color,
        estilo: resultado[2].estilo,
        target: resultado[2].target,
        tipo_prenda: resultado[2].tipo_prenda,
        numero_prenda: 2
    }

    let valorBot1 = {
        id_producto: resultado[3].id_producto,
        id_pedido: resultado[3].id_pedido,
        color: resultado[3].color,
        estilo: resultado[3].estilo,
        target: resultado[3].target,
        tipo_prenda: resultado[3].tipo_prenda,
        numero_prenda: 3
    }

    let valorBot2 = {
        id_producto: resultado[4].id_producto,
        id_pedido: resultado[4].id_pedido,
        color: resultado[4].color,
        estilo: resultado[4].estilo,
        target: resultado[4].target,
        tipo_prenda: resultado[4].tipo_prenda,
        numero_prenda: 4
    }

    let valorZapatos = {
        id_producto: resultado[5].id_producto,
        id_pedido: resultado[5].id_pedido,
        color: resultado[5].color,
        estilo: resultado[5].estilo,
        target: resultado[5].target,
        tipo_prenda: resultado[5].tipo_prenda,
        numero_prenda: 5
    }
    const top0 = JSON.stringify(valorTop1);
    const top1 = JSON.stringify(valorTop2);
    const top2 = JSON.stringify(valorTop3);
    const bot0 = JSON.stringify(valorBot1);
    const bot1 = JSON.stringify(valorBot2);
    const zapatos = JSON.stringify(valorZapatos);

    return (
        <div>
            <Checkbox.Group className="resultadolook" onChange={(e) => onChangeCheck(e)}  >
                <Row>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={top0} disabled={isDisabled(top0)}>
                            <img alt={resultado[0].nombre} src={resultado[0].imgUrl} width={350} />
                            <label>{resultado[0].nombre}</label>
                        </Checkbox>
                        <br></br>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={top1} disabled={isDisabled(top1)}>
                            <img alt={resultado[1].nombre} src={resultado[1].imgUrl} width={350} />
                            <label>{resultado[1].nombre}</label>
                        </Checkbox>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={top2} disabled={isDisabled(top2)}>
                            <img alt={resultado[2].nombre} src={resultado[2].imgUrl} width={350} />
                            <label>{resultado[2].nombre}</label>
                        </Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={bot0} disabled={isDisabled(bot0)}>
                            <img alt={resultado[3].nombre} src={resultado[3].imgUrl} width={350} />
                            <label>{resultado[3].nombre}</label>
                        </Checkbox>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={bot1} disabled={isDisabled(bot1)}>
                            <img alt={resultado[4].nombre} src={resultado[4].imgUrl} width={350} />
                            <label>{resultado[4].nombre}</label>
                        </Checkbox>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={zapatos} disabled={isDisabled(zapatos)}>
                            <img alt={resultado[5].nombre} src={resultado[5].imgUrl} width={350} />
                            <label>{resultado[5].nombre}</label>
                        </Checkbox>
                    </Col>
                </Row>
                <br></br>
            </Checkbox.Group>
            <div>
                <button className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={recogerCambiosDevolucion}>Devolución</button>

                <p>*Se permite devolver una vez hasta 3 artículos</p>
                <p>*SE DEVOLVERÁ TODA LA COLECCIÓN Y HABRÁ REEMBOLSO</p>

            </div>


        </div>
    );
}


export default Devolucion;