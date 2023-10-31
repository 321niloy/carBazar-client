import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ReactTyped from 'react-typed';
import { ThemeContext } from '../../context/ThemeProvider';
import './banner.css'


const Banner = () => {
    const {isDarkMode}=useContext(ThemeContext)
    const [time,setTime]=useState(new Date())

    useEffect(()=>{
     setInterval(()=>setTime(new Date()),1000)
    },[])
    return (
        <div className='lg:mt-16 lg:ms-3 mb-5 lg:mb-0 '>
            <h1 className={isDarkMode?'text-white font-extrabold text-3xl md:text-center lg:text-start':'text-black font-extrabold text-3xl md:text-center lg:text-start'}><ReactTyped strings={["Welcome to Our Website"]} typeSpeed={100} backSpeed={100} loop></ReactTyped> </h1>
            <div id="gradient-background" className='md:w-full'>
  <p id="gradient-text" className='md:text-center lg:text-start'>Visit our Full websites and choose cars and <br /> get offers for cars </p>
</div>


            <p className='mt-2 italic font-bold mb-12 md:text-center lg:text-start'>Buying Cars in low and High price</p>
            <span className='font-extrabold text-white bg-yellow-500 p-6 rounded-xl mt-3 text-3xl md:flex md:justify-center lg:w-60 '>
                {time.toLocaleTimeString()}
            </span>
        </div>
    );
};

export default Banner;