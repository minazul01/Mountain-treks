import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../../assets/websitelogo.jpg/"

const Navbar = () => {
    return (
        <div className='flex justify-between m-3 p-2 bg-[#162556] rounded-3xl text-white'>
            <div className='flex justify-center items-center'>
                <div><img className='p-1 rounded-full'  src={Logo} alt="logo" /></div>
                <h1 className='text-3xl font-bold'>Mountain Treks</h1>
            </div>
            <div className='space-x-7 flex items-center text-xl font-normal'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/updateprofile">Update Profile</NavLink>
                <NavLink to="/userprofile">User Profile</NavLink>
            </div>
            <div className='flex items-center text-2xl font-medium'>
                <h3>Login</h3>
            </div>
        </div>
    );
};

export default Navbar;