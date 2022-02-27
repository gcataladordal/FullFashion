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

        let infoUser = JSON.parse(sessionStorage.getItem("infoUser"))
        let idUser = infoUser.id_usuario;
        let comprado = JSON.parse(localStorage.getItem("Compra"))
        let direccionEnvio = JSON.parse(localStorage.getItem("direccionEnvio"))
        console.log(direccionEnvio.direccion)
        console.log(direccionEnvio.cp)
        console.log(direccionEnvio.poblacion)
        console.log(direccionEnvio.modo_entrega)


        // let estado = JSON.parse(localStorage.getItem("estado"))
        // let fecha_creacion = JSON.parse(localStorage.getItem("fecha_creacion"))
        // let  modo_entrega = JSON.parse(localStorage.getItem("modo_entrega"))
        // let cp = JSON.parse(localStorage.getItem("cp"))
        // let poblacion = JSON.parse(localStorage.getItem("poblacion"))
        // let devolucion = JSON.parse(localStorage.getItem("devolucion"))

        console.log(comprado)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })
        if (!error) {
            const { id } = paymentMethod;
            const { data } = await axios.post('/checkout', {
                id,
                amount: 30000,
                id_usuario: idUser,
                productos: comprado,
                estado: "En tránsito",
                fecha_creacion: new Date(),
                modo_entrega: direccionEnvio.modo_entrega,
                direccion: direccionEnvio.direccion,
                cp: direccionEnvio.cp,
                poblacion: direccionEnvio.poblacion,
                devolucion: false,
            })
            console.log(data);
            elements.getElement(CardElement).clear();
        }
        window.location.href = "http://localhost:3000/mostrarfactura"


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