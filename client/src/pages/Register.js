import React, { Component } from "react";
import axios from "axios";
import { Button, Row, Container, Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Register extends Component {
    // constructor(props) {
    //     super(props);
    // }

    submit(event) { //con esta función recibo el evento del formulario para poder llevarlo al back y almacenarlo
        event.preventDefault()
        let nombre = event.target.nombre.value;
        let apellidos = event.target.apellidos.value;
        let email = event.target.email.value;
        let dni = event.target.dni.value
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
            dni,
            poblacion,
            direccion,
            cp,
            talla,
            target,
            password,
            password2
        }
        axios.post("/register", User).then((res) => {
            window.location.href = "http://localhost:3000/login"
        })
    }

    render() {
        return (
            <div>
                <h1>Regístrate</h1>
                <form onSubmit={(event) => this.submit(event)} className="card card-body">
                    <div className="form-control">
                    <label>Nombre</label>
                    <br></br>
                    <input type="text" name="nombre" placeholder="Ej: Felipe"></input>
                    <br></br>
                    <label>Apellidos</label>
                    <br></br>
                    <input type="text" name="apellidos" placeholder="Ej: Gómez González"></input>
                    <br></br>
                    <label >Email</label>
                    <br></br>
                    <input type="text" name="email" placeholder="Ej: felipe_VI@hotmail.com"></input>
                    <br></br>
                    <label >DNI</label>
                    <br></br>
                    <input type="text" name="dni" placeholder="12345678X"></input>
                    <br></br>
                    <label >Población</label>
                    <br></br>
                    <input type="text" name="poblacion" placeholder="Ej: Madrid"></input>
                    <br></br>
                    <label >Dirección</label>
                    <br></br>
                    <input type="text" name="direccion" placeholder="Ej: C/ Paco de Lucia nº5"></input>
                    <br></br>
                    <label >CP</label>
                    <br></br>
                    <input type="text" name="cp" placeholder="Ej: 28033"></input>
                    <br></br>
                    <label >Talla</label>
                    <br></br>
                    <select name="talla">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <br></br>
                    <label >Target</label>
                    <br></br>
                    <select name="target">
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Niño</option>
                        <option>Niña</option>
                    </select>
                    <br></br>
                    <label>Contraseña</label>
                    <br></br>
                    <input type="password" name="contrasena" placeholder="password"></input>
                    <br></br>
                    <label>Confirmar Contraseña</label>
                    <br></br>
                    <input type="password" name="contrasena2" placeholder="Confirmar password"></input>
                    <br></br>
                    <br></br>
                    <button className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>
                    </div>
                </form>

            </div>

        );
    }
}
export default Register;