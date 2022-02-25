import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const stripePromise = loadStripe("pk_test_51KWzYqAT2Dvvoq4F6fndpOuyBZxYQajiWG0oTQJhietLyWxRuPtKzkPpoSh9B4yr2lyymteUUIH91QWLN5GsTfIP006FEL6O2E")



const ChekoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // let id_usuario = JSON.parse(localStorage.getItem("id_usuario"))
        // let productos = JSON.parse(localStorage.getItem("productos"))
        // let estado = JSON.parse(localStorage.getItem("estado"))
        // let fecha_creacion = JSON.parse(localStorage.getItem("fecha_creacion"))
        // let  modo_entrega = JSON.parse(localStorage.getItem("modo_entrega"))
        // let direccion = JSON.parse(localStorage.getItem("direccion"))
        // let cp = JSON.parse(localStorage.getItem("cp"))
        // let poblacion = JSON.parse(localStorage.getItem("poblacion"))
        // let devolucion = JSON.parse(localStorage.getItem("devolucion"))
        // let metodo_pago = JSON.parse(localStorage.getItem("resultado"))
    

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
    })
    if (!error) {
        const { id } = paymentMethod;
        const { data } = await axios.post('/checkout', {
            id,
            amount: 30000,
            id_usuario: 5555,
            productos: ["pantalon azul", "camiseta azul", "zapatos azul"],
            estado: "En tránsito",
            fecha_creacion: new Date(),
            modo_entrega: "correo",
            direccion: "Calle falsa 123",
            cp: "28008",
            poblacion: "Madrid",
            devolucion: true,

        })
        console.log(data);
        elements.getElement(CardElement).clear();

    
    }
}


return (
    <form onSubmit={handleSubmit} className="card card-body">
        <img src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/imagenpago.jpg" alt="Checkout" className="img-fluid" />
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