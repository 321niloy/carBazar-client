import React, { useContext, useEffect, useState } from 'react';
import Axios from './Axios';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { Authcontext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { ThemeContext } from '../context/ThemeProvider';

const Topsells = () => {
    const [topcar,settopcars] = useState([])
    const {user} =useContext(Authcontext)
    const {isDarkMode} = useContext(ThemeContext);

    useEffect(() =>{
        const url = `/allcars/${'topsell'}`;
        Axios.get(url)
          .then(res => {
            console.log("Topsells", res);
            settopcars(res)
          })
          .catch(error => {
            console.log(error);
          });
    },[])




const haldleGetCars = (car) =>{
 const {_id,name,image,model,price,rating,madeIn,available,sell}= car
 
 const allitems = {name,image,model,price,rating,madeIn,object_id:_id,available,sell,email:user?.email}
 console.log("handle",allitems)

    const url = '/getcars';
    Axios.post(url,allitems)
      .then(res => {
        console.log("dj", res);
        Swal.fire(
          'Get Cars Info:',
          `<span className='text-green-500'>${`${res.message}`}</span>`,
          'success'
        )
      })
      .catch(error => {
        console.log(error);
      });

}
    return (
        <div>
            <h1 className='text-3xl font-extrabold text-orange-500 text-center'>Top Selling Cars</h1>
            <div  className='flex items-center justify-center'>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 md: gap-7 mt-6 mb-4'>
                {
                    topcar?.slice(0,6)?.map(cars => <div key={cars?._id} style={{height: "544px"}} className={isDarkMode?"card text-black" : "card"}>
                    <figure><img className='w-80 h-80' src={cars.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {cars.name}
                        <div className="badge text-black  bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200">NEW</div>
                      </h2>
                      <p className='text-sm'><span className='font-bold '>Model:</span>{cars.model}</p>
                      <p className='text-sm'><span className='font-bold'>Price:</span>$ {cars.price} </p>
                      <p className='text-sm'><span className='font-bold'>Made In:</span> {cars.madeIn} </p>
                      <p className='text-sm'><span className='font-bold'>Selling:</span> {cars.sell} </p>
                      <div className='flex'>
                      <p className='text-sm me-6'><span className='font-bold'>Rating:</span>{cars.rating} </p>
                      <Rating  style={{maxWidth:80}} value={cars.rating} readOnly></Rating>
                      </div>
                      <div className="card-actions justify-center m-2">
                      
             {user ? <button onClick={()=>haldleGetCars(cars)} className="btn btn-outline btn-warning w-28 ">
              <span className='text-yellow hover:text-white'>Get a Car</span>
              </button>: <Link to="/login" className="btn btn-outline btn-warning w-28 "><span className='text-yellow hover:text-white'>Get a Car</span></Link>}
                      
                      </div>
                    </div>
                  </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default Topsells;