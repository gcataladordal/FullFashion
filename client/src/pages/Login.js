import React, { Component } from "react";
import axios from "axios"


class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }

    submit(event) {
        event.preventDefault()

        let email = event.target.email.value;
        let contrasena = event.target.contrasena.value;


        let UserName = {
            email,
            contrasena
        }

        axios.post("/login", UserName).then((res) => console.log(res.data))

    }


    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
                    <label >Email</label>
                    <input type="text" name="email" placeholder="Ej: felipe_VI@hotmail.com"></input>
                    <br></br>
                    <label>Contraseña</label>
                    <input type="password" name="contrasena" placeholder="password"></input>
                    <br></br>
                    <button>Enviar</button>
                </form>

            </div>
        );
    }
}
export default Login;