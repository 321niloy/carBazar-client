
import "./testimonial.css";
import frist  from "../../../public/image/GOOGLE.png"
import { useEffect } from "react";
import Axios from "../Axios"
import { useState } from "react";



const Testimonial = () => {
	const [testimonial,settestimonial] = useState([])

	useEffect(()=>{
		const url = "/testimonial"
		Axios.get(url)
		.then(res=>{ settestimonial(res)})
		.catch(error=>{
           console.log(error)
		}) 

		console.log("for testing",testimonial)
	},[])


	return (
		<div className="mt-20">
		  <h2 className="text-center pb-3 lg:pb-6 text-2xl md:text-4xl lg:max-w-4xl font-bold mx-auto">
			<span className="text-orange-500">Testimonial</span>
		  </h2>
	  
		  <div className="bannersetup bg-fixed h-fit w-full py-3">
			<div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1">
			  {testimonial?.map((tes, index) => (
				<div key={index} className="pt-2 lg:pt-0 w-[70%] mx-auto">
				  <div className="triangle absolute inset-0 text-center z-10">
					<h1 className="relative z-20 text-black">
					  Name: {tes.name}
					</h1>
					<p className="text-white">Details:{tes.details}</p>
					<h1>Position:{tes.position}</h1>
				  </div>
				  <div className="flex justify-center items-center">
					<img
					  className="w-14 h-14 rounded-full border-4 border-orange-400"
					  src={tes.image}
					  alt="img"
					/>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</div>
	  )
			  };
	  

export default Testimonial;
