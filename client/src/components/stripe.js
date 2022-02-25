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

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })
        if (!error) {
            const {id} = paymentMethod;
          const {data} = await axios.post('/checkout', {
                id,
                amount: 30000
            })
            console.log(data);
            elements.getElement(CardElement).clear()
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