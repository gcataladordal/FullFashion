import React, { Component } from "react";
import axios from "axios"



class Register extends Component {
    // constructor(props) {
    //     super(props);
    // }

    submit(event) { //con esta función recibo el evento del formulario para poder llevarlo al back y almacenarlo
        event.preventDefault()
        console.log("funciona correctamente");
        // console.log(event.target.nombre.value);
        // console.log(event.target.apellidos.value);
        // console.log(event.target.email.value);
        // console.log(event.target.poblacion.value);
        // console.log(event.target.direccion.value);
        // console.log(event.target.cp.value);
        // console.log(event.target.contrasena.value);
        // console.log(event.target.contrasena2.value);

        let name = event.target.nombre.value;
        let apellidos = event.target.apellidos.value;
        let email = event.target.email.value;
        let poblacion = event.target.poblacion.value;
        let direccion = event.target.direccion.value;
        let cp = event.target.cp.value;
        let contrasena = event.target.contrasena.value;
        let contrasena2 = event.target.contrasena2.value;

        let User = {
            name,
            apellidos,
            email,
            poblacion,
            direccion,
            cp,
            contrasena,
            contrasena2
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