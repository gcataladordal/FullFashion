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
            localStorage.setItem("infoUser", JSON.stringify(res.data));
            window.location.href = "http://localhost:3000/"
        })
    }


    render() {
        return (
            <div>
                <h1>Inicia sesión</h1>
                <form className="card card-body" onSubmit={(event) => this.submit(event)}>
                <div className="form-control">
                    <label >Email</label>
                    <br></br>
                    <input type="text" name="email" placeholder="Ej: felipe_VI@hotmail.com"></input>
                    <br></br>
                    <label>Contraseña</label>
                    <br></br>
                    <input type="password" name="password" placeholder="password"></input>
                    <br></br>
                    <br></br>
                    <button className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>
                </div>
                </form>

            </div>
        );
    }
}
export default Login;