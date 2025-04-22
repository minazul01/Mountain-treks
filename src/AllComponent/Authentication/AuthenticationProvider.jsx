/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Utilis/Utilis';

export const MyContext = createContext();
const AuthenticationProvider = ({routes}) => {
    // google authProvider create
    const googleProvider = new GoogleAuthProvider;

    const [user, setUser] = useState(null);

    // signIn, signUp, Logout
    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    };
      
    const handleLogout = () => {
        signOut(auth)
    };

    // google signUp, signIn Logout
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    };

    useEffect(() =>{
        const unscribe = onAuthStateChanged(auth, (currenUser) => {
          
            console.log(currenUser)

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
    }
 
    return (
        <div>
            <MyContext.Provider value={authenticationValue}>{routes}</MyContext.Provider>
        </div>
    );
};

export default AuthenticationProvider;