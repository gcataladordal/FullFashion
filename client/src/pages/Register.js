import React, { Component } from "react";
import axios from "axios"



class Register extends Component {
    // constructor(props) {
    //     super(props);
    // }

    submit(event) { //con esta función recibo el evento del formulario para poder llevarlo al back y almacenarlo
        event.preventDefault()
        console.log("funciona correctamente");


        let nombre = event.target.nombre.value;
        let apellidos = event.target.apellidos.value;
        let email = event.target.email.value;
        let poblacion = event.target.poblacion.value;
        let direccion = event.target.direccion.value;
        let cp = event.target.cp.value;
        let talla = event.target.talla.value;
        let target = event.target.target.value;
        let password = event.target.contrasena.value;
        let password2 = event.target.contrasena2.value;

        let User = {
            nombre,
            apellidos,
            email,
            poblacion,
            direccion,
            cp,
            talla,
            target,
            password,
            password2
        }
        axios.post("/register", User).then((res) => console.log(res.data))
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Ej: Felipe"></input>
                    <br></br>
                    <label>Apellidos</label>
                    <input type="text" name="apellidos" placeholder="Ej: Gómez González"></input>
                    <br></br>
                    <label >Email</label>
                    <input type="text" name="email" placeholder="Ej: felipe_VI@hotmail.com"></input>
                    <br></br>
                    <label >Población</label>
                    <input type="text" name="poblacion" placeholder="Ej: Madrid"></input>
                    <br></br>
                    <label >Dirección</label>
                    <input type="text" name="direccion" placeholder="Ej: C/ Paco de Lucia nº5"></input>
                    <br></br>
                    <label >CP</label>
                    <input type="text" name="cp" placeholder="Ej: 28033"></input>
                    <br></br>
                    <label >Talla</label>
                    <select name="talla">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <br></br>
                    <label >Target</label>
                    <select name="target">
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Niño</option>
                        <option>Niña</option>
                    </select>
                    <br></br>
                    <label>Contraseña</label>
                    <input type="password" name="contrasena" placeholder="password"></input>
                    <br></br>
                    <label>Confirmar Contraseña</label>
                    <input type="password" name="contrasena2" placeholder="Confirmar password"></input>
                    <br></br>
                    <button>Enviar</button>

                </form>

            </div>

        );
    }
}
export default Register;