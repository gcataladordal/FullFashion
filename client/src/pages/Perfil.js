import React, { State } from "react";
import axios from "axios";
import { Button, Row, Container, Col } from 'react-bootstrap';
import { motion } from "framer-motion";

function Perfil() {



    const selectCompra = (datos) => {
        localStorage.setItem('devolucion', datos);
        let infoColeccion =JSON.parse(datos);
        console.log(infoColeccion[0].target);
        console.log(infoColeccion[0].color);
        console.log(infoColeccion[0].estilo);


        // localStorage.setItem('coleccionDevolucion' )


        window.location.href = "http://localhost:3000/devolucion"
    }
    let idUserLogueado = JSON.parse(sessionStorage.getItem("infoUser"));
    let idUser = {
        idUsuario: idUserLogueado.id_usuario
    }
    axios.post("/historial", idUser).then((res) => {
        localStorage.setItem("pedidos", JSON.stringify(res.data));
    })
    var allCompras = JSON.parse(localStorage.getItem("pedidos"));
    // allCompras[i]                 --> Array de Productos de cada pedido 
    // allCompras[i].productos       --> Todos los articulos 
    // allCompras[i].productos[i]    --> Articulo i de 6 (0 al 2 son arriba // 3 al 4 es abajo // 5 es zapatillas )
    // allCompras[i].productos[i].nombre --> nombre del articulo   
    // allCompras[i].productos[i].imgUrl --> imgUrl del articulo
    return (
        <div>
            <h1>PERFIL</h1>

            {allCompras.map(compra => {
                let fecha = compra.fecha_creacion.split("T");
                let hora = fecha[1].split(".")
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
            })}
        </div >
    )
}
export default Perfil;