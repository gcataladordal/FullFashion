import React, { State } from "react";
import axios from "axios";
import { Checkbox } from "antd";

function Perfil() {

    let idUserLogueado = JSON.parse(sessionStorage.getItem("infoUser"));
    let idUser = {
        idUsuario: idUserLogueado.id_usuario
    }
    console.log(idUser);
    axios.post("/historial", idUser).then((res) => {
            localStorage.setItem("pedidos", JSON.stringify(res.data));
        })
    var allCompras = JSON.parse(localStorage.getItem("pedidos"));
    console.log(allCompras)
    // allCompras[0].productos[i] --> Todos los productos
    // allCompras[0].productos[i][0] --> _id del producto
    // allCompras[0].productos[i][1] --> nombre del producto
    // allCompras[0].productos[i][2] --> target
    // allCompras[0].productos[i][3] --> tipo_prenda
    // allCompras[0].productos[i][4] --> estilo del producto
    // allCompras[0].productos[i][5] --> color del producto
    // allCompras[0].productos[i][6] --> imgUrl del producto
    // allCompras[0].productos[i][7] --> id producto

    console.log(allCompras[0].productos[0]);
    let productos = allCompras[0].productos;

    return (
        <div>
            <h1>PERFIL</h1>
            {productos.map(producto => {
                return <div>
                    <h2>{producto[1]}</h2>
                    <p>producto2 :{producto[2]}</p>
                    <p>producto3 :{producto[3]}</p>
                    <p>producto4:{producto[4]}</p>
                    <img alt={producto[1]} src={producto[6]} width={200} />
                    <p>IdProducto :{producto[7]}</p>

                    {/* <Checkbox.Group >

                        <div>
                            <Checkbox className="color" value={producto[3]} >
                                <img alt={producto[1]} src={producto[6]} width={350} />
                                <label>{producto[1]}</label>
                            </Checkbox>
                            <br></br>
                        </div>
                        <div>
                            <Checkbox className="color" value={producto[3]} >
                                <img alt={producto[1]} src={producto[6]} width={350} />
                                <label>{producto[1]}</label>
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox className="color" value={producto[3]}>
                                <img alt={producto[1]} src={producto[6]} width={350} />
                                <label>{producto[1]}</label>
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox className="color" value={producto[3]} >
                                <img alt={producto[1]} src={producto[6]} width={350} />
                                <label>{producto[1]}</label>
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox className="color" value={producto[3]} >
                                <img alt={producto[1]} src={producto[6]} width={350} />
                                <label>{producto[1]}</label>
                            </Checkbox>
                        </div>
                        <div>
                            <Checkbox className="color" value={producto[3]} >
                                <img alt={producto[1]} src={producto[6]} width={350} />
                                <label>{producto[1]}</label>
                            </Checkbox>

                        </div>
                        <br></br>

                    </Checkbox.Group> */}

                </div>

            })}

        </div>
    )


    // return (

    // <div>
    //     <h1>PERFIL</h1>
    //     <Checkbox.Group>
    //         <div>
    //             <Checkbox className="color" value="" >
    //                 <img alt="Foto de arriba Full Fashion" src="" width={350} />
    //                 <label>Arriba1</label>
    //             </Checkbox>
    //             <br></br>
    //         </div>
    //         <div>
    //             <Checkbox className="color" value="">
    //                 <img alt="Foto de arriba Full Fashion" src="" width={350} />
    //                 <label>Arriba2</label>
    //             </Checkbox>
    //         </div>
    //         <div>
    //             <Checkbox className="color" value="">
    //                 <img alt="Foto de arriba Full Fashion" src="" width={350} />
    //                 <label>Arriba3</label>
    //             </Checkbox>
    //         </div>
    //         <div>
    //             <Checkbox className="color" value="">
    //                 <img alt="Foto de abajo Full Fashion" src="" width={350} />
    //                 <label>abajo1</label>
    //             </Checkbox>
    //         </div>
    //         <div>
    //             <Checkbox className="color" value="">
    //                 <img alt="Foto de abajo Full Fashion" src="" width={350} />
    //                 <label>abajo2</label>
    //             </Checkbox>
    //         </div>
    //         <div>
    //             <Checkbox className="color" value="">
    //                 <img alt="Foto de abajo Full Fashion" src="{}" width={350} />
    //                 <label>zapato</label>
    //             </Checkbox>

    //         </div>
    //         <br></br>

    //     </Checkbox.Group>

    // </div>
    // );


}
export default Perfil;