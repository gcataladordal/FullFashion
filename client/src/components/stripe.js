import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const stripePromise = loadStripe("pk_test_51KWzYqAT2Dvvoq4F6fndpOuyBZxYQajiWG0oTQJhietLyWxRuPtKzkPpoSh9B4yr2lyymteUUIH91QWLN5GsTfIP006FEL6O2E")



const ChekoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let infoUser = JSON.parse(sessionStorage.getItem("infoUser"));
        let comprado = JSON.parse(localStorage.getItem("compra"));
        let direccionEnvio = JSON.parse(localStorage.getItem("direccionEnvio"));
        let infoUserNoLog = JSON.parse(localStorage.getItem("datosNoLog"));
        let filtrosCompra = JSON.parse(localStorage.getItem("filtrosCompra"));

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        // SI ESTA LOGUEADO:
        if (!error && infoUser !== null && infoUserNoLog === null) {
            const { id } = paymentMethod;

            // GUARDA EL PEDIDO: 
            const { data } = await axios.post('/checkout', {
                id,
                amount: 30000,
                id_usuario: infoUser.id_usuario,
                productos: comprado,
                estado: "En preparación",
                fecha_creacion: new Date(),
                modo_entrega: direccionEnvio.modoEnvio,
                direccion: direccionEnvio.direccion,
                cp: direccionEnvio.cp,
                poblacion: direccionEnvio.poblacion,
                devolucion: false,
                filtros: filtrosCompra

            })

            // GUARDA ESTILOS FAVORITOS
            const { estilosFav } = await axios.post("/estilosfavoritos", {
                id_usuario: infoUser.id_usuario,
                color: filtrosCompra.color,
                estilo: filtrosCompra.estilo,
            })


            // GUARDA SEGUNDA DIRECCION USUARIO
            if (!direccionEnvio.mismaDireccion) {
                const { segundaDireccion } = await axios.post("/direcciondos", {
                    id_usuario: infoUser.id_usuario,
                    direccion2: direccionEnvio.direccion,
                    poblacion2: direccionEnvio.poblacion,
                    cp2: direccionEnvio.cp,

                })

            }


            elements.getElement(CardElement).clear();

        }

        // SI NO ESTÁ LOGUEADO:
        if (!error && infoUserNoLog !== null && infoUser === null) {
            const { id } = paymentMethod;
            const { data } = await axios.post('/checkout', {
                id,
                amount: 30000,
                id_usuario: infoUserNoLog.dni,
                productos: comprado,
                estado: "En preparación",
                fecha_creacion: new Date(),
                modo_entrega: infoUserNoLog.modoEnvio,
                direccion: infoUserNoLog.direccion,
                nombreLeroy: infoUserNoLog.nombreLeroy,
                cp: infoUserNoLog.cp,
                poblacion: infoUserNoLog.poblacion,
                devolucion: false,
            })
            elements.getElement(CardElement).clear();

        }
        window.location.href = "http://localhost:3000/mostrarfactura"


    }
    let compra = JSON.parse(localStorage.getItem("compra"));
    return (
        <form onSubmit={handleSubmit} className="card card-body">
            <Row>
                <Col>
                    <img src={compra[0].imgUrl} alt="Checkout" className="img-fluid" />
                </Col>
                <Col>
                    <img src={compra[1].imgUrl} alt="Checkout" className="img-fluid" />
                </Col>
                <Col>
                    <img src={compra[2].imgUrl} alt="Checkout" className="img-fluid" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={compra[3].imgUrl} alt="Checkout" className="img-fluid" />
                </Col>
                <Col>
                    <img src={compra[4].imgUrl} alt="Checkout" className="img-fluid" />
                </Col>
                <Col>
                    <img src={compra[5].imgUrl} alt="Checkout" className="img-fluid" />
                </Col>
            </Row>

            <div className="form-group">
                <h3 className="text-center">Total: 300€</h3>
                <CardElement className="form-control" />
            </div>
            <button className="ButtonHome btn btn-primary btn-lg">
                PAGAR
            </button>
        </form>
    )

}



function Payment() {
    return (
        <Elements stripe={stripePromise}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <ChekoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    )
}

export default Payment;