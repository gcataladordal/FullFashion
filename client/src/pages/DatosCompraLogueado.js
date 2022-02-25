import React from "react";
import { useState } from "react"

function DatosCompraLogueado() {

    const [selectDirection, setSelectDirection] = useState("");

    const saveDatoDireccion = () => {
        let datosDireccion = {
            selectDirection,
        };
        console.log(datosDireccion);
      
      };
  return (
    <div>
        <h3>Verifica su dirección</h3>

        <label>Misma dirección</label>
        <input type="checkbox"   onChange={(e) => {
            setSelectDirection(e.target.value);
           
          }}></input>

        <br></br>

        <label>Nueva dirección</label>
        <input type="checkbox"  onChange={(e) => {
            setSelectDirection(e.target.value);
           
          }}></input>
        <br></br>

        
        <br></br>
        <button onClick={saveDatoDireccion}>Enviar</button>
    </div>
  );
}
export default DatosCompraLogueado;
