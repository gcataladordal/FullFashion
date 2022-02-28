import React, { useState } from "react";


function DevueltoTodo() {
    return (

        <div>
        <h1>Sentimos que los artículos no hayan sido de su agrado.</h1>
        <h2><p>En cuestión de 24-48 horas se recogerá todo su pedido y tendrá su reembolso</p></h2>
        <button className="ButtonHome btn btn-primary btn-lg" onClick={()=>{window.location.href = "http://localhost:3000/perfil"}}>Volver</button>

    </div>

    );

}
export default DevueltoTodo;