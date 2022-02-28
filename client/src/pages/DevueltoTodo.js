import React, { useState } from "react";


function DevueltoTodo() {
    return (

        <div>
        <h1>Sentimos que los artículos no le hayan sido de tu agrado.</h1>
        <h2><p>En cuestión de 48 horas se recogerá todo su pedido y tendrá su reembolso</p></h2>
        <button onClick={()=>{window.location.href = "http://localhost:3000/perfil"}}>Volver</button>

    </div>

    );

}
export default DevueltoTodo;