import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MyContext } from "./AuthenticationProvider";

const Register = () => {
  const { handleGoogleLogin, handleRegister } =
    useContext(MyContext);

    const handleClick = (e) => {
      e.preventDefault();

      const event = e.target;
      const userName = event.name.value;
      const email = event.email.value;
      const password = event.password.value;
      const conPassword = event.conPassword.value;
    
      console.log(userName, email, password, conPassword);
      handleRegister(email, password)
    };
  
    

  return (
    <div>
      <form action="" onSubmit={handleClick}>
        <h1 className="text-4xl font-bold text-center my-10">
          Please Registe Now!
        </h1>
        <div>
          <div className="hero min-h-screen my-10">
            <div className="text-center lg:text-left"></div>
            <div className="  shadow-2xl">
              <div className="p-10 bg-gray-300 rounded-lg w-full">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-base font-medium text-gray-500">
                    User name?
                  </legend>
                  <input
                    type="text"
                    name="name"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="name"
                  />
                  <label className="label text-base font-medium text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="email"
                  />
                  <label className="label text-base font-medium text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="password"
                  />
                  <label className="label text-base font-medium text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    name="conPassword"
                    className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                    placeholder="conPassword"
                  />
                  <button className="btn btn-neutral mt-4 hover:bg-gray-50">
                    Register Now
                  </button>
                  <p className="text-base font-normal text-center">or</p>
                  <Link to="/login" className="text-center">
                    <button className="text-xl font-medium hover:underline cursor-pointer">
                      Login
                    </button>
                  </Link>
                  <div className="py-2 px-3 bg-gray-400 rounded-md text-xl font-bold hover:bg-gray-50 my-5 md:my-10">
                    <button
                      onClick={handleGoogleLogin}
                      className="flex items-center gap-5 md:gap-64"
                    >
                      <span className="text-orange-300">
                        <FcGoogle></FcGoogle>
                      </span>
                      <span className="cursor-pointer">Login with google</span>
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
