import { Form, Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { useContext } from "react";
import Axios from "../Axios";
import Swal from "sweetalert2";
// photo
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
//--------



const Addtestimonial = () =>{
    const {isDarkMode} = useContext(ThemeContext);
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


const addnewtestimonial =async (event) =>{
    event.preventDefault()
const form = event.target
const name = form.name.value;
const details = form.details.value;
const position = form.position.value;

console.log("add check",name,details,position)


    //============= photo
    const formData = new FormData();
    const imageFile = document.getElementById('image-input').files[0];
    formData.append('image',imageFile)
    fetch(img_hosting_url,{
        method:'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imageres => {
      
    if(imageres.success){
    const image = imageres.data.display_url;
    console.log("for testing now",image,name,details,position)
    const url = '/testimonial'
     Axios.post(url,{name,details,position,image})
     .then(res =>{
        console.log("data posted successfull check",res)
        Swal.fire('Data Posted Successfull')
     })
     .catch(error =>{
        console.log(error)
     })
          // ----------------------
        }
      })  // ================ end photo
  

}



return(
<>
<h1 className="text-center text-5xl text-orange-500 my-7">Add Testimonial Data</h1>
<div className="md:ms-52 lg:ms-52 mx-auto">
      <form onSubmit={addnewtestimonial} id="forheight" className="card flex-shrink-0 w-full max-w-sm shadow-yellow-200 shadow-xl lg:w-1/2 h-full">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="Name" className={isDarkMode ? "input input-bordered focus:border-yellow-300 text-black" : "input input-bordered focus:border-yellow-300"} required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea name="details" placeholder="Details" className="textarea textarea-bordered focus:border-yellow-300" required></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <input name="position" type="text" placeholder="Position" className="input input-bordered focus:border-yellow-300" required />
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Your Image ___</span>
            </label>
            <input id="image-input" type="file" className={isDarkMode ? "file-input file-input-bordered w-full focus:border-yellow-300 text-black" : "file-input file-input-bordered w-full focus:border-yellow-300 text-black"} accept="image/*" />
          </div>
          <div className="form-control mt-6">
            <input className="btn mb-4 bg-yellow-400 text-white hover:bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:border-orange-600" type="submit" value="Add Testimonial" />
          </div>
        </div>
      </form>
    </div>
</>


    )
}
export default Addtestimonial;
