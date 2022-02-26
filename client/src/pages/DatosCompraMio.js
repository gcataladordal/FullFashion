import React from "react";
import { useState } from "react"

function DatosCompraMio() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cp, setCp] = useState("");
    const [telefono, setTelefono] = useState("");

    const saveDatoDireccion = () => {
        let datosDireccion = {
          nombre,
          apellidos,
          direccion,
          cp,
          telefono,
        };
        console.log(datosDireccion);
        window.location.href = "http://localhost:3000/datosenvio"
      
      };
  return (
    <div>
        <h3>Datos de su dirección</h3>
        <label>Nombre</label>
        <input type="text" name="nombre" placeholder="Ej: Juan"  onChange={(e) => {
            setNombre(e.target.value);
           
          }}></input>
        <br></br>

        <label>Apellidos</label>
        <input type="text" name="apellidos" placeholder="Ej: Sanchez Martinez"  onChange={(e) => {
            setApellidos(e.target.value);
           
          }}></input>
        <br></br>

        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          placeholder="Ej: C/ del Sol 5"
          onChange={(e) => {
            setDireccion(e.target.value);
           
          }}></input>
        <br></br>

        <label>Código Postal</label>
        <input
          type="text"
          name="cp"
          placeholder="Ej: 28032"
          onChange={(e) => {
            setCp(e.target.value);
           
          }}></input>
        <br></br>

        <label>Teléfono</label>
        <input
          type="text"
          name="telefono"
          placeholder="Ej: 625845298"
          onChange={(e) => {
            setTelefono(e.target.value);
          }}></input>
        <br></br>
        <button onClick={saveDatoDireccion}>Enviar</button>
    </div>
  );
}
export default DatosCompraMio;
