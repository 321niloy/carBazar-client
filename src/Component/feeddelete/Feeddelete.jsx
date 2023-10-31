import { useContext } from "react";
import { AuthContext } from "../../context/ReuseProvider";
import { Rating } from "@smastrom/react-rating";
import Axios from "../Axios";
import Swal from "sweetalert2";


 const Feeddelete = () =>{
    const {feedback} = useContext(AuthContext);




    const handledelete = (id) =>{
     const url = `feeddelete/${id}`
     Axios.delete(url)
     .then(res =>{
        console.log(res)
        Swal.fire('Delete Successfull')

     })
     .catch(error =>{
        console.log("catch error", error)
     })
    }




    return (
        <div>
              <h1 className="text-center text-orange-500 text-4xl">Delate Feedback</h1>
           <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-5">
           {
                feedback?.map(feed=><div className="p-10 shadow-xl shadow-orange-100">
                <div >
                  <h2 className="mt-2" ><span    className="font-bold">Name:</span>{feed.name}</h2>
                  <p  className="mt-2" ><span    className="font-bold">email:</span>{feed.email}</p>
                  <p  className="mt-2" ><span    className="font-bold">feedback:</span>{feed.feedback}</p>
                  <p className="mt-2 flex"><span className="font-bold">Rating:</span> <Rating  style={{maxWidth:80}} value={feed.rating} readOnly></Rating></p>
                  <button className="bg-yellow-400 w-20 text-white p-3 rounded-xl" onClick={() => handledelete(feed._id)}>Delete</button>
                </div>
              </div>)
            }
           </div>
        </div>
    )
}

export default Feeddelete;