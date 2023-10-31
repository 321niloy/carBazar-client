import React, { useContext } from 'react';
import { Authcontext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(Authcontext)
    const location = useLocation();
    console.log(location)
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;