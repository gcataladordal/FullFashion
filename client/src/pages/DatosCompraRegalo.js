import React from "react";
import { useState } from "react"

function DatosCompraRegalo() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [direction, setDirection] = useState("");
    const [cp, setCp] = useState("");
    const [tlf, setTlf] = useState("");

    const saveDatoDireccion = () => {
        let datosDireccion = {
          name,
          lastName,
          direction,
          cp,
          tlf,
        };
        console.log(datosDireccion);
      
      };
  return (
    <div>
        <h3>Datos de envio para el Regalo</h3>
        <label>Nombre</label>
        <input type="text" name="nombre" placeholder="Ej: Juan"  onChange={(e) => {
            setName(e.target.value);
           
          }}></input>
        <br></br>

        <label>Apellidos</label>
        <input type="text" name="nombre" placeholder="Ej: Juan"  onChange={(e) => {
            setLastName(e.target.value);
           
          }}></input>
        <br></br>

        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          placeholder="Ej: C/ del Sol 5"
          onChange={(e) => {
            setDirection(e.target.value);
           
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
          name="cp"
          placeholder="Ej: 625845298"
          onChange={(e) => {
            setTlf(e.target.value);
          }}></input>
        <br></br>
        <button onClick={saveDatoDireccion}>Enviar</button>
    </div>
  );
}
export default DatosCompraRegalo;
