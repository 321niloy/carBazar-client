import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/ReuseProvider";
import { Rating } from "@smastrom/react-rating";


const Customerfeedback = () =>{

    const {feedback} = useContext(AuthContext)
    
    console.log("last cheak feedback",feedback)
   
    
    return(
        <div>
            <h1 className="text-center text-orange-500 text-4xl">Customers Feedback</h1>
           <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 gap-5">
           {
                feedback?.map(feed=><div className="p-10 shadow-xl shadow-orange-100">
                <div >
                  <h2 className="mt-2" ><span    className="font-bold">Name:</span>{feed.name}</h2>
                  <p  className="mt-2" ><span    className="font-bold">email:</span>{feed.email}</p>
                  <p  className="mt-2" ><span    className="font-bold">feedback:</span>{feed.feedback}</p>
                  <p className="mt-2 flex"><span className="font-bold">Rating:</span> <Rating  style={{maxWidth:80}} value={feed.rating} readOnly></Rating></p>
                </div>
              </div>)
            }
           </div>
        </div>
    )
}
export default Customerfeedback;