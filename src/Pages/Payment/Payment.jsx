import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheakoutForm from './CheakoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import stripe from "../../../public/image/stripe.gif"


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
console.log("llat",import.meta.env.VITE_PAYMENT_GETWAY_PK)
const Payment = () => {
    const car = useLoaderData()
    console.log(`onedata`,car)
    const {price} = car
    const total = parseFloat(price.toFixed(2))
    return (
        <div>
            <div className='lg:flex md:flex'>
            <div className='md:w-[1100px] lg:w-1/2 shadow-2xl md:my-10 p-9 shadow-yellow-200 bg-slate-50'>
            <h1 className='text-center text-orange-500 text-3xl font-bold'>Payment in Stripe Method</h1>
            
            <div>
                <Elements stripe={stripePromise}>
                <CheakoutForm car={car} total={total}></CheakoutForm>
                </Elements>
            </div>
            </div>
            <div>
            <img src={stripe} alt='picnye' className='md:my-10 md:w-[400]  ms-6'></img>
            </div>
            </div>
            
        </div>
    );
};

export default Payment;