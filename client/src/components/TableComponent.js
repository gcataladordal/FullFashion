
import React from "react";
import {  Row,  Col } from 'react-bootstrap';

class TableComponent extends React.Component {

    render() {

        var datosFactura = JSON.parse(sessionStorage.getItem("datosFactura"));

        return (
            <div>
                <Row>

                    <Col md={6}>
                        <img alt="logo" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesHome/Logo2.png" width={100} />
                        <br />
                        <h5>Full Fashion S.A</h5>
                        <br />
                        <h5>Calle Mongo, Madrid, 95959</h5>
                        <br />
                        <h5>fullfashion211@gmail.com</h5>
                        <hr size="10" width="200%" align="left" color="grey"></hr>
                    </Col>

                    <Col md={6}>
                        <h5>{datosFactura.nombre}</h5>
                        <br />
                        <h5>{datosFactura.direccion}</h5>
                        <br />
                        <h5>{datosFactura.poblacion}</h5>
                        <br />
                        <h5>{datosFactura.cp}</h5>
                    </Col>
                </Row>
                
                <div className="container">
                    <h4 align="justify">{datosFactura.fechaCompra}</h4>
                    <br/>
                    <h4 align="justify">{datosFactura.modoEnvio}</h4>
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
                            <td>{datosFactura.producto}</td>
                            <td>1</td>
                            <td>{datosFactura.precio}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div style={{ display: 'block', padding: 50 }}>
                        <h6 align="justify">Gracias por tu compra, estamos felices de ser part??cipes de tu nuevo look. El env??o puede demorarse entre 3 y 5 d??as laborables si has elegido correo ordinario y punto de recogida; y 24h si has elegido correo certificado. Seg??n nuestras pol??ticas de devoluciones* dispones de 2 cambios despu??s de realizar la compra, el primero puedes elegir hasta un m??ximo de 3 prendas y si todav??a no te convence no te preocupes, puedes devolvernos todo el pack completo, los gastos de env??o y devoluciones va incluido en el precio final de compra. Dispones de 30 d??as para realizar dicho cambio.</h6>
                        <br />
                        <h5 align="justify">
                            *Pol??ticas de devoluciones de Full Fashion: Si deseas realizar la devoluci??n de un art??culo comprado en FullFashion.com, dispones de 30 d??as desde la fecha de env??o de tu pedido.Los art??culos deben conservar todas las etiquetas y estar en perfecto estado. Puedes encontrar m??s informaci??n acerca de la Pol??tica de Cambios y Devoluciones o del derecho de desistimiento en la Ley 7/1996, de 15 de enero de 1996, de Ordenaci??n del Comercio Minorista (Bolet??n Oficial del Estado n?? 15, de 17 de enero de 1996).
                        </h5>
                    </div>
                </div>
            </div >
        );
    }
}

export default TableComponent;