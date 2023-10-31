import Swal from "sweetalert2";
import Axios from "../Component/Axios";
export const becomeaAdmin = email =>{
    const currentuser = {
        role:'admin'
    }


   const url = `/users/${email}`
   Axios.put(url,currentuser)
   .then(res =>{
    Swal.fire('Admin create Successfully');
   })
   .catch(error =>{
    console.log(error)
   })
}



// export const becomeaAdmin = email =>{
//     const currentuser = {
//         role:'admin'
//     }


//     fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/users/${email}`,{
//         method:'PUT',
//         headers:{
//             'content-type':'application/json'
//         },
//         body: JSON.stringify(currentuser),
//     })
//     .then(res =>{
//         res.json()
//         Swal.fire('Admin create Successfully');
//     } )
//     .then(data =>{
//         console.log(data)
//     })
// }

