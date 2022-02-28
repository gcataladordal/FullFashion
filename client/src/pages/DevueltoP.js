import React, { useState } from "react";


function DevueltoP() {



    return (

        <div>
            <h1>Hemos recibido la petición de cambio de productos</h1>
            <h2><p> En cuestión de 48 horas recibirá los nuevos productos</p> </h2>
            <h2><p> Le pedimos que le entregue los productos al repartidor</p> </h2>
            <h2><p> ¡Muchas Gracias!</p> </h2>

            <button onClick={()=>{window.location.href = "http://localhost:3000/perfil"}}>Volver</button>
        </div>

    );

}
export default DevueltoP;