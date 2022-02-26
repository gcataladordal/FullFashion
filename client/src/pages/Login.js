import React, { Component } from "react";
import axios from "axios"


class Login extends Component {
    // constructor(props) {
    //     super(props);
    // }

    submit(event) {
        event.preventDefault()

        let email = event.target.email.value;
        let password = event.target.password.value;


        let usuarioLogin = {
            email,
            password
        }

        axios.post("/login", usuarioLogin).then((res) => {
            sessionStorage.setItem("infoUser", JSON.stringify(res.data));
            window.location.href = "http://localhost:3000/"
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
                    <label >Email</label>
                    <input type="text" name="email" placeholder="Ej: felipe_VI@hotmail.com"></input>
                    <br></br>
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="password"></input>
                    <br></br>
                    <button>Enviar</button>
                </form>

            </div>
        );
    }
}
export default Login;