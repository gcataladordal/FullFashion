import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"


function Register() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cp, setCp] = useState("");
    const [talla, setTalla] = useState("");
    const [target, setTarget] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [viewErrPassNoIgual, setViewErrPassNoIgual] = useState(false);
    const [viewErrEmail, setViewErrEmail] = useState(false);
    const [viewErrDni, setViewErrDni] = useState(false);
    const [viewErrUserExist, setViewErrUserExist] = useState(false);
    const [viewErrRequisitosPass, setViewErrRequisitosPass] = useState(false);
    const [viewAlertFaltanCampos, setViewAlertFaltanCampos] = useState(false);

    const onChangeTalla = (selectedValues) => {
        setTalla(selectedValues);
    };

    const onChangeTarget = (selectedValues) => {
        setTarget(selectedValues);
    };

    const sendData = () => {

      
            setViewAlertFaltanCampos(false)


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
                if (res.data === "errorPassIgual") {
                    setViewErrPassNoIgual(true);
                }
                else if (res.data === "errorEmail") {
                    setViewErrEmail(true);
                }
                else if (res.data === "errorPassReq") {
                    setViewErrRequisitosPass(true);
                }
                else if (res.data === "errorDni") {
                    setViewErrDni(true);
                }
                else if (res.data === "usuarioExiste") {
                    setViewErrUserExist(true);
                }
                else if (res.data === "insertOk") {
                    window.location.href = "http://localhost:3000/login"
                }
            })
        
    }


    return (
        <div>
            <h1>Reg??strate</h1>
            <form className="card card-body">
                {viewErrUserExist ? (<motion.p
                    initial={{ x: -1000, color: "#e30b2c" }}
                    animate={{ fontSize: 20, x: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >Este email ya est?? registrado. Por favor, inicia sesi??n</motion.p>) : ""}

                <div className="form-control">
                    <label>Nombre</label>
                    <br></br>
                    <input type="text" name="nombre" placeholder="Ej: Felipe" onChange={(e) => setNombre(e.target.value)}></input>
                    <br></br>
                    <label>Apellidos</label>
                    <br></br>
                    <input type="text" name="apellidos" placeholder="Ej: G??mez Gonz??lez" onChange={(e) => setApellidos(e.target.value)}></input>
                    <br></br>
                    <label >Email</label>
                    <br></br>
                    <input type="text" name="email" placeholder="Ej: usuario@email.com" onChange={(e) => setEmail(e.target.value)}></input>
                    {viewErrEmail ? (<motion.p
                        initial={{ x: -1000, color: "#e30b2c" }}
                        animate={{ fontSize: 20, x: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >Formato de correo incorrecto, int??ntalo de nuevo (Ej: usuario@email.com)</motion.p>) : ""}
                    <br></br>
                    <label >DNI</label>
                    <br></br>
                    <input type="text" name="dni" placeholder="12345678X" onChange={(e) => setDni(e.target.value)}></input>
                    {viewErrDni ? (<motion.p
                        initial={{ x: -1000, color: "#e30b2c" }}
                        animate={{ fontSize: 20, x: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >Formato de DNI incorrecto, int??ntalo de nuevo (Ej: 12345678X)</motion.p>) : ""}
                    <br></br>
                    <label >Poblaci??n</label>
                    <br></br>
                    <input type="text" name="poblacion" placeholder="Ej: Madrid" onChange={(e) => setPoblacion(e.target.value)}></input>
                    <br></br>
                    <label >Direcci??n</label>
                    <br></br>
                    <input type="text" name="direccion" placeholder="Ej: Calle Paco de Lucia n??5" onChange={(e) => setDireccion(e.target.value)}></input>
                    <br></br>
                    <label >CP</label>
                    <br></br>
                    <input type="text" name="cp" placeholder="Ej: 28033" onChange={(e) => setCp(e.target.value)}></input>
                    <br></br>
                    <label >Talla</label>
                    <br></br>
                    <select name="talla" onChange={(e) => onChangeTalla(e.target.value)}>
                        <option></option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <br></br>
                    <label >Target</label>
                    <br></br>
                    <select name="target" onChange={(e) => onChangeTarget(e.target.value)}>
                        <option></option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="ni??o">Ni??o</option>
                        <option value="ni??a">Ni??a</option>
                    </select>
                    <br></br>
                    <label>Contrase??a (debe tener almenos un s??mbolo y un n??mero)</label>
                    <br></br>
                    <input type="password" name="contrasena" placeholder="Contrase??a" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <label>Confirmar Contrase??a</label>
                    <br></br>
                    <input type="password" name="contrasena2" placeholder="Confirmar contrase??a" onChange={(e) => setPassword2(e.target.value)}></input>
                    {viewErrRequisitosPass ? (<motion.p
                        initial={{ x: -1000, color: "#e30b2c" }}
                        animate={{ fontSize: 20, x: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >La contrase??a no cumple con los requisitos m??nimos de seguridad</motion.p>) : ""}
                    {viewErrPassNoIgual ? (<motion.p
                        initial={{ x: -1000, color: "#e30b2c" }}
                        animate={{ fontSize: 20, x: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >Las contrase??as no coinciden, int??ntalo de nuevo</motion.p>) : ""}
                    <br></br>
                    {viewAlertFaltanCampos ? (<motion.p
                        initial={{ x: -1000, color: "#e30b2c" }}
                        animate={{ fontSize: 20, x: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >Todos los campos son obligatorios. Por favor, int??ntalo de nuevo</motion.p>) : ""}
                    <br></br>
                    <button type="button" className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={sendData}>Enviar</button>
                </div>
            </form>

        </div>
    );
}

export default Register;