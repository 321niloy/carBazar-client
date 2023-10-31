
import React, { useContext, useEffect, useState} from 'react';



import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Axios from '../Component/Axios';
import { Authcontext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeProvider';


const AllCars = () => {

const {user} =useContext(Authcontext)
const {isDarkMode} = useContext(ThemeContext);
const [searchQuery, setSearchQuery] = useState('');
const [sorting,setsorting] = useState('swe')




const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = `/allcars/${sorting}`;
    Axios.get(url)
      .then(res => {
        setCars(res);
        // console.log("dj", res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [sorting]);













// handlegeCars start .......................
const haldleGetCars = (car) =>{
 const {_id,name,image,model,price,rating,madeIn,available,sell}= car
 
 const allitems = {name,image,model,price,rating,madeIn,object_id:_id,available,sell,email:user?.email}
 console.log("handle",allitems)

    const url = `/getcars`;
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
//---------handleget cars end
const handleSearch = (event) => {
  setSearchQuery(event.target.value);
};

const filteredCars = cars?.filter((car) =>
car.name.toLowerCase().includes(searchQuery.toLowerCase())
);

const lowtoHighhandaler =(taxtab)=>{
  console.log("lowto",taxtab)
  setsorting(taxtab)
}
const hightolowhandler = (taxtab) =>{
  console.log("highto",taxtab)
  setsorting(taxtab)
}
    return (
      <div>
       <div className='flex justify-center mt-5'>
       <span className="dropdown dropdown-bottom">
  <label tabIndex={0} className="btn m-1 bg-yellow-400 text-white hover:bg-yellow-700">click For Sorting</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><span onClick={() => lowtoHighhandaler('lowtohigh')}>Low to High</span></li>
    <li><span onClick={() => hightolowhandler ('hightolow')}>High to Low</span></li>
  </ul>
</span>
       </div>
        <div className=' mt-5 justify-center flex'>
       <span className=' mx-auto'>
       <input
          type='text'
          placeholder='Search by cars name'
          value={searchQuery}
          onChange={handleSearch}
          className={isDarkMode?"px-3 py-2 border rounded-lg text-stone-700":"px-3 py-2 border border-yellow-500 rounded-lg"}
        />
       </span>
    
        </div>
          <div className='flex items-center justify-center'>
          <div key={cars?._id} className='lg:grid md:grid gap-3 lg:grid-cols-3 md:grid-cols-3 mt-4 mb-4 mx-auto'>
         {
            filteredCars?.map(cars => <div key={cars?._id} style={{height: "544px"}} className={isDarkMode?"card text-black" : "card"}>
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

export default AllCars;