import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { FaRegMoon,FaSun } from 'react-icons/fa';
import humberger from '../../public/image/humberger.png'
import { Authcontext } from '../context/AuthProvider';

import {  FaRegShareFromSquare } from "react-icons/fa6";

const Navbar = () => {
  const {isDarkMode, toggleTheme } = useContext(ThemeContext);
  const {user,logOut}=useContext(Authcontext)
  


  const logoutbutton = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
    
     }
 
  console.log("userkkk",user)
    return (
        <>
           <div className="navbar bg-yellow-50 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="me-2 lg:hidden md:hidden">
      <span className='p-3 mx-auto '><img className='w-5 ms-0 me-2 ' src={humberger} alt="" /></span>
         
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52 ">
        <li><Link to='/' className='text-black font-bold '>Home</Link></li>
        <li><Link to='/allcars' className='text-black font-bold '>All Cars</Link></li>
        {
          user && <li> <Link to='/mycars' className='text-yellow-400 hover:text-yellow-400 hover:bg-white ms-3 p-3 rounded-xl font-extrabold '>My selacted Cars</Link></li>
         }
        <li><Link to="/dashboard" className='text-black font-bold '>Dashboard</Link></li>
        <li><Link to="/feedback" className='text-yellow-400 font-bold '>Customer feedback</Link></li>
        <li><Link to="/share" className='text-black font-bold '><FaRegShareFromSquare/></Link></li>
      </ul>
    </div>
    <Link className="p-3 rounded-lg bg-yellow-400 shadow-lg shadow-yellow-300 hover:bg-yellow-300 text-white  text-xl">CarsBazar</Link>
  </div>
  <div className="navbar-center hidden lg:flex md:flex">
    <ul className="menu menu-horizontal px-1 items-center">
         <li> <Link to='/' className='text-yellow-400 hover:text-yellow-400 hover:bg-white ms-3 p-3 rounded-xl font-extrabold '>Home</Link></li>
          <li><Link to='/allcars' className='text-yellow-400 hover:text-yellow-400 hover:bg-white ms-3 p-3 rounded-xl font-extrabold '>All Cars</Link></li>
         {
          user && <li> <Link to='/mycars' className='text-yellow-400 hover:text-yellow-400 hover:bg-white ms-3 p-3 rounded-xl font-extrabold '>My selacted Cars</Link></li>
         }
         <li> <Link to="/dashboard" className='text-yellow-400 hover:text-yellow-400 hover:bg-white ms-3 p-3 rounded-xl font-extrabold '>Dashboard</Link></li>
          <li><Link to="/feedback" className='text-yellow-400  hover:bg-white hover:text-yellow-400 ms-3 p-3 rounded-xl font-extrabold'>Customer feedback</Link></li>
          <li><Link to="/share" className='text-black font-bold '><FaRegShareFromSquare/></Link></li>
    </ul>

   
  </div>
  <div className="navbar-end">
    {/* light or dark */}
    <span className='text-black p-3 border-orange-700 border rounded-full me-3' onClick={toggleTheme}>{isDarkMode ?<FaSun ></FaSun> :<FaRegMoon/> }</span>
    {/* light or dark ended */}
     {/*  */}
{
  user && <div className="avatar online">
  <div className="lg:w-12 w-8 me-2 mask mask-hexagon">
    <img src={user?.photoURL}/>
  </div>
</div>
}
   {/*  */}
    {
      user?<span className="text-gray-900 bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 md:py-1 py-2.5 text-center mr-2 mb-2" onClick={logoutbutton}>Log Out</span>:<Link to='/login' className="text-gray-900 bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</Link>
    }
   {
    !user && <Link  to='/signup'class="text-gray-900 bg-gradient-to-r from-yellow-200 via-lime-200 to-orange-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SignUp</Link>
   }
  
  </div>
</div> 
        </>
    );
};

export default Navbar;