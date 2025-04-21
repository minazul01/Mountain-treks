import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Please Login!</h1>
            <div className='w-full flex justify-center my-16'>
                <div className='p-10 bg-gray-200 rounded-lg'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-medium">What is your Email?</legend>
                        <input type="text" className="input w-[250px] md:w-[450px] h-10 md:h-[60px] text-lg px-4" placeholder="Email here" />
                        <legend className="fieldset-legend text-xl font-medium">What is your Password?</legend>
                        <input type="text" className="input w-[250px] md:w-[450px] h-10 md:h-[60px] text-lg px-4" placeholder="Password here" />
                        <legend className="fieldset-legend text-base font-normal hover:underline">Forget password?</legend>
                        <button className='py-2 px-3 bg-lime-500 rounded-md text-xl font-bold hover:bg-gray-50 cursor-pointer my-5 md:my-10'>Login</button>
                        <p className='text-base font-normal text-center'>or</p>
                        <Link to="/register" className='text-center'><button className='text-xl font-medium hover:underline cursor-pointer'>Register</button></Link>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;