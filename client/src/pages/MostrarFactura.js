import React from "react";
// import { enviarMail } from "../../../controllers/compras.controllers";
// import { useState } from "react"
import axios from "axios"

function MostrarFactura() {

    const enviarMail = async ()=>{
      const {email} = await axios.post("/enviarmail").then((res)=>{
        console.log(res.data);
      })
    }

  return (
    <div>
      <br />
      <br />
      <br />
        <h2>Muchas gracias por tu compra!!!</h2>
        <button type="button" onClick={enviarMail}>Enviar Mail</button>
    </div>
  
  );
}
export default MostrarFactura;
