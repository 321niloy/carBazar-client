import { useEffect } from "react";
import { useState } from "react";
import Axios from "../Axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Dashallcars = () =>{
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

  const deleteit = (id) =>{
    const url = `/allcars/text/${id}`
    Axios.delete(url)
    .then(res => {
     console.log("delete confirm", res)
     
     const filterAfterDelete = cars.filter(car => car._id !== id);
     setCars(filterAfterDelete)
     Swal.fire('Delete Successfully');
    })

    .catch(error =>{
     console.log(error)})
  }
    return(
        <div>
        <h1 className="text-center text-orange-600 text-5xl my-5"> Cars delete and Update</h1>
        <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr>

    <th>Name</th>
    <th>Model</th>
    <th>Price</th>
    <th>Rating</th>
    <th></th>
    <th></th>
  </tr>
</thead>
<tbody>
  {/* */}
{
cars?.map(car =>      <tr>
<td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={car.image} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{car.name}</div>
     
    </div>
  </div>
</td>
<td>
  {car.model}

</td>
<td>{car.price}</td>
<td>{car.rating}</td>
<th className="bg-orange-400 p-2 rounded text-white"><Link to={`/dashboard/Updatecars/${car._id}`} className="">Update</Link></th>
<th><button onClick={() => deleteit(car._id)} className="bg-yellow-400 text-white p-3 w-16">Delete</button></th>
</tr>)
}
{/*  */}

</tbody>

</table>
</div>
    </div>
    )
}
export default Dashallcars;