import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"
import Mapa from "../components/Mapa";

// let user = {
//   id_usuario: "1",
//   nombre: "Jorge",
//   apellidos: "Sánchez Cuesta",
//   email: "coke_vader@hotmail.com",
//   dni: "51083782T",
//   direccion: "C/ Sol 5",
//   cp: "28055",
//   poblacion: "Madrid",
//   talla: "L",
//   target: "Hombre",
//   color: ["Negro", "Azul"],
//   estilo: "Casual",
//   admin: false,
// };
// localStorage.setItem("user", JSON.stringify(user));



function DatosCompraLogueado() {
  const [direccionEnvio, setDireccionesEnvio] = useState("");
  const [poblacionEnvio, setPoblacionEnvio] = useState("");
  const [cpEnvio, setCpEnvio] = useState("");
  const [viewDireccion, setViewDireccion] = useState(true);
  const [viewOtraDireccion, setViewOtraDireccion] = useState(true);
  const [viewNuevaDireccion, setViewNuevaDireccion] = useState(false);
  const [viewAlertaIntroducirDireccion, setviewAlertaIntroducirDireccion] = useState(false)
  const [viewOpcionesCorreo, setViewOpcionesCorreo] = useState(false);
  const [viewOpcionesPreferente, setViewOpcionesPreferente] = useState(false);
  const [viewOpcionesPuntoRecog, setViewOpcionesPuntoRecog] = useState(false);


  var datosUser = JSON.parse(localStorage.getItem("infoUser"));
  var direccionUser = datosUser.direccion;
  var poblacionUser = datosUser.poblacion;
  var cpUser = datosUser.cp

  function addDirection() {
    console.log(direccionEnvio)
    console.log(poblacionEnvio);
    console.log(cpEnvio)
    window.location.href = "http://localhost:3000/datosenvio"
  };

  const isDisabled = (id) => {

    return direccionEnvio.length > 0 && direccionEnvio.indexOf(id) === -1;

  };

  return (
    <div>
      <div>
        <label>Correo ordinario</label>
        <input type="Checkbox"
          className="color"
          value="negro"
          id="negro"
          disabled={isDisabled()}
          onClick={() => {
            if (!viewOpcionesCorreo) {
              setViewOpcionesCorreo(true)
            } else {
              setViewOpcionesCorreo(false)
            }
          }
          }
        />
        {viewOpcionesCorreo ? (
          <div>
            {viewDireccion ? (
              <div>
                <label>Misma dirección</label>
                <input
                  type="checkbox"
                  value={direccionUser}
                  disabled={isDisabled(direccionUser)}
                  onChange={(e) => {
                    if (direccionEnvio !== e.target.value) {
                      { setDireccionesEnvio(direccionUser); setPoblacionEnvio(poblacionUser); setCpEnvio(cpUser); setViewNuevaDireccion(false); }
                    } else { setDireccionesEnvio("") }
                  }}


                />
              </div>) : ""}
            <br></br>
            {viewOtraDireccion ? (<div><label>Otra dirección</label>
              <input
                type="checkbox"
                value={"otra"}
                disabled={isDisabled("otra")}
                onChange={(e) => {
                  if (direccionEnvio !== e.target.value) { setDireccionesEnvio("otra"); setViewNuevaDireccion(true); } else {
                    setDireccionesEnvio("")
                  }

                }

                }

              ></input></div>) : ""}
            <br />
            <br />
            {viewNuevaDireccion ? (
              <div>
                <label>Dirección:</label>
                <br />
                <input type="text"

                  onChange={(e) => setDireccionesEnvio(e.target.value)}
                />
                <br />
                <br />
                <label>Población:</label>
                <br />
                <input type="text"

                  onChange={(e) => setPoblacionEnvio(e.target.value)}
                />
                <br />
                <br />
                <label>Código Postal:</label>
                <br />
                <input type="text"

                  onChange={(e) => setCpEnvio(e.target.value)}
                />


              </div>) : ""}</div>) : ""}

        <br></br>
        {viewAlertaIntroducirDireccion ? (<div>
          <motion.p
            initial={{ x: -1000, color: "#e30b2c" }}
            animate={{ fontSize: 20, x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >Introduce una dirección válida</motion.p>
        </div>) : ""}
        <br></br>
        
        
      </div>

      {/* // SIGUIENTE */}

      <div>
        <label>Correo preferente</label>
        <input type="Checkbox"
          className="color"
          value="negro"
          id="negro"
          disabled={isDisabled()}
          onClick={() => {
            if (!viewOpcionesPreferente) {
              setViewOpcionesPreferente(true)
            } else {
              setViewOpcionesPreferente(false)
            }
          }
          }
        />
        {viewOpcionesPreferente ? (
          <div>
            {viewDireccion ? (
              <div>
                <label>Misma dirección</label>
                <input
                  type="checkbox"
                  value={direccionUser}
                  disabled={isDisabled(direccionUser)}
                  onChange={(e) => {
                    if (direccionEnvio !== e.target.value) {
                      { setDireccionesEnvio(direccionUser); setPoblacionEnvio(poblacionUser); setCpEnvio(cpUser); setViewNuevaDireccion(false); }
                    } else { setDireccionesEnvio("") }
                  }}


                />
              </div>) : ""}
           <br></br>
            {viewOtraDireccion ? (<div><label>Otra dirección</label>
              <input
                type="checkbox"
                value={"otra"}
                disabled={isDisabled("otra")}
                onChange={(e) => {
                  if (direccionEnvio !== e.target.value) { setDireccionesEnvio("otra"); setViewNuevaDireccion(true); } else {
                    setDireccionesEnvio("")
                  }

                }

                }

              ></input></div>) : ""}
            <br />
            <br />
            {viewNuevaDireccion ? (
              <div>
                <label>Dirección:</label>
                <br />
                <input type="text"

                  onChange={(e) => setDireccionesEnvio(e.target.value)}
                />
                <br />
                <br />
                <label>Población:</label>
                <br />
                <input type="text"

                  onChange={(e) => setPoblacionEnvio(e.target.value)}
                />
                <br />
                <br />
                <label>Código Postal:</label>
                <br />
                <input type="text"

                  onChange={(e) => setCpEnvio(e.target.value)}
                />


              </div>) : ""}</div>) : ""}

        <br></br>
        {viewAlertaIntroducirDireccion ? (<div>
          <motion.p
            initial={{ x: -1000, color: "#e30b2c" }}
            animate={{ fontSize: 20, x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >Introduce una dirección válida</motion.p>
        </div>) : ""}
        <br></br>
      </div>



      {/* SIGUIENTE */}


      <div>
        <label>Punto de recogida</label>
        <input type="Checkbox"
          className="color"
          value="negro"
          id="negro"
          disabled={isDisabled()}
          onClick={() => {
            if (!viewOpcionesPuntoRecog) {
              setViewOpcionesPuntoRecog(true)
            } else {
              setViewOpcionesPuntoRecog(false)
            }
          }
          }
        />
        {viewOpcionesPuntoRecog ? (
          <div>
            <br></br>
            {viewOtraDireccion ? (<div><label>Punto de recogida (Copia la dirección del mapa)</label>
              <input
                type="checkbox"
                value={"otra"}
                disabled={isDisabled("otra")}
                onChange={(e) => {
                  if (direccionEnvio !== e.target.value) { setDireccionesEnvio("otra"); setViewNuevaDireccion(true); } else {
                    setDireccionesEnvio("")
                  }

                }

                }

              ></input></div>) : ""}
            <br />
            <br />
            {viewNuevaDireccion ? (
              <div>
                <label>Nombre:</label>
                <br />
                <input type="text"
                  onChange={(e) => setDireccionesEnvio(e.target.value)}
                />
                <br />
                <br />
                <label>Dirección:</label>
                <br />
                <input type="text"
                  onChange={(e) => setPoblacionEnvio(e.target.value)}
                />
                <br />
                <br />
                <label>Población:</label>
                <br />
                <input type="text"

                  onChange={(e) => setCpEnvio(e.target.value)}
                />

              
              </div>)
               : ""}
              <Mapa />
                </div>) : ""}

        <br></br>
        {viewAlertaIntroducirDireccion ? (<div>
          <motion.p
            initial={{ x: -1000, color: "#e30b2c" }}
            animate={{ fontSize: 20, x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >Introduce una dirección válida</motion.p>
        </div>) : ""}
        <br></br>
      </div>




      {/* BOTON */}
        <button onClick={() => {
          if (direccionEnvio === "otra") {
            setviewAlertaIntroducirDireccion(true)
          } else {
            setviewAlertaIntroducirDireccion(false)
            addDirection();
          }
        }}>

          Enviar</button>
        <br></br>
        
    </div>
  );
}
export default DatosCompraLogueado;
