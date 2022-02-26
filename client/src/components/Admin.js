import axios from "axios";
import { addMinutes } from "date-fns/esm";
import { Button, Row, Container, Col, FormLabel } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

function Admin() {
    
    const [nombre, setNombre] = useState("");
    const [target, setTarget] = useState("");
    const [tipo, setTipo] = useState("");
    const [estilo, setEstilo] = useState("");
    const [color, setColor] = useState("");
    const [imagen, setImagen] = useState("");
    
    function addProduct() {
    
        let producto = {
            nombre,
            target,
            tipo,
            estilo,
            color,
            imagen
        }
        axios.post('/addproduct', producto).then((producto) => { (console.log(producto)) })
    }
    
    return (
        <div>
            <form className="card card-body">
                <h2>Añadir producto</h2>
                <div className="form-control">
                    <label>Nombre</label>
                    <input type="text" id="addname" placeholder="Introduce nombre" onChange={(e) => setNombre(e.target.value)}></input>
                    <label>Target</label>
                    <input type="text" id="addtarget" placeholder="Introduce target" onChange={(e) => setTarget(e.target.value)}></input>
                    <label>Tipo de prenda</label>
                    <input type="text" id="addtype" placeholder="Introduce tipo" onChange={(e) => setTipo(e.target.value)}></input>
                    <label>Estilo</label>
                    <input type="text" id="addstyle" placeholder="Introduce estilo" onChange={(e) => setEstilo(e.target.value)}></input>
                    <label>Color</label>
                    <input type="text" id="addcolor" placeholder="Introduce color" onChange={(e) => setColor(e.target.value)}></input>
                    <label>Imagen</label>
                    <input type="text" id="addurl" placeholder="Introduce url" onChange={(e) => setImagen(e.target.value)}></input>
                    <br></br>
                    <Button className="ButtonHome btn btn-primary btn-sm" variant="primary" type="button" onClick={() => addProduct()}>Añadir producto</Button>
                </div>
            </form>


            <form className="card card-body">
                <h2>Modificar producto</h2>
                <div className="form-control">
                    <label>Introduzca id producto a modificar</label>
                    <input type="text" id="productomodificar"></input>
                    <p>Introduzca el nuevo valor a modificar</p>
                    <label>Nombre</label>
                    <input type="text" id="modificarnombre" placeholder="Introduce nuevo nombre"></input>
                    <label>Target</label>
                    <input type="text" id="modificartarget" placeholder="Introduce nuevo target"></input>
                    <label>Tipo de prenda</label>
                    <input type="text" id="modificartipo" placeholder="Introduce nuevo tipo"></input>
                    <label>Estilo</label>
                    <input type="text" id="modificarestilo" placeholder="Introduce nuevo estilo"></input>
                    <label>Color</label>
                    <input type="text" id="modificarcolor" placeholder="Introduce nuevo color"></input>
                    <label>Imagen</label>
                    <input type="text" id="modificarimg" placeholder="Introduce nueva url"></input>
                    <Button className="ButtonHome btn btn-primary btn-sm" variant="primary" type="submit">Modificar producto</Button>
                </div>
            </form>
            <form className="card card-body">
                <h2>Eliminar producto</h2>
                <div className="form-control">
                    <label>Producto a eliminar</label>
                    <input type="text" id="modificarnombre" placeholder="Introduce id de producto"></input>
                    <Button className="ButtonHome btn btn-primary btn-sm" variant="primary" type="submit">Borrar producto</Button>
                </div>
            </form>
        </div>

)
}
export default Admin;