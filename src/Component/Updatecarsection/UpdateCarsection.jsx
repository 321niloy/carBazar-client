import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeProvider";
import Axios from "../Axios";
import { useLoaderData } from "react-router-dom";

// photo
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
//--------

 const UpdateCarsection = () =>{
    const {isDarkMode} = useContext(ThemeContext);
    const cars = useLoaderData()

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const updatecar =async (event) =>{
      event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const model = form.model.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const madeIn = form.madeIn.value;
    const available = form.available.value;
    const sell = form.sell.value;

    
    console.log("add check update car",name,model,price,rating,madeIn,available,sell)
    
    
       
      
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
      const url = `/allcars/text/${cars._id}`;
      const updatedTecars = { name,model,price,rating,madeIn,available,sell,image};
    
      await Axios.put(url, updatedTecars);
    
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
    const url = `/allcars/text/${cars._id}`;
    const updatedcars = {name, model, price, rating, madeIn, available, sell};
    
    try {
    await Axios.put(url, updatedcars);
    
    console.log('Data updated successfully without new image');
    Swal.fire('Data Updated Successfully');
    } catch (error) {
    console.error('Error updating data:', error);
    }
    }
    }


    return (
        <div className="md:ms-52 lg:ms-52 mx-auto">
        <h1 className="text-center text-4xl text-orange-600 my-5">Update Cars</h1>
          <form onSubmit={updatecar} id="forheight" className="card flex-shrink-0 w-full max-w-sm shadow-yellow-200 shadow-xl lg:w-1/2 h-full">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className={isDarkMode ? "input input-bordered focus:border-yellow-300 text-black" : "input input-bordered focus:border-yellow-300"} required defaultValue={cars?.name} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Model</span>
                </label>
                <textarea name="model" placeholder="model" className="textarea textarea-bordered focus:border-yellow-300" required defaultValue={cars?.model} ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input name="price" type="text" placeholder="Price" className="input input-bordered focus:border-yellow-300" required  defaultValue={cars?.price} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input name="rating" type="text" placeholder="rating" className="input input-bordered focus:border-yellow-300" required  defaultValue={cars?.rating} />
              </div>
              <div className="form-control w-full my-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Made in</span>
                </label>
                <input name="madeIn" type="text" placeholder="Made In" className="input input-bordered focus:border-yellow-300" required  defaultValue={cars?.madeIn} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available</span>
                </label>
                <input name="available" type="text" placeholder="available" className="input input-bordered focus:border-yellow-300" required  defaultValue={cars?.available} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sell</span>
                </label>
                <input name="sell" type="text" placeholder="Sell" className="input input-bordered focus:border-yellow-300" required  defaultValue={cars?.sell} />
              </div>
                <label className="label">
                  <span className="label-text">Your Image ___</span>
                </label>
                {/* <input id="image-input" type="file" className={isDarkMode ? "file-input file-input-bordered w-full focus:border-yellow-300 text-black" : "file-input file-input-bordered w-full focus:border-yellow-300 text-black"} accept="image/*" defaultValue={testimonial?.image}/> */}
                {cars?.image && (
                  <img src={cars.image} alt="Current Image" className="mb-2 max-w-full" />
                )}
                <input
                  id="image-input"
                  type="file"
                  className={isDarkMode ? "file-input file-input-bordered w-full focus:border-yellow-300 text-black" : "file-input file-input-bordered w-full focus:border-yellow-300 text-black"}
                  accept="image/*"
                />
             
             
              </div>
              <div className="form-control mt-6">
                <input className="btn mb-4 bg-yellow-400 text-white hover:bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:border-orange-600" type="submit" value="Update Car" />
              </div>
            </div>
          </form>
        </div>
    )
}
export default UpdateCarsection;