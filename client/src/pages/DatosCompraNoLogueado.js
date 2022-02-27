import React from "react";
import { useState } from "react"

function DatosCompraNoLogueado() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");

    function saveDatoUsuarioNoLog() {

        let datosUsuarioNoLog = {
          nombre,
          apellidos,
          dni,
          telefono,
        };
        localStorage.setItem("datosNoLog", JSON.stringify(datosUsuarioNoLog))
        window.location.href = "http://localhost:3000/datosenvionologueado"
      
      };

  return (
    <div>
      <br />
        <h3>Datos de su dirección</h3>
        
        <br />
        <label>Nombre:&nbsp;</label>
        <input type="text" name="nombre" placeholder="Ej: Juan"  onChange={(e) => {
            setNombre(e.target.value);
           
          }}></input>
        <br />
        <br />

        <label>Apellidos:&nbsp;</label>
        <input type="text" name="apellidos" placeholder="Ej: Sanchez Martinez"  onChange={(e) => {
            setApellidos(e.target.value);
           
          }}></input>
        <br />
        <br />

        <label>DNI:&nbsp;</label>
        <input
          type="text"
          name="dni"
          placeholder="Ej: 12345678X"
          onChange={(e) => {
            setDni(e.target.value);
           
          }}></input>
        <br />
        <br />

        <label>Teléfono:&nbsp;</label>
        <input
          type="text"
          name="telefono"
          placeholder="Ej: 625845298"
          onChange={(e) => {
            setTelefono(e.target.value);
          }}></input>
        <br />
        <br />
        <button onClick={() => saveDatoUsuarioNoLog()}>Enviar</button>
    </div>
  );
}
export default DatosCompraNoLogueado;
