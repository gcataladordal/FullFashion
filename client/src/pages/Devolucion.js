import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox } from "antd";
import { Button, Row, Container, Col } from 'react-bootstrap';

function Devolucion() {

    const [cambios, setCambios] = useState("");

    // el check 
    const onChangeCheck = (checkedValues) => {
        setCambios(checkedValues);

    };
    const isDisabled = (id) => {

        return cambios.length > 2 && cambios.indexOf(id) === -1;
    };


    // function confirmarDevolucion(producto1, producto2, producto3, producto4, producto5, producto6) {
    //     let quien = localStorage.getItem("quien")
    //     let compra = [producto1, producto2, producto3, producto4, producto5, producto6]
    //     localStorage.setItem("Compra", JSON.stringify(compra))
    //     let infoUser = sessionStorage.getItem("infoUser")
    //     if (infoUser === null) {
    //         window.location.href = "http://localhost:3000/datoscompramio"
    //     } else {
    //         window.location.href = "http://localhost:3000/datoscompralogueado"
    //     }
    // }

    var resultado = JSON.parse(localStorage.getItem("devolucion"))
    console.log(resultado);



    return (
        <div>
            {console.log("devolucion")}
            <Checkbox.Group className="resultadolook" onChange={(e) => onChangeCheck(e)}  >
                <Row>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={resultado[0]._id} disabled={isDisabled(resultado[0]._id)}>
                            <img alt={resultado[0].nombre} src={resultado[0].imgUrl} width={350} />
                            <label>{resultado[0].nombre}</label>
                        </Checkbox>
                        <br></br>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={resultado[1]._id} disabled={isDisabled(resultado[1]._id)}>
                            <img alt={resultado[1].nombre} src={resultado[1].imgUrl} width={350} />
                            <label>{resultado[1].nombre}</label>
                        </Checkbox>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={resultado[2]._id} disabled={isDisabled(resultado[2]._id)}>
                            <img alt={resultado[2].nombre} src={resultado[2].imgUrl} width={350} />
                            <label>{resultado[2].nombre}</label>
                        </Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={resultado[3]._id} disabled={isDisabled(resultado[3]._id)}>
                            <img alt={resultado[3].nombre} src={resultado[3].imgUrl} width={350} />
                            <label>{resultado[3].nombre}</label>
                        </Checkbox>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={resultado[4]._id} disabled={isDisabled(resultado[4]._id)}>
                            <img alt={resultado[4].nombre} src={resultado[4].imgUrl} width={350} />
                            <label>{resultado[4].nombre}</label>
                        </Checkbox>
                    </Col>
                    <Col md={4} xs={12}>
                        <Checkbox className="color" value={resultado[5]._id} disabled={isDisabled(resultado[5]._id)}>
                            <img alt={resultado[5].nombre} src={resultado[5].imgUrl} width={350} />
                            <label>{resultado[5].nombre}</label>
                        </Checkbox>
                    </Col>
                </Row>
                <br></br>
            </Checkbox.Group>
            <div>
                {/* <button className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={recogerCambios}>Cambiar las seleccionadas</button> */}

                <p>*Recuerda que solo tienes 5 cambios de 2 prendas máximo cada vez</p>
                {/* <button onClick={() => confirmarDevolucion(resultado.todasPartesDeArriba[0], resultado.todasPartesDeArriba[1], resultado.todasPartesDeArriba[2], resultado.todasPartesDeAbajo[0], resultado.todasPartesDeAbajo[1], resultado.todosZapatos[0])}>Seguir para finalizar compra</button> */}
            </div>


        </div>
    );
}


// const recogerCambios = () => {

//     var contador = JSON.parse(localStorage.getItem("contadorCambios"));
//     contador++;
//     if (contador < 6) {

//         for (let i = 0; i < resultado.todasPartesDeArriba.length; i++) {

//             if (cambios[0] === resultado.todasPartesDeArriba[i]._id) {
//                 console.log(resultado.todasPartesDeArriba[i]._id)
//                 resultado.todasPartesDeArriba.splice(i, 1)
//                 localStorage.setItem("resultado", JSON.stringify(resultado))
//                 console.log(JSON.parse(localStorage.getItem("resultado")))

//             }

//             if (cambios[1] === resultado.todasPartesDeArriba[i]._id) {
//                 console.log(resultado.todasPartesDeArriba[i]._id)
//                 resultado.todasPartesDeArriba.splice(i, 1)
//                 localStorage.setItem("resultado", JSON.stringify(resultado))
//                 console.log(JSON.parse(localStorage.getItem("resultado")))
//             }
//         }

//         for (let i = 0; i < resultado.todasPartesDeAbajo.length; i++) {
//             if (cambios[0] === resultado.todasPartesDeAbajo[i]._id) {
//                 console.log(resultado.todasPartesDeAbajo[i]._id)
//                 resultado.todasPartesDeAbajo.splice(i, 1)
//                 localStorage.setItem("resultado", JSON.stringify(resultado))
//                 console.log(JSON.parse(localStorage.getItem("resultado")))
//             }

//             if (cambios[1] === resultado.todasPartesDeAbajo[i]._id) {
//                 console.log(resultado.todasPartesDeAbajo[i]._id)
//                 resultado.todasPartesDeAbajo.splice(i, 1)
//                 localStorage.setItem("resultado", JSON.stringify(resultado))
//                 console.log(JSON.parse(localStorage.getItem("resultado")))
//             }
//         }

//         for (let i = 0; i < resultado.todosZapatos.length; i++) {
//             if (cambios[0] === resultado.todosZapatos[i]._id) {
//                 console.log(resultado.todosZapatos[i]._id)
//                 resultado.todosZapatos.splice(i, 1)
//                 localStorage.setItem("resultado", JSON.stringify(resultado))
//                 console.log(JSON.parse(localStorage.getItem("resultado")))
//             }

//             if (cambios[1] === resultado.todosZapatos[i]._id) {
//                 console.log(resultado.todosZapatos[i]._id)
//                 resultado.todosZapatos.splice(i, 1)
//                 localStorage.setItem("resultado", JSON.stringify(resultado))
//                 console.log(JSON.parse(localStorage.getItem("resultado")))
//             }
//         }

//         localStorage.setItem("contadorCambios",JSON.stringify(contador));
//         window.location.href = "http://localhost:3000/resultadolook"
//     } else{
//         alert("BANEADO");
//     }
// }
export default Devolucion;