import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { Form } from 'react-router-dom';
import app from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const auth = getAuth(app)

const Forgetpassword = () => {

    const btnReset = event =>{
        event.preventDefault()
        const email = event.target.email.value
        console.log('for reset',email)
        if(!email){
            Swal.fire('Please Provide your email address to reset Password')
        }
        sendPasswordResetEmail(auth,email)
       .then(()=>{
       
        Swal.fire('please cheak your email')
        event.target.reset()
       }) 
       .catch(error =>{
        console.log(error)
       })
    }
<h1 className='text-center mt-2 mb-2 text-yellow-300 text-3xl italic font-extrabold'>Enter Your Email And Press in Reset Button</h1>

    return (
        <>
        <div className='mt-16 mb-28 justify-center flex '>
            <div className=" w-96 h-48  items-center shadow-yellow-500 shadow-lg">
  <Form onSubmit={btnReset} className="card-body ">
    <input  name='email' placeholder='Email' type="email"  className='border border-yellow-500 rounded w-64 h-10 mx-auto'/>
    <div className="card-actions justify-center ">
    <input className='p-3 rounded-lg bg-yellow-500 text-white font-bold text-lg' type="submit" value="Reset" />
    </div>
  </Form>
  </div>
        </div></>
    );
};

export default Forgetpassword;