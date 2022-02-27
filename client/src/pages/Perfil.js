import React, { State } from "react";
import axios from "axios";
import { Checkbox } from "antd";

function Perfil() {

    // const [miCompra, setCompra] = useState("");

    const selectCompra =(datos) =>{
        localStorage.setItem('devolucion', datos)
        window.location.href = "http://localhost:3000/devolucion"
    }
    let idUserLogueado = JSON.parse(sessionStorage.getItem("infoUser"));
    let idUser = {
        idUsuario: idUserLogueado.id_usuario
    }
    axios.post("/historial", idUser).then((res) => {
        localStorage.setItem("pedidos", JSON.stringify(res.data));
    })
    var allCompras = JSON.parse(localStorage.getItem("pedidos"));
    // allCompras[i]                 --> Array de Productos de cada pedido 
    // allCompras[i].productos       --> Todos los articulos 
    // allCompras[i].productos[i]    --> Articulo i de 6 (0 al 2 son arriba // 3 al 4 es abajo // 5 es zapatillas )
    // allCompras[i].productos[i].nombre --> nombre del articulo   
    // allCompras[i].productos[i].imgUrl --> imgUrl del articulo
    return (
        <div>
            <h1>PERFIL</h1>

            {allCompras.map(compra => {
                return (<div>

                    <p>{compra.productos[0].nombre}</p>
                    <img src={compra.productos[0].imgUrl} width="100px"></img>
                    <p>{compra.productos[1].nombre}</p>
                    <img src={compra.productos[1].imgUrl} width="100px"></img>
                    <p>{compra.productos[2].nombre}</p>
                    <img src={compra.productos[2].imgUrl} width="100px"></img>

                    <p>{compra.productos[3].nombre}</p>
                    <img src={compra.productos[3].imgUrl} width="100px"></img>
                    <p>{compra.productos[4].nombre}</p>
                    <img src={compra.productos[4].imgUrl} width="100px"></img>

                    <p>{compra.productos[5].nombre}</p>
                    <img src={compra.productos[5].imgUrl} width="100px"></img>
        
                    <button value={JSON.stringify(compra.productos)} onClick={(e)=>selectCompra(e.target.value)}>Devolver</button>

                </div>
                )
            })}
        </div>
    )
}
export default Perfil;