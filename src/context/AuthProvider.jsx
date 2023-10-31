import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { saveUser } from '../utilities/Auth';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const Authcontext = createContext()




const AuthProvider = ({children}) => {
    const [loading,setloading]=useState(true)
    const [user,setuser]=useState(null)

const createusers = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signin = (email,password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () => {
    setloading(true);
    return signOut(auth);
}


const googleSignIn =()=>{
    setloading(true);
    return signInWithPopup(auth, googleProvider);
}

const updateUserProfile= (name, photo) => {
    setloading(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setuser(currentUser);
        saveUser(currentUser)
        console.log('current user', currentUser);



        
    });
    return () => {
        return unsubscribe();
    }
}, [])


    const items = {
        user,
        createusers,
        signin,
        updateUserProfile,
        logOut,
        loading,
        googleSignIn,
        
    }
    return (
        <Authcontext.Provider value={items}>{children}</Authcontext.Provider>
    );
};

export default AuthProvider;