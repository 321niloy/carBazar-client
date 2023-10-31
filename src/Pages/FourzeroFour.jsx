import React from 'react';
import four from "../../public/image/fourzerofour.gif"

import { Link } from 'react-router-dom';


const FourzeroFour = () => {

   
    return (
         <>
             <div className='w-full h-screen relative'>
       <img className='w-full h-screen ' src={four}></img>
        </div>
        <span className='justify-center flex '>
        <Link to="/" className='p-3 bg-yellow-400 text-white rounded absolute lg:top-[500px] top-20 left-10 md:top-[500px]'>Back Home</Link>
        </span>
        </>
    );
};

export default FourzeroFour;