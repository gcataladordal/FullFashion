import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"



class Register extends Component {
    constructor(props) {
        super(props);
    }

    async submit(event) { //con esta función recibo el evento del formulario para poder llevarlo al back y almacenarlo
        event.preventDefault()
        // console.log("funciona correctamente");
        console.log(event.target.nombre.value);
        console.log(event.target.apellidos.value);
        console.log(event.target.email.value);
        console.log(event.target.telefono.value);
        console.log(event.target.cp.value);
        console.log(event.target.contrasena.value);

        let name = event.target.nombre.value;
        let password = event.target.contrasena.value;
        let User = {
            name,
            password
        }
        // await axios.post("/register", User).then((res) => console.log(res.data))
       await axios.post("register")
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Ej: Felipe"></input>
                    <br></br>
                    <label>Apellidos</label>
                    <input type="text" name="apellidos"placeholder="Ej: Gómez González"></input>
                    <br></br>
                    <label >Email</label>
                    <input type="text" name="email" placeholder="Ej: felipe_VI@hotmail.com"></input>
                    <br></br>
                    <label >Teléfono</label>
                    <input type="text" name="telefono" placeholder="Ej: 695403647"></input>
                    <br></br>
                    <label >Dirección</label>
                    <input type="text" name="direccion" placeholder="Ej: C/ Paco de Lucia nº5"></input>
                    <br></br>
                    <label >CP</label>
                    <input type="text" name="cp" placeholder="Ej: 28033"></input>
                    <br></br>
                    <label>Contraseña</label>
                    <input type="password" name="contrasena" placeholder="password"></input>

                    <button>Enviar</button>

                </form>

            </div>

        );
    }
}
export default Register;