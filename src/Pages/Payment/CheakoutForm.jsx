import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/AuthProvider';
import Axios from '../../Component/Axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';




const CheakoutForm = ({car ,total}) => {
  const {isDarkMode} = useContext(ThemeContext);
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useContext(Authcontext)
    const [carError,setCardError]= useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing,setprocessing] = useState(false);
    const Navigate = useNavigate()
    useEffect(()=>{
    
      if(total>0){
      fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/PaymentPost`,{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({total})
      })
      .then(res => res.json())
      .then(data => {
          console.log("back",data.clientSecret)
          setClientSecret(data.clientSecret)
      })
      }
      },[total])

    const handleSubmit = async (event)=>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
          return
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
        })
        if(error){
          console.log('error',error)
          setCardError(error.message)
        }
        else{
          setCardError('')
          // console.log('PaymentMethod',paymentMethod)
          
        }
      setprocessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displayName || "anonymous",
                email:user?.email || "unkonown"
              },
            },
          },
        );
     if(confirmError){
      console.log(confirmError)
     }
     console.log("paymentintent",paymentIntent)
     setprocessing(false)
     if(paymentIntent.status === 'succeeded'){
      Swal.fire(
        'Payment Done',
        `<span className='text-green-500'>Transection Id: ${`${paymentIntent.id}`}</span>`,
        'success'
      )
     const payment = {email:user?.email, transactionId: paymentIntent.id ,total,date: new Date(),carid:car?._id,objectId:car?.object_id}
     Axios.post('/payments',payment)
     .then((res) => {
      console.log(res);
      Navigate(`/allcars`)
    })
    .catch((error) => {
      console.error(error);
    });
     }
      
    }
    return (
     <div className={isDarkMode?"mt-5 mb-5 text-white":"mt-5 mb-5 "}>
       <form className={isDarkMode?'w-2/4 m-8  mx-auto text-white font-extrabold':'w-2/4 m-8  mx-auto'} onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: isDarkMode ? '#FFFFFF' : '#424770',
              '::placeholder': {
                color: isDarkMode? "#FFFFFF":'#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-outline btn-warning w-20" type="submit" disabled={!stripe || !clientSecret || processing }>
        Pay
      </button>
    </form>
   <div className='flex justify-center'>
   {
      carError && <p className='text-red-600'>{carError}</p>
    }
   </div>
     </div>
    );
};

export default CheakoutForm;