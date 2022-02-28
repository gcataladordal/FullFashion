import React, { useState } from "react";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";

function Perfil() {

    const [viewHistorial, setViewHistorial] = useState(false);
    const [viewModificarPerfil, setViewModificarPerfil] = useState(false);

    //!Proceso para pintar los pedidos
    let idUserLogueado = JSON.parse(sessionStorage.getItem("infoUser"));
    let idUser = {
        idUsuario: idUserLogueado.id_usuario
    }
    //! Cuando carga Perfil
    // Recoge todos los pedidos del usuario y lo mete en Storage para pintarlos mas abajo

    axios.post("/historial", idUser).then((res) => {
        localStorage.setItem("pedidos", JSON.stringify(res.data));
    })

    //! BOTON Seleciona el pedido que se va hace la devolucion (El boton tiene la info en JSON de todo el pedido)
    const selectCompra = (datos) => {
        console.log(datos)
        //Se mete TODA la info del pedido a devolver Storage
        localStorage.setItem('devolucion', datos);
        window.location.href = "http://localhost:3000/devolucion";
        //         // Se va a recoger info con los datos del pedido con su filtro
        //         // let infoFiltro = JSON.parse(localStorage.getItem("pedidos"));
        //         //  Se pondra en storage una collecion con filtro para la devolucion como en look
        //         // let filtro = {
        //         //     target: infoFiltro[0].filtros.target,
        //         //     estilo: infoFiltro[0].filtros.estilo,
        //         //     color: infoFiltro[0].filtros.color,
        //         // }
        //         // console.log(filtro)

        //         // axios.post("/allproductofiltro", filtro).then((res) => {
        //         //     console.log(res.data)
        //         //     let colleccionPedidos = res.data;
        //         //     localStorage.setItem("resultDevo", JSON.stringify(colleccionPedidos));
        //         // }).then(() => { window.location.href = "http://localhost:3000/devolucion" })


    }

    var allCompras = JSON.parse(localStorage.getItem("pedidos"));

    // allCompras[i]                 --> Array de Productos de cada pedido 
    // allCompras[i].productos       --> Todos los articulos 
    // allCompras[i].productos[i]    --> Articulo i de 6 (0 al 2 son arriba // 3 al 4 es abajo // 5 es zapatillas )
    // allCompras[i].productos[i].nombre --> nombre del articulo   
    // allCompras[i].productos[i].imgUrl --> imgUrl del articulo
    return (
        <div>
            <div>
                <Row>
                    <button onClick={() => { if (!viewHistorial) { setViewHistorial(true); setViewModificarPerfil(false) } }}>HISTORIAL</button>
                    <button onClick={() => { if (!viewModificarPerfil) { setViewModificarPerfil(true); setViewHistorial(false) } }}>MODIFICAR PERFIL</button>
                </Row>
            </div>
            {viewHistorial ? (<div>

                {allCompras.map(compra => {
                    let fecha = compra.fecha_creacion.split("T");
                    let hora = fecha[1].split(".");

                    //!    Meto el id_producto en cada producto (Importante)
                    for (let i = 0; i < compra.productos.length; i++) {
                        compra.productos[i].id_pedido = compra.id_pedido;
                    }

                    return (<div>

                        <h5><p>Compra fecha: {fecha[0]} {hora[0]}</p></h5>
                        <Row md={2}>
                            <Col>
                                <Row md={2} >
                                    <Col md={2} xs={6}>
                                        <img src={compra.productos[0].imgUrl} width="100px"></img>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <img src={compra.productos[1].imgUrl} width="100px"></img>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <img src={compra.productos[2].imgUrl} width="100px"></img>
                                    </Col>
                                </Row >
                                <Row>
                                    <Col md={2} xs={6}>
                                        <img src={compra.productos[3].imgUrl} width="100px"></img>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <img src={compra.productos[4].imgUrl} width="100px"></img>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <img src={compra.productos[5].imgUrl} width="100px"></img>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <ol>
                                    <li><p>{compra.productos[0].nombre}</p></li>
                                    <li> <p>{compra.productos[1].nombre}</p></li>
                                    <li> <p>{compra.productos[2].nombre}</p></li>
                                    <li><p>{compra.productos[3].nombre}</p></li>
                                    <li><p>{compra.productos[4].nombre}</p></li>
                                    <li><p>{compra.productos[5].nombre}</p></li>
                                </ol>
                            </Col>


                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                                <button value={JSON.stringify(compra.productos)} onClick={(e) => selectCompra(e.target.value)}>Devolver</button>
                            </Col>
                        </Row>
                    </div >
                    )
                })
                }

            </div>) : ""}

            {viewModificarPerfil ? (<div><h2>MODIFICAR PERFIL</h2> </div>) : ""}
        </div>
    )
}
export default Perfil;