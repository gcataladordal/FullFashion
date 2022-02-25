import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox } from "antd";
// import { Button, Row, Container, Col  } from 'react-bootstrap';

function ResultadoLook() {

    const [cambios, setCambios] = useState("");

    // el check 
    const onChangeCheck = (checkedValues) => {
        setCambios(checkedValues);
        // console.log(checkedValues);
    };

    console.log(cambios)



    const recogerCambios = () => {

        var contador = JSON.parse(localStorage.getItem("contadorCambios"));
        contador++;
        if (contador < 6) {

            for (let i = 0; i < resultado.todasPartesDeArriba.length; i++) {

                if (cambios[0] === resultado.todasPartesDeArriba[i]._id) {
                    console.log(resultado.todasPartesDeArriba[i]._id)
                    resultado.todasPartesDeArriba.splice(i, 1)
                    localStorage.setItem("resultado", JSON.stringify(resultado))
                    console.log(JSON.parse(localStorage.getItem("resultado")))

                }

                if (cambios[1] === resultado.todasPartesDeArriba[i]._id) {
                    console.log(resultado.todasPartesDeArriba[i]._id)
                    resultado.todasPartesDeArriba.splice(i, 1)
                    localStorage.setItem("resultado", JSON.stringify(resultado))
                    console.log(JSON.parse(localStorage.getItem("resultado")))
                }
            }

            for (let i = 0; i < resultado.todasPartesDeAbajo.length; i++) {
                if (cambios[0] === resultado.todasPartesDeAbajo[i]._id) {
                    console.log(resultado.todasPartesDeAbajo[i]._id)
                    resultado.todasPartesDeAbajo.splice(i, 1)
                    localStorage.setItem("resultado", JSON.stringify(resultado))
                    console.log(JSON.parse(localStorage.getItem("resultado")))
                }

                if (cambios[1] === resultado.todasPartesDeAbajo[i]._id) {
                    console.log(resultado.todasPartesDeAbajo[i]._id)
                    resultado.todasPartesDeAbajo.splice(i, 1)
                    localStorage.setItem("resultado", JSON.stringify(resultado))
                    console.log(JSON.parse(localStorage.getItem("resultado")))
                }
            }

            for (let i = 0; i < resultado.todosZapatos.length; i++) {
                if (cambios[0] === resultado.todosZapatos[i]._id) {
                    console.log(resultado.todosZapatos[i]._id)
                    resultado.todosZapatos.splice(i, 1)
                    localStorage.setItem("resultado", JSON.stringify(resultado))
                    console.log(JSON.parse(localStorage.getItem("resultado")))
                }

                if (cambios[1] === resultado.todosZapatos[i]._id) {
                    console.log(resultado.todosZapatos[i]._id)
                    resultado.todosZapatos.splice(i, 1)
                    localStorage.setItem("resultado", JSON.stringify(resultado))
                    console.log(JSON.parse(localStorage.getItem("resultado")))
                }
            }

            localStorage.setItem("contadorCambios",JSON.stringify(contador));
            window.location.href = "http://localhost:3000/resultadolook"
        } else{
            alert("BANEADO");
        }
    }

    const isDisabled = (id) => {

        return cambios.length > 1 && cambios.indexOf(id) === -1;
    };


    if (localStorage.getItem("resultado")) {
        var resultado = JSON.parse(localStorage.getItem("resultado"))
        // console.log(resultado)
    } else {
        console.log("No hay datos en el local")
    }
    // 0
    var imagenArriba0 = resultado.todasPartesDeArriba[0].imgUrl
    // 1
    var imagenArriba1 = resultado.todasPartesDeArriba[1].imgUrl
    // 2
    var imagenArriba2 = resultado.todasPartesDeArriba[2].imgUrl
    // 3
    var imagenAbajo0 = resultado.todasPartesDeAbajo[0].imgUrl
    // 4
    var imagenAbajo1 = resultado.todasPartesDeAbajo[1].imgUrl
    // 5
    var imagenZapatos0 = resultado.todosZapatos[0].imgUrl

    var tituloArriba0 = resultado.todasPartesDeArriba[0].nombre
    var tituloArriba1 = resultado.todasPartesDeArriba[1].nombre
    var tituloArriba2 = resultado.todasPartesDeArriba[2].nombre

    var tituloAbajo0 = resultado.todasPartesDeAbajo[0].nombre
    var tituloAbajo1 = resultado.todasPartesDeAbajo[1].nombre

    var tituloZapatos0 = resultado.todosZapatos[0].nombre

    var idArriba0 = resultado.todasPartesDeArriba[0]._id
    var idArriba1 = resultado.todasPartesDeArriba[1]._id
    var idArriba2 = resultado.todasPartesDeArriba[2]._id

    var idAbajo0 = resultado.todasPartesDeAbajo[0]._id
    var idAbajo1 = resultado.todasPartesDeAbajo[1]._id

    var idZapatos0 = resultado.todosZapatos[0]._id


    return (
        <div>
            <Checkbox.Group onChange={(e) => onChangeCheck(e)}  >

                <div>
                    <Checkbox className="color" value={idArriba0} disabled={isDisabled("0")}>
                        <img alt="Foto de arriba Full Fashion" src={imagenArriba0} width={350} />
                        <label>{tituloArriba0}</label>
                    </Checkbox>
                    <br></br>
                </div>
                <div>
                    <Checkbox className="color" value={idArriba1} disabled={isDisabled("1")}>
                        <img alt="Foto de arriba Full Fashion" src={imagenArriba1} width={350} />
                        <label>{tituloArriba1}</label>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox className="color" value={idArriba2} disabled={isDisabled("2")}>
                        <img alt="Foto de arriba Full Fashion" src={imagenArriba2} width={350} />
                        <label>{tituloArriba2}</label>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox className="color" value={idAbajo0} disabled={isDisabled("3")}>
                        <img alt="Foto de abajo Full Fashion" src={imagenAbajo0} width={350} />
                        <label>{tituloAbajo0}</label>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox className="color" value={idAbajo1} disabled={isDisabled("4")}>
                        <img alt="Foto de abajo Full Fashion" src={imagenAbajo1} width={350} />
                        <label>{tituloAbajo1}</label>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox className="color" value={idZapatos0} id={tituloZapatos0} disabled={isDisabled("5")}>
                        <img alt="Foto de abajo Full Fashion" src={imagenZapatos0} width={350} />
                        <label>{tituloZapatos0}</label>
                    </Checkbox>

                </div>
                <br></br>
                <div>
                    <button onClick={recogerCambios}>Cambiar las seleccionadas</button>

                    <p>*Recuerda que solo tienes 5 cambios de 2 prendas máximo cada vez</p>
                    <button>Seguir para finalizar compra</button>
                </div>
            </Checkbox.Group>

        </div>
    );
}

export default ResultadoLook;