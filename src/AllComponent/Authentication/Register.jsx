import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Please Registe Now!</h1>
            <div>
                <div className="hero min-h-screen">

                    <div className="text-center lg:text-left">
                    </div>
                    <div className="  shadow-2xl">
                        <div className="p-10 bg-gray-300 rounded-lg w-full">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-base font-medium text-gray-500">User name?</legend>
                                <input type="text" className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4 rounded-2xl" placeholder="User name" />
                                <legend className="fieldset-legend text-base font-medium text-gray-500">your name?</legend>
                                <input type="text" className="input  w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4" placeholder="Your name" />
                                <label className="label text-base font-medium text-gray-500">Email</label>
                                <input type="email" className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4" placeholder="Email" />
                                <label className="label text-base font-medium text-gray-500">Password</label>
                                <input type="password" className="input w-[250px] md:w-[750px] h-10 md:h-[60px] text-lg px-4" placeholder="Password" />
                                <button className="btn btn-neutral mt-4 hover:bg-gray-50">Register Now</button>
                                <p className='text-base font-normal text-center'>or</p>
                                <Link to="/login" className='text-center'><button className='text-xl font-medium hover:underline cursor-pointer'>Login</button></Link>
                            </fieldset>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;