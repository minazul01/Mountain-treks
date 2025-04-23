import React, { useContext } from 'react';
import { MyContext } from './AuthenticationProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FiLoader } from "react-icons/fi";

const Private = ({children}) => {
    const {user, loading} = useContext(MyContext);

    const location = useLocation();
 
    if(loading){
        return <FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" />
    }
    if(!user){
       return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
    }else{
        return children;
    }
   
};

export default Private;