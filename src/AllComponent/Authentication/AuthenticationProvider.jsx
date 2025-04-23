/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from "firebase/auth";
import auth from '../Utilis/Utilis';

export const MyContext = createContext();
const AuthenticationProvider = ({routes}) => {
    // google authProvider create
    const googleProvider = new GoogleAuthProvider;
    // firebase state
    const [user, setUser] = useState(null);

    // private router intial state
    const [loading, setLoading] = useState(true);
    // signIn, signUp, Logout
    const handleRegister = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const handleLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    };
      
    const handleLogout = () => {
        signOut(auth)
    };

    // google signUp, signIn Logout
    const handleGoogleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    };
    // update procile
    const updatePro = (userName, image) =>{
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL:image
        })
    }

    useEffect(() =>{
        const unscribe = onAuthStateChanged(auth, (currenUser) => {
          
            
            if(currenUser){
                setUser(currenUser)
            }else{
                setUser(null)
            }

            setLoading(false)

            return () => {
                unscribe();
            }


        })
    }, []);

    // go to contextValue
    const authenticationValue = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        updatePro,
        user,
        setUser,
        loading
    }
 
    return (
        <div>
            <MyContext.Provider value={authenticationValue}>{routes}</MyContext.Provider>
        </div>
    );
};

export default AuthenticationProvider;