import React from "react";
import ExportPdfComponent from "../components/ExportPdfComponent";

// import { useState } from "react"

function MostrarFactura() {


  return (
    <div>
      <br />
      <br />
      <br />
        <h2>¡Muchas gracias por tu compra!</h2>
        <div>
        <ExportPdfComponent/>
      </div>
    </div>
  );
}
export default MostrarFactura;
