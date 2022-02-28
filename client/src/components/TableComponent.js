import Column from "antd/lib/table/Column";
import React from "react";
import { Button, Row, Container, Col } from 'react-bootstrap';

class TableComponent extends React.Component {

    render() {

        var datosFactura = JSON.parse(localStorage.getItem("datosFactura"));

        return (
            <div>
                <Row>

                    <Col md={6}>
                        <img src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesHome/Logo2.png" width={100} />
                        <br />
                        <h8>Full Fashion S.A</h8>
                        <br />
                        <h8>Calle Mongo, Madrid, 95959</h8>
                        <br />
                        <h8>hola@fullfashion.com</h8>
                        <hr size="10" width="300%" align="left" color="green"></hr>
                    </Col>

                    <Col md={6}>
                        <h8>datosFactura.nombre</h8>
                        <br />
                        <h8>datosFactura.direccion</h8>
                        <br />
                        <h8>datosFactura.poblacion</h8>
                        <br />
                        <h8>datosFactura.cp</h8>
                    </Col>
                </Row>
                
                <div class="container">
                    <h7 align="justify">Mon Feb 28 2022 12:47:05 GMT+0100 (Hora estàndard del Centre d’Europa)</h7>
                    <br/>
                    <h7 align="justify">Modo envío: correos</h7>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Productos</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mujer/Hombre</td>
                            <td>1</td>
                            <td>300€</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div style={{ display: 'block', padding: 50 }}>
                        <h6 align="justify">Gracias por tu compra, estamos felices de ser partícipes de tu nuevo look. El envío puede demorarse entre 3 y 5 días laborables si has elegido correo ordinario y punto de recogida; y 24h si has elegido correo certificado. Según nuestras políticas de devoluciones* dispones de 2 cambios después de realizar la compra, el primero puedes elegir hasta un máximo de 3 prendas y si todavía no te convence no te preocupes, puedes devolvernos todo el pack completo, los gastos de envío y devoluciones va incluido en el precio final de compra. Dispones de 30 días para realizar dicho cambio.</h6>
                        <br />
                        <h8 align="justify">
                            *Políticas de devoluciones de Full Fashion: Si deseas realizar la devolución de un artículo comprado en FullFashion.com, dispones de 30 días desde la fecha de envío de tu pedido.Los artículos deben conservar todas las etiquetas y estar en perfecto estado. Puedes encontrar más información acerca de la Política de Cambios y Devoluciones o del derecho de desistimiento en la Ley 7/1996, de 15 de enero de 1996, de Ordenación del Comercio Minorista (Boletín Oficial del Estado nº 15, de 17 de enero de 1996).
                        </h8>
                    </div>
                </div>
            </div >
        );
    }
}

export default TableComponent;