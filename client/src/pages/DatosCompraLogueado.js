import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"
import Mapa from "../components/Mapa";
import { Checkbox } from "antd";
import { Radio } from "react";

function DatosCompraLogueado() {
  const [direccionEnvio, setDireccionEnvio] = useState("");
  const [poblacionEnvio, setPoblacionEnvio] = useState("");
  const [cpEnvio, setCpEnvio] = useState("");
  const [modoEnvio, setModoEnvio] = useState("");
  const [tipoDireccion, setTipoDireccion] = useState("");

  const [viewDireccion, setViewDireccion] = useState(true);
  const [viewCheckOtraDireccionOrdinario, setViewCheckOtraDireccionOrdinario] = useState(true);
  const [viewOpcionesCorreoOrdinario, setViewOpcionesCorreoOrdinario] = useState(false);
  const [viewInputOtraDireccionOrdinario, setViewInputOtraDireccionOrdinario] = useState(false);
  const [viewAlertaIntroducirDireccionOrdinario, setViewAlertaIntroducirDireccionOrdinario] = useState(false);
  const [viewAlertaIntroducirPoblacionOrdinario, setViewAlertaIntroducirPoblacionOrdinario] = useState(false);
  const [viewAlertaIntroducirCpOrdinario, setViewAlertaIntroducirCpOrdinario] = useState(false);


  const [viewCheckOtraDireccionPref, setViewCheckOtraDireccionPref] = useState(true);
  const [viewOpcionesCorreoPref, setViewOpcionesCorreoPref] = useState(false);
  const [viewInputOtraDireccionPref, setViewInputOtraDireccionPref] = useState(false);
  const [viewAlertaIntroducirDireccionPref, setViewAlertaIntroducirDireccionPref] = useState(false);
  const [viewAlertaIntroducirPoblacionPref, setViewAlertaIntroducirPoblacionPref] = useState(false);
  const [viewAlertaIntroducirCpPref, setViewAlertaIntroducirCpPref] = useState(false);

  const [viewAlertaIntroducirDireccionRecog, setViewAlertaIntroducirDireccionRecog] = useState(false);
  const [viewAlertaIntroducirNombreRecog, setViewAlertaIntroducirNombreRecog] = useState(false);
  const [viewAlertaIntroducirPoblacionRecog, setViewAlertaIntroducirPoblacionRecog] = useState(false);

  const [viewAlertaIntroducirDireccion, setviewAlertaIntroducirDireccion] = useState(false)
  const [viewOpcionesPuntoRecog, setViewOpcionesPuntoRecog] = useState(false);

  var datosUser = JSON.parse(sessionStorage.getItem("infoUser"));
  var direccionUser = datosUser.direccion;
  var poblacionUser = datosUser.poblacion;
  var cpUser = datosUser.cp

  function addDirection() {
    let entrega = {
      direccion: direccionEnvio,
      poblacion: poblacionEnvio,
      cp: cpEnvio,
    }

    console.log(direccionEnvio)
    console.log(poblacionEnvio);
    console.log(cpEnvio)
    // window.location.href = "http://localhost:3000/datosenvio"
  };

  function addDirectionRecog() {

  }

  const onChangeCheckEnvio = (checkedValues) => {
    setModoEnvio(checkedValues);
  };

  const onChangeCheckDireccion = (checkedValues) => { 
    setTipoDireccion(checkedValues)
    // Cuando desclicas nueva direccion 
    if (tipoDireccion[0] === "nuevaDireccion") {
      setViewInputOtraDireccionOrdinario(false)
      setViewInputOtraDireccionPref(false)

    }

  }

  const isDisabledPref = (id) => {
    return tipoDireccion.length > 0 && tipoDireccion.indexOf(id) === -1;
  };


  const isDisabledOrdinario = (id) => {
    return tipoDireccion.length > 0 && tipoDireccion.indexOf(id) === -1;
  };

  const isDisabled = (id) => {
    return tipoDireccion.length > 0 && tipoDireccion.indexOf(id) === -1;
  };

  const isDisabledEnvio = (id) => {
    return modoEnvio.length > 0 && modoEnvio.indexOf(id) === -1;
  }


  return (
    <div>
      <Checkbox.Group onChange={(e) => onChangeCheckEnvio(e)}>
        <div>

          {/* CORREO ORDINARIO */}
          <br />
          <br />
          <br />
          <img src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/imagenes%20envio/Correos-Symbol.png"  alt="Correos"></img>
          <Checkbox
            className="checkEnvio"
            value="ordinario"
            id="ordinario"
            name="modoEnvio"
            disabled={isDisabledEnvio("ordinario")}
            onChange={(e) => {
              if (!viewOpcionesCorreoOrdinario) {
                setViewOpcionesCorreoOrdinario(true)
              } else {
                setViewOpcionesCorreoOrdinario(false)
              }
            }
            }>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Envío a través de Correos España</label>
          </Checkbox>

          {viewOpcionesCorreoOrdinario ? (
            <Checkbox.Group onChange={(e) => onChangeCheckDireccion(e)}>
            <div>
              
              {viewDireccion ? (
                <div>
                  <br />
                  <Checkbox       
                    id="mismaDireccion"
                    value="mismaDireccion"
                    name="tipoDireccion"
                    disabled={isDisabledOrdinario("mismaDireccion")}
                    onChange={(e) => {    
                          setDireccionEnvio(direccionUser);
                          setPoblacionEnvio(poblacionUser);
                          setCpEnvio(cpUser); 
                    }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Mi dirección:&nbsp;</label>
                  </Checkbox>
                </div>) : ""}
              <br></br>
              {viewCheckOtraDireccionOrdinario ? (<div>
                <Checkbox
                  value="nuevaDireccion"
                  id="nuevaDireccion"
                  name="tipoDireccion"
                  disabled={isDisabledOrdinario("nuevaDireccion")}
                  onChange={(e) => {        
                    setViewInputOtraDireccionOrdinario(true);
                    setDireccionEnvio("");
                    setPoblacionEnvio("");
                    setCpEnvio("");
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>Otra dirección: &nbsp;</label>
                  </Checkbox></div>) : ""}
              <br />
              <br />
              {viewInputOtraDireccionOrdinario ? (
                <div>
                  <label>Dirección:</label>
                  <br />
                  <input type="text"
                    onChange={(e) => setDireccionEnvio(e.target.value)}
                  />
                  {viewAlertaIntroducirDireccionOrdinario ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce una dirección válida</motion.p>
            
          </div>) : ""}
                  <br />

                  <label>Población:</label>
                  <br />
                  <input type="text"
                    onChange={(e) => setPoblacionEnvio(e.target.value)}
                  />
                  {viewAlertaIntroducirPoblacionOrdinario ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce una población válida</motion.p>
            
          </div>) : ""}
                  <br />

                  <label>Código Postal:</label>
                  <br />
                  <input type="text"
                    onChange={(e) => setCpEnvio(e.target.value)}
                  />
                  {viewAlertaIntroducirCpOrdinario ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce un código postal válido</motion.p>
            
          </div>) : ""}
                </div>) : ""}
                </div> 
                </Checkbox.Group>

                ) : ""}

          <br></br>
    
          <br></br>

        
        </div>
        
        {/* // CORREO PREFERENTE */}

        <div>

        <img src="https://raw.githubusercontent.com/moramraul/imagenesFashion/3659924410e59d2d3f420f6acaa543d559cee971/imagenes%20envio/MRW_logo.svg"  alt="Correos"></img>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Checkbox
            className="checkEnvio"
            value="preferente"
            id="preferente"
            name="modoEnvio"
            disabled={isDisabledEnvio("preferente")}
            onChange={(e) => {
              if (!viewOpcionesCorreoPref) {
                setViewOpcionesCorreoPref(true)
              } else {
                setViewOpcionesCorreoPref(false)
              }
            }
            }>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Envío a través de MRW España</label>
          </Checkbox>

          {viewOpcionesCorreoPref ? (
            <Checkbox.Group onChange={(e) => onChangeCheckDireccion(e)}>
            <div>
              
              {viewDireccion ? (
                <div>
                  <br />
                  <Checkbox       
                    id="mismaDireccion"
                    value="mismaDireccion"
                    name="tipoDireccion"
                    disabled={isDisabledPref("mismaDireccion")}
                    onChange={(e) => {    
                          setDireccionEnvio(direccionUser);
                          setPoblacionEnvio(poblacionUser);
                          setCpEnvio(cpUser); 
                    }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Mi dirección:&nbsp;</label>
                  </Checkbox>
                </div>) : ""}
              <br></br>
              {viewCheckOtraDireccionPref ? (<div>
                <Checkbox
                  value="nuevaDireccion"
                  id="nuevaDireccion"
                  name="tipoDireccion"
                  disabled={isDisabledPref("nuevaDireccion")}
                  onChange={(e) => {        
                    setViewInputOtraDireccionPref(true);
                    setDireccionEnvio("");
                    setPoblacionEnvio("");
                    setCpEnvio("");              
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>Otra dirección: &nbsp;</label>
                  </Checkbox></div>) : ""}
              <br />
              <br />
              {viewInputOtraDireccionPref ? (
                <div>
                  <label>Dirección:</label>
                  <br />
                  <input type="text"
                    onChange={(e) => setDireccionEnvio(e.target.value)}
                  />
                  {viewAlertaIntroducirDireccionPref ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce una dirección válida</motion.p>
            
          </div>) : ""}
                  <br />

                  <label>Población:</label>
                  <br />
                  <input type="text"
                    onChange={(e) => setPoblacionEnvio(e.target.value)}
                  />
                  {viewAlertaIntroducirPoblacionPref ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce una población válida</motion.p>
            
          </div>) : ""}
                  <br />

                  <label>Código Postal:</label>
                  <br />
                  <input type="text"
                    onChange={(e) => setCpEnvio(e.target.value)}
                  />
                  {viewAlertaIntroducirCpPref ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce un código postal válido</motion.p>
            
          </div>) : ""}
                </div>) : ""}
                </div> 
                </Checkbox.Group>

                ) : ""}

          <br></br>
    
          <br></br>

        
        </div>


        {/* PUNTO DE RECOGIDA */}


        <div>
        <img src="https://1000marcas.net/wp-content/uploads/2020/01/logo-Leroy-Merlin-1-500x300.png" height={100} width={166} alt="Correos"></img>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Checkbox
            className="checkEnvio"
            value="recogida"
            name="modoEnvio"
            id="recogida"
            disabled={isDisabledEnvio("recogida")}
            onChange={(e) => {
              onChangeCheckEnvio(e.target.value);
              if (!viewOpcionesPuntoRecog) {
                setViewOpcionesPuntoRecog(true)
                setDireccionEnvio("");
                  setPoblacionEnvio("");
                  setCpEnvio("");
              } else {
                setViewOpcionesPuntoRecog(false)
              }
            }
            }>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Recoger en un punto de recogida oficial</label>
          </Checkbox>
          {viewOpcionesPuntoRecog ? (
            <div>
              <br />
              <label>Nombre:</label>
              <br />
              <input type="text"
                onChange={(e) => setDireccionEnvio(e.target.value)}
              />
              {viewAlertaIntroducirNombreRecog ? (<div>
                <motion.p
                  initial={{ x: -1000, color: "#e30b2c" }}
                  animate={{ fontSize: 20, x: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >Introduce un punto de recogida válido</motion.p>
                
              </div>) : ""}
              <br />
              <br />
              <label>Dirección:</label>
              <br />
              <input type="text"
                onChange={(e) => setPoblacionEnvio(e.target.value)}
              />
              {viewAlertaIntroducirDireccionRecog ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce una dirección válida</motion.p>
            
          </div>) : ""}
              <br />
              <br />
              <label>Población:</label>
              <br />
              <input type="text"
                onChange={(e) => setCpEnvio(e.target.value)}
              />
              {viewAlertaIntroducirPoblacionRecog ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce un código postal válido</motion.p>
            
          </div>) : ""}

              <br />
              <br />
              <Mapa />
            </div>) : ""}
          <br />
          {viewAlertaIntroducirDireccion ? (<div>
            <motion.p
              initial={{ x: -1000, color: "#e30b2c" }}
              animate={{ fontSize: 20, x: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >Introduce una dirección válida</motion.p>
          </div>) : ""}
        
        <br />
        </div>
      </Checkbox.Group>



      {/* BOTON */}
      <button onClick={() => {
        if (modoEnvio[0] === "ordinario" && tipoDireccion[0] === "nuevaDireccion") {
            if (direccionEnvio === "") {
              setViewAlertaIntroducirDireccionOrdinario(true)
            } 
            if (poblacionEnvio === "") {
              setViewAlertaIntroducirPoblacionOrdinario(true)
            }
            if (cpEnvio === "") {
              setViewAlertaIntroducirCpOrdinario(true)
            }
            if (direccionEnvio !== "" && poblacionEnvio !== "" && cpEnvio !== ""){
              addDirection();
            }
        } 
        if (modoEnvio[0] === "preferente" && tipoDireccion[0] === "nuevaDireccion") {
          if (direccionEnvio === "") {
            setViewAlertaIntroducirDireccionPref(true)
          } 
          if (poblacionEnvio === "") {
            setViewAlertaIntroducirPoblacionPref(true)
          }
          if (cpEnvio === "") {
            setViewAlertaIntroducirCpPref(true)
          }
          if (direccionEnvio !== "" && poblacionEnvio !== "" && cpEnvio !== ""){
            addDirection();
          }

        } 
        if (modoEnvio[0] === "recogida") {
          if (direccionEnvio === "") {
            setViewAlertaIntroducirDireccionRecog(true)
          } 
          if (poblacionEnvio === "") {
            setViewAlertaIntroducirNombreRecog(true)
          }
          if (cpEnvio === "") {
            setViewAlertaIntroducirPoblacionRecog(true)
          }
          if (direccionEnvio !== "" && poblacionEnvio !== "" && cpEnvio !== ""){
            addDirectionRecog();
          }

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
