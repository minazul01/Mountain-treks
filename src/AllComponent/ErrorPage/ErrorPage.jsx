import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col items-center justify-center my-20'>
            <h1 className='text-2xl font-bold'>Unexpected Application Error!</h1>
            <h2 className='text-xl font-medium'>404 Not Found</h2>
            {error && <p className='text-xs mx-5 font-medium'>{error.error.stack}</p>}
            <h1 className='text-xl font-medium'>{error.data}</h1>
            <Link to="/"><button className='my-8 bg-lime-300 py-1 px-3 border-2 rounded-2xl hover:bg-pink-400'>Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;