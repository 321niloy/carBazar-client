import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Swal from "sweetalert2";
import Axios from "../Axios";

// photo
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
//--------

const Addcars = () =>{

    const {isDarkMode} = useContext(ThemeContext);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const Handdleaddcars =async (event) =>{
        event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const model = form.model.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const madeIn = form.madeIn.value;
    const available = form.available.value;
    const sell = form.sell.value;

    
    console.log("add check",name,model,price,rating,madeIn,available,sell)
    
    
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
        console.log("for testing now",image)
        const url = '/addcars'
         Axios.post(url,{name,model,price,rating,madeIn,available,sell,image})
         .then(res =>{
            console.log("data posted successfull check",res)
            Swal.fire('Cars successfull Added')
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
       
        <div className="md:ms-52 lg:ms-52 ms-0 mx-auto">
        <h1 className=" text-5xl text-orange-500 my-6 md:ms-8 lg:ms-8">Add Cars</h1>
        <form onSubmit={Handdleaddcars} id="forheight" className="card flex-shrink-0 w-full max-w-sm shadow-yellow-200 shadow-xl lg:w-1/2 h-full">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name="name" type="text" placeholder="Name" className={isDarkMode ? "input input-bordered focus:border-yellow-300 text-black" : "input input-bordered focus:border-yellow-300"} required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Model</span>
              </label>
              <input name="model" placeholder="model" className="textarea textarea-bordered focus:border-yellow-300" required></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input name="price" type="text" placeholder="Position" className="input input-bordered focus:border-yellow-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input name="rating" type="text" placeholder="rating" className="input input-bordered focus:border-yellow-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Made In</span>
              </label>
              <input name="madeIn" type="text" placeholder="madein" className="input input-bordered focus:border-yellow-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available</span>
              </label>
              <input name="available" type="text" placeholder="available" className="input input-bordered focus:border-yellow-300" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sell</span>
              </label>
              <input name="sell" type="text" placeholder="sell" className="input input-bordered focus:border-yellow-300" required />
            </div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Your Image ___</span>
              </label>
              <input id="image-input" type="file" className={isDarkMode ? "file-input file-input-bordered w-full focus:border-yellow-300 text-black" : "file-input file-input-bordered w-full focus:border-yellow-300 text-black"} accept="image/*" />
            </div>
            <div className="form-control mt-6">
              <input className="btn mb-4 bg-yellow-400 text-white hover:bg-gradient-to-r from-yellow-200 via-red-300 to-yellow-200 hover:border-orange-600" type="submit" value="Add Cars" />
            </div>
          </div>
        </form>
      </div></>
    )
}
export default Addcars