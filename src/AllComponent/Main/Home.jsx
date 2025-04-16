import React from 'react';
import HeaderMain from '../Header/HeaderMain/HeaderMain';

const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className='my-20 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold'>Our World Popular Trips.</h1>
                <p className='w-fit md:w-2/3 text-center my-5 text-xl text-gray-500'>Embark on unforgettable journeys with our most loved adventures. From scenic mountain treks to exotic island escapes, these popular trips promise thrill, beauty, and cultural discovery worldwide.</p>
            </div>
        </div>
    );
};

export default Home;