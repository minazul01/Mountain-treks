import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/websitelogo.jpg/";
import { useContext } from "react";
import { MyContext } from "../../Authentication/AuthenticationProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(MyContext);

  return (
    <div className="navbar bg-gray-100 rounded-2xl my-5 p-5 text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3 text-base font-medium"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/alltrip">All trips</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/userprofile">User Profile</NavLink>
          </ul>
        </div>
        <img className="bg-gray-100 hidden md:block" src={Logo} alt="" />
        <a className="text-base md:text-2xl font-normal md:font-bold">
          Mountain Treks
        </a>
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
        {user?.email ? (
          <div className="flex items-center gap-2">
            <img
              className="w-10 md:w-20 rounded-full cursor-grab"
              src={user.photoURL}
              alt=""
            />
            <button
              className="p-2 bg-lime-400 rounded-md cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="p-2 rounded-md bg-lime-300 cursor-pointer">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
