import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Button } from 'react-bootstrap';


function Perfil() {


    const [viewHistorial, setViewHistorial] = useState(false);
    const [viewModificarPerfil, setViewModificarPerfil] = useState(false);

    //!Proceso para pintar los pedidos
    const [nombre, setNombre] = useState("");
    const [target, setTarget] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [direccion, setDireccion] = useState("");
    const [codigo, setCodigo] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [talla, setTalla] = useState("");

    // const selectCompra = (datos) => {
    //     localStorage.setItem('devolucion', datos);
    //     let infoColeccion = JSON.parse(datos);
    //     console.log(infoColeccion[0].target);
    //     console.log(infoColeccion[0].color);
    //     console.log(infoColeccion[0].estilo);

    //     // localStorage.setItem('coleccionDevolucion' )

    //     window.location.href = "http://localhost:3000/devolucion"
    // }

    let idUserLogueado = JSON.parse(sessionStorage.getItem("infoUser"));
    let idUser = {
        idUsuario: idUserLogueado.id_usuario
    }
    //! Cuando carga Perfil
    // Recoge todos los pedidos del usuario y lo mete en Storage para pintarlos mas abajo

    axios.post("/historial", idUser).then((res) => {
        localStorage.setItem("pedidos", JSON.stringify(res.data));
    })

    // //! BOTON Seleciona el pedido que se va hace la devolucion (El boton tiene la info en JSON de todo el pedido)
    const selectCompra = (datos) => {
        // console.log(datos)
        //Se mete TODA la info del pedido a devolver Storage
        localStorage.setItem('devolucion', datos);
        window.location.href = "http://localhost:3000/devolucion";
        // Se va a recoger info con los datos del pedido con su filtro
        // let infoFiltro = JSON.parse(localStorage.getItem("pedidos"));
        //  Se pondra en storage una collecion con filtro para la devolucion como en look
        // let filtro = {
        //     target: infoFiltro[0].filtros.target,
        //     estilo: infoFiltro[0].filtros.estilo,
        //     color: infoFiltro[0].filtros.color,
        // }
        // console.log(filtro)

        // axios.post("/allproductofiltro", filtro).then((res) => {
        //     console.log(res.data)
        //     let colleccionPedidos = res.data;
        //     localStorage.setItem("resultDevo", JSON.stringify(colleccionPedidos));
        // }).then(() => { window.location.href = "http://localhost:3000/devolucion" })
    }

    var allCompras = JSON.parse(localStorage.getItem("pedidos"));

    // allCompras[i]                 --> Array de Productos de cada pedido 
    // allCompras[i].productos       --> Todos los articulos 
    // allCompras[i].productos[i]    --> Articulo i de 6 (0 al 2 son arriba // 3 al 4 es abajo // 5 es zapatillas )
    // allCompras[i].productos[i].nombre --> nombre del articulo   
    // allCompras[i].productos[i].imgUrl --> imgUrl del articulo

    function updateProfile() {
        let logueado = JSON.parse(sessionStorage.getItem("infoUser"));
        let id = logueado.id_usuario
        console.log(logueado)
        console.log(id)
        let usuario = {
            nombre,
            apellidos,
            email,
            dni,
            password,
            direccion,
            cp: codigo,
            poblacion,
            talla,
            target,
            id
        }
        axios.post('/modifyprofile', usuario);
        console.log(usuario);

    }
    return (
        <div className="perfil">

            <div>
                <h2>Consulta tu historial de compra</h2>
                <button className="ButtonHome btn btn-primary btn-md" onClick={() => { if (!viewHistorial) { setViewHistorial(true); setViewModificarPerfil(false) } }}>Historial</button>
                <br></br>
                <h2>Modifica datos de tu perfil de usuario</h2>
                <button className="ButtonHome btn btn-primary btn-md" onClick={() => { if (!viewModificarPerfil) { setViewModificarPerfil(true); setViewHistorial(false) } }}>Modificar perfil</button>
            </div>

            {/* Vemos el historial de compras */}
            {viewHistorial ? (<div>

                {allCompras.map(compra => {
                    let fecha = compra.fecha_creacion.split("T");
                    let hora = fecha[1].split(".");
                    let estado = compra.estado
                    let entrega = compra.modo_entrega
                    let direccion = compra.direccion
                    let codigo = compra.cp
                    let poblacion = compra.poblacion
                    let id = compra.id_pedido
                    let color1 = compra.filtros.color[0]
                    let color2 = compra.filtros.color[1]
                    let estilo = compra.filtros.estilo
                    let target = compra.filtros.target

                    //!    Meto el id_producto en cada producto (Importante)
                    for (let i = 0; i < compra.productos.length; i++) {
                        compra.productos[i].id_pedido = compra.id_pedido;
                    }
                    //Si compra estado ==="devuelto" --> no se pinta
                    return (<div>
                     
                    

                        {compra.estado !== "devuelto" ? (
<div className="card card-body">
                            <h5><p>Compra con numero de identificación: {id}</p></h5>
                            <Row >
                                <Col className="card card-body" md={6} xs={12}>
                                <h2>Tus productos</h2>
                                    <Row >
                                        <Col md={6} xs={12}>
                                            <img src={compra.productos[0].imgUrl} width="40%"></img>
                                            <p>1. {compra.productos[0].nombre}</p>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <img src={compra.productos[1].imgUrl} width="40%"></img>
                                            <p>2. {compra.productos[1].nombre}</p>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <img src={compra.productos[2].imgUrl} width="40%"></img>
                                            <p>3. {compra.productos[2].nombre}</p>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <img src={compra.productos[3].imgUrl} width="40%"></img>
                                            <p>4. {compra.productos[3].nombre}</p>
                                        </Col>
                                    </Row >
                                    <Row>
                                        <Col md={6} xs={12}>
                                            <img src={compra.productos[4].imgUrl} width="40%"></img>
                                            <p>5. {compra.productos[4].nombre}</p>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <img src={compra.productos[5].imgUrl} width="40%"></img>
                                            <p>6. {compra.productos[5].nombre}</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col className="card card-body" md={6} xs={12}>
                                    <h2>Los detalles de tu pedido</h2>
                                    <h4>Fecha de compra</h4>
                                    <p>{fecha}</p>
                                    <h4>Estado del envío</h4>
                                    <p>{estado}</p>
                                    <h4>Modo de entrega</h4>
                                    <p>{entrega}</p>
                                    <h4>Dirección de entrega</h4>
                                    <p>{direccion}</p>
                                    <h4>Código postal</h4>
                                    <p>{codigo}</p>
                                    <h4>Población</h4>
                                    <p>{poblacion}</p>
                                    <h4>Filtro color primario</h4>
                                    <p>{color1}</p>
                                    <h4>Filtro color secundario</h4>
                                    <p>{color2}</p>
                                    <h4>Filtro estilo</h4>
                                    <p>{estilo}</p>
                                    <h4>Filtro target</h4>
                                    <p>{target}</p>
                                </Col>


                            </Row>
                            <Row>
                                <Col md={12} xs={12}>
                                    <button className="ButtonHome btn btn-primary btn-md" value={JSON.stringify(compra.productos)} onClick={(e) => selectCompra(e.target.value)}>Devolver</button>
                                </Col>
                            </Row>
                        </div>
                            

                        ) : ""}
                    </div>

                    )
                })
                }

            </div>) : ""}

            {viewModificarPerfil ? (
                <div>
                    <form className="card card-body">
                        <h2>Modificar perfil</h2>
                        <div className="form-control">
                            <label>Nombre</label><br></br>
                            <input type="text" placeholder="Introduce nuevo nombre" onChange={(e) => setNombre(e.target.value)}></input><br></br>
                            <label>Apellidos</label><br></br>
                            <input type="text" placeholder="Introduce nuevos apellidos" onChange={(e) => setApellidos(e.target.value)}></input><br></br>
                            <label>E-mail</label><br></br>
                            <input type="text" placeholder="Introduce nuevo e-mail" onChange={(e) => setEmail(e.target.value)}></input><br></br>
                            <label>Password</label><br></br>
                            <input type="text" placeholder="Introduce nuevo password" onChange={(e) => setPassword(e.target.value)}></input><br></br>
                            <label>DNI</label><br></br>
                            <input type="text" placeholder="Introduce nuevo dni" onChange={(e) => setDni(e.target.value)}></input><br></br>
                            <label>Dirección</label><br></br>
                            <input type="text" placeholder="Introduce nueva dirección" onChange={(e) => setDireccion(e.target.value)}></input><br></br>
                            <label>Código postal</label><br></br>
                            <input type="text" placeholder="Introduce nuevo código postal" onChange={(e) => setCodigo(e.target.value)}></input><br></br>
                            <label>Población</label><br></br>
                            <input type="text" placeholder="Introduce nueva población" onChange={(e) => setPoblacion(e.target.value)}></input><br></br>
                            <label>Talla</label><br></br>
                            <input type="text" placeholder="Introduce nueva talla" onChange={(e) => setTalla(e.target.value)}></input><br></br>
                            <label>Target</label><br></br>
                            <input type="text" placeholder="Introduce nuevo target" onChange={(e) => setTarget(e.target.value)}></input><br></br>
                            <br></br>
                            <Button className="ButtonHome btn btn-primary btn-sm" variant="primary" onClick={() => updateProfile()} >Modificar perfil</Button>
                        </div>
                    </form>
                </div>) : ""}
        </div >

    )
}
export default Perfil;