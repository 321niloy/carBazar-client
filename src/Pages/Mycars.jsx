import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import Axios from '../Component/Axios';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { ThemeContext } from '../context/ThemeProvider';

const Mycars = () => {
    const [cars,setmyCars]=useState([])
    const {user} = useContext(Authcontext)
    const {isDarkMode} = useContext(ThemeContext);
    useEffect(() => {
        const url = `/getcars?email=${user?.email}`;
        Axios.get(url)
          .then(res => {
            setmyCars(res);
            
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


      const handleCancel = (id) =>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'confirm',
        }).then((result) => {
          if (result.isConfirmed) {
            const url = `/getcars/${id}`
            Axios.delete(url)
            .then(res =>{
             console.log('zakaria delete',res)
             if(res.deletedCount === 1){
              const filterData = cars?.filter( car => car._id !== id)
              setmyCars(filterData)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
             }
            })
            .catch(error =>{
              console.log(error)
            })
          }
        })
      }

// -----------

//-----------
const handleNotAvailable = () =>{
  Swal.fire({
    title: 'Sorry,This Car is Not Available',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}



    return (
        <>
            <div className='flex items-center justify-center'>
            <div key={cars?._id} className='lg:grid md:grid gap-3 lg:grid-cols-3 md:grid-cols-3 mt-4 mb-4'>
         {
            cars?.map(cars => <div style={{height: "544px"}} className={isDarkMode?"card text-black" : "card"}>
            <figure><img className='w-80 h-80' src={cars.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {cars.name}
                <div className="badge text-black  bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200">NEW</div>
              </h2>
              <p className='text-sm'><span className='font-bold '>Model:</span>{cars.model}</p>
              <p className='text-sm'><span className='font-bold'>Price:</span>$ {cars.price} </p>
              <p className='text-sm'><span className='font-bold'>Made In:</span> {cars.madeIn} </p>
              
              <div className='flex'>
              <p className='text-sm me-6'><span className='font-bold'>Rating:</span>{cars.rating} </p>
              <Rating  style={{maxWidth:80}} value={cars.rating} readOnly></Rating>
              </div>
              <div className="card-actions justify-center">
              {
  cars?.available === 0 ? <div className='flex'>
  <span onClick={() => handleCancel(cars._id)}  className='text-white bg-yellow-400 w-28 h-11 justify-center items-center flex rounded-xl text-sm hover:cursor-pointer'>Cancel</span>
  <span onClick={() => handleNotAvailable()}  className='text-white bg-yellow-400 w-28 h-11 justify-center items-center flex rounded-xl text-sm hover:cursor-pointer ms-2'>Buy</span>
  </div>:<div className='flex'>
  <span onClick={() => handleCancel(cars._id)}  className='text-white bg-yellow-400 w-28 h-11 justify-center items-center flex rounded-xl text-sm hover:cursor-pointer'>Cancel</span>
  <Link to={`/singlegetcars/${cars._id}`} className='text-white bg-yellow-400 w-28 h-11 justify-center items-center flex rounded-xl text-sm hover:cursor-pointer ms-2'>Buy</Link>
  </div>
}
              </div>
            </div>
          </div>)
         }
        </div>  
            </div>
        </>
    );
};

export default Mycars;

