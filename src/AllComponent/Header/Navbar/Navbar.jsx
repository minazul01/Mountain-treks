import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../../assets/websitelogo.jpg/"

const Navbar = () => {
    return (
        <div className="navbar bg-gray-100 rounded-2xl my-5 p-5 text-black shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3 text-base font-medium">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/alltrip">All trips</NavLink>
                        <NavLink to="/experience">Experience</NavLink>
                        <NavLink to="/userprofile">User Profile</NavLink>
                    </ul>
                </div>
                <img className='bg-gray-100 hidden md:block' src={Logo} alt="" />
                <a className="text-base md:text-2xl font-normal md:font-bold">Mountain Treks</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-base font-medium">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/alltrip">All trips</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/userprofile">User Profile</NavLink>
                </ul>
            </div>
            <div className="navbar-end text-xl font-medium">
            <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;