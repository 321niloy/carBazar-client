import { useEffect, useState } from "react";
import Axios from "../Axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

 const Dashtestimonial = () =>{
  const [dashtest,setDashtestimonial] = useState([])

  useEffect(()=>{
    const url = "/testimonial"
    Axios.get(url)
    .then(res =>{
     
      setDashtestimonial(res)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  const deleteit = (id) =>{
     const url = `testimonial/${id}`
     Axios.delete(url)
     .then(res => {
      console.log("delete confirm", res)
      const filterAfterDelete = dashtest.filter(testimonial => testimonial._id !== id);
      setDashtestimonial(filterAfterDelete)
      Swal.fire('Delete Successfully');
     })

     .catch(error =>{
      console.log(error)})
  }
    return (
        <div>
            <h1 className="text-center text-orange-500 text-5xl my-6"> Testimonial </h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
  
        <th>Name</th>
        <th>Details</th>
        <th>Position</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* */}
 {
  dashtest?.map(dash =>      <tr>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={dash.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{dash.name}</div>
         
        </div>
      </div>
    </td>
    <td>
      {dash.details}
    
    </td>
    <td>{dash.position}</td>
    <th className="bg-orange-400 p-2 rounded text-white"><Link to={`/dashboard/updatetestimonial/${dash._id}`} className="">Update</Link></th>
    <th><button onClick={() => deleteit(dash._id)} className="bg-yellow-400 text-white p-3 w-16">Delete</button></th>
  </tr>)
 }
    {/*  */}

    </tbody>
    
  </table>
</div>
        </div>
    )
}
export default Dashtestimonial;