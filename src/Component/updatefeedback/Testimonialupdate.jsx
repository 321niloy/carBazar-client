import { Form, Link, useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { useContext } from "react";
import Axios from "../Axios";
import Swal from "sweetalert2";
// photo
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
//--------



const Testimonialupdate = () =>{
    const {isDarkMode} = useContext(ThemeContext);
    const testimonial = useLoaderData()
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


const updatenewtestimonial =async (event) =>{
    event.preventDefault()
const form = event.target
const name = form.name.value;
const details = form.details.value;
const position = form.position.value;

console.log("add check",name,details,position)


   
  
// Check if a new image has been selected
const newImageFile = document.getElementById('image-input').files[0];

if (newImageFile) {
  // New image selected, upload and update with the new image
  const formData = new FormData();
  formData.append('image', newImageFile);

  try {
    const imageResponse = await fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    });
const imageResult = await imageResponse.json();

if (imageResult.success) {
  const image = imageResult.data.display_url;

  // Update testimonial with the new image
  const url = `/testimonial/${testimonial._id}`;
  const updatedTestimonial = { name, details, position, image };

  await Axios.put(url, updatedTestimonial);

  console.log('Data updated successfully with new image');
  Swal.fire('Data Updated Successfully');
} else {
  console.error('Image upload failed');
}
} catch (error) {
console.error('Error updating data:', error);
}
} else {
// No new image selected, update only textual information
const url = `/testimonial/${testimonial._id}`;
const updatedTestimonial = { name, details, position };

try {
await Axios.put(url, updatedTestimonial);

console.log('Data updated successfully without new image');
Swal.fire('Data Updated Successfully');
} catch (error) {
console.error('Error updating data:', error);
}
}
}



return(
<div className="md:ms-52 lg:ms-52 mx-auto">
    <h1 className="text-center text-4xl text-orange-600 my-5">Update  Testimonial</h1>
      <form onSubmit={updatenewtestimonial} id="forheight" className="card flex-shrink-0 w-full max-w-sm shadow-yellow-200 shadow-xl lg:w-1/2 h-full">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="Name" className={isDarkMode ? "input input-bordered focus:border-yellow-300 text-black" : "input input-bordered focus:border-yellow-300"} required defaultValue={testimonial?.name} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea name="details" placeholder="Details" className="textarea textarea-bordered focus:border-yellow-300" required defaultValue={testimonial?.details}></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Position</span>
            </label>
            <input name="position" type="text" placeholder="Position" className="input input-bordered focus:border-yellow-300" required  defaultValue={testimonial?.position}/>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Your Image ___</span>
            </label>
            {/* <input id="image-input" type="file" className={isDarkMode ? "file-input file-input-bordered w-full focus:border-yellow-300 text-black" : "file-input file-input-bordered w-full focus:border-yellow-300 text-black"} accept="image/*" defaultValue={testimonial?.image}/> */}
            {testimonial?.image && (
              <img src={testimonial.image} alt="Current Image" className="mb-2 max-w-full" />
            )}
            <input
              id="image-input"
              type="file"
              className={isDarkMode ? "file-input file-input-bordered w-full focus:border-yellow-300 text-black" : "file-input file-input-bordered w-full focus:border-yellow-300 text-black"}
              accept="image/*"
            />
         
         
          </div>
          <div className="form-control mt-6">
            <input className="btn mb-4 bg-yellow-400 text-white hover:bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:border-orange-600" type="submit" value="Add Testimonial" />
          </div>
        </div>
      </form>
    </div>


    )
}
export default Testimonialupdate;
