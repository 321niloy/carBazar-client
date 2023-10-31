import { useEffect, useState } from "react";
import Axios from "../Axios";
import { becomeaAdmin } from "../../api/auth";
import Swal from "sweetalert2";

 const SelactAdmin = () =>{
 const [users ,setusers] = useState([])

 useEffect(() =>{
 const url = `/users`
 Axios.get(url)
 .then(res =>{
    setusers(res)
    console.log(res)
 })
 .catch(error =>{
    console.log(error)
 })
 },[users])

 const deleteit = (id) =>{
    console.log("classical", id)
    const url = `/users/${id}`
    Axios.delete(url)
    .then(res =>{
        console.log("delete successfull",res)
        const filterAfterDelete = users.filter(user => user._id !== id);
        setusers(filterAfterDelete)
        Swal.fire('Delete Successfully');
    })
    .catch(error =>{
        console.log(error)
    })
 }

 const clicknaddmin = (email) =>{
    becomeaAdmin(email)
    
 }
    return (
        <>
            <h1  className="text-center text-5xl text-orange-500">Selact Admin</h1>
            <div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr>

    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    <th></th>
    <th></th>
  </tr>
</thead>
<tbody>
  {/* */}
{
users?.map(user =>      <tr>
<td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold">{user.name}</div>
     
    </div>
  </div>
</td>
<td>
  {user.email}

</td>
<td>
  {
    user.role?user.role:"user"
  }

</td>
<button className="bg-orange-500 text-white p-3 w-16" onClick={()=> clicknaddmin(user.email)}>Admin</button>
<button onClick={() => deleteit(user._id)} className="bg-yellow-400 text-white p-3 w-16">Delete</button>
</tr>)
}
{/*  */}

</tbody>

</table>
</div>
        </>
    )
}
export default SelactAdmin;