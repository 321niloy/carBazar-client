export const saveUser = user =>{
    const currentuser = {
        name:user.displayName,
        email:user.email,
        photo:user.photoURL
    }


    fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(currentuser),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}


export const becomeaAdmin = email =>{
    const currentuser = {
        role:'admin'
    }


    fetch(`https://cars-bazar-server-hbpv37fkw-321niloy.vercel.app/users/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(currentuser),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}
