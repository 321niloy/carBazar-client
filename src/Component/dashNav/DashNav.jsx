import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Authcontext } from "../../context/AuthProvider"
import profile from "../../../public/image/dashpro.jpeg"
 const DashNav = () =>{
    const {user}= useContext(Authcontext)
  
     
 
    return (
        <div >
             
            <ul className="text-orange-700 lg:p-7 md:p-7 p-4 text-2xl bg-yellow-100 ">
            {user ? 
          <img
            className="rounded-full border-white border-4"
            src={user.photoURL

            }
            alt="User"
          />
    :<img
    className="rounded-full border-white border-4"
    src={profile}
    alt="User"
  />}

  <li className="my-3"><Link className="p-2 rounded-lg text-white bg-orange-500" to="/">Home</Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard">Payment Id</Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/flowchart" >Flow Chart </Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/selactadmin">Selact Admin </Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/addcars">Add cars</Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/dashallcars">Cars Section </Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/feeddelete">Feed Delete</Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/dashtestimonial">Testimonial</Link></li>
                <li className="mt-3 hover:bg-yellow-200 p-1 rounded-xl"><Link to="/dashboard/addtestimonial">Add Testimonial</Link></li>
            </ul>
        </div>
    )
}
export default DashNav