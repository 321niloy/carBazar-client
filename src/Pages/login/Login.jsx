import React, { useContext, useState } from 'react';

import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';
import google from '../../../public/image/GOOGLE.png'
import loginimg from "../../../public/image/Login.gif"

const Login = () => {

  const [success,setsuccess]=useState('')
  const[error,seterror]=useState('')
  const{signin,googleSignIn}=useContext(Authcontext)

  const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'

  const forLogin = event =>{



    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value


    signin(email,password)
    .then(result =>{
      const loguser = result.user
      console.log(loguser)
      setsuccess('Login Successful')
      navigate(from, { replace: true });
    })
    .catch(error=>{
      console.log(error)
      seterror("Password or email is wrong",error.messege)
    })
  }

  const googlelogin = ()=>{
    googleSignIn()
    .then((result) => {
      const loguser = result.user;
  
      navigate(from, { replace: true });
      console.log(loguser)
    })
    .catch((error) => {
      console.log("ERROR",error)
    })
  }

  
    return (
        <>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">

  <Form onSubmit={forLogin} id='forheight' className="card flex-shrink-0 w-full max-w-sm shadow-yellow-200 shadow-xl lg:w-1/2 ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered  focus:border-yellow-300" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered focus:border-yellow-300" required/>
          <label className="label">
          <Link to='/forget' className="label-text-alt link link-hover text-yellow-600 ">Forgot password?</Link>
          </label>
        </div>
        <p className='text-sm text-green-700'>{success}</p>
        <p className='text-sm text-red-700'>{error}</p>
        <div className="form-control mt-6">
          <input className="btn mb-4 bg-yellow-400 text-white hover:bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:border-orange-600" type="submit" value="LogIn" />
          
        </div>
        <span onClick={googlelogin} className='flex items-center justify-center p-4 border-yellow-600 bordered'><span><img className="w-6" src={google} alt="" /></span><span className='text-orange-600 text-lg ms-2' >Google</span></span>
      </div>
    </Form>







    <div className="text-center  lg:w-1/2">
      <h1 className="lg:text-5xl text-3xl font-bold">Login now!</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='lg:w-400 md:justify-center md:flex lg:h-400 w-300 h-300'>
    {/* lo */}
    <img src={loginimg} alt="" />
      </div>
    </div>



  
  </div>
</div>
        </>
    );
};

export default Login;

