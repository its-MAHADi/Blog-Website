import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();

export const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true);

    const createUser =(email,password,name,photoURL)=>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password).then(
      (result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          const updatedUser = { ...result.user, displayName: name, photoURL };
          setUser(updatedUser);
          return updatedUser;
        });
      }
    );
    }
   
   
    const signIn = (email,password)=>{
           setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
      }
   
   const logOut = ()=>{
    return signOut(auth);
    }

  useEffect(()=>{
   const unRegister= onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser)
         setLoading(false)
         if(currentUser?.email){
            const userData = {email:currentUser.email}
            axios.post('https://blog-server-eight-taupe.vercel.app/jwt',userData,{
                withCredentials:true
            })
            .then(res=>{
                // console.log(res.data)
            })
            .catch(error => console.log(error))
         }
     });
      return ()=>{
            unRegister();
         }

    },[])



const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading
};

  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider
