import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "./AuthenticationProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const { handleGoogleLogin, handleLogin } =
    useContext(MyContext);

    const location = useLocation();
    const navigate = useNavigate();

  const [error, setError] = useState("");
  const handleLoging = (e) => {
    e.preventDefault();

    setError("");

    const event = e.target;

    const email = event.email.value;
    const password = event.password.value;

  
    handleLogin(email, password)
      
      handleLogin(email, password)
      .then(() => {
    navigate(location.state.from)
    toast.success("Login successful!", {
      position: "top-center",
    });
  })
  .catch((error) => {
    toast.error(error.message, {
      position: "top-center",
    });
  });
  };

  // google login
  const handleGoogleLoginer = () => {
    handleGoogleLogin()
    .then(() => {
      navigate(location.state.from);
    })
  }


  return (
    <div>
      <Helmet>
        <title>Login-page!</title>
      </Helmet>
      <form action="" onSubmit={handleLoging}>
        <h1 className="text-3xl font-bold text-center my-10">Please Login!</h1>
        <div className="w-full flex justify-center my-16">
          <div className="p-10 bg-gray-200 rounded-lg">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl font-medium">
                What is your Email?
              </legend>
              <input
                type="email"
                name="email"
                className="input w-[250px] md:w-[450px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                placeholder="Email here"
              />
              <legend className="fieldset-legend text-xl font-medium">
                What is your Password?
              </legend>
              <input
                type="password"
                name="password"
                className="input w-[250px] md:w-[450px] h-10 md:h-[60px] text-lg px-4 rounded-2xl"
                placeholder="Password here"
              />
              <legend className="fieldset-legend text-base font-normal hover:underline">
                Forget password?
              </legend>
              {error && (
                <p className="text-base text-red-400">
                  Email or Password ivalid!
                </p>
              )}
              <button className="py-2 px-3 bg-lime-500 rounded-md text-xl font-bold hover:bg-gray-50 cursor-pointer my-5 md:my-10">
                Login
              </button>
              <p className="text-base font-normal text-center">or</p>
              <Link to="/register" className="text-center">
                <button className="text-xl font-medium hover:underline cursor-pointer">
                  Register
                </button>
              </Link>

              <div className="py-2 px-3 bg-gray-400 rounded-md text-xl font-bold hover:bg-gray-50 cursor-pointer my-5 md:my-10">
                <button
                  onClick={handleGoogleLoginer}
                  className="flex items-center gap-5 md:gap-24"
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
