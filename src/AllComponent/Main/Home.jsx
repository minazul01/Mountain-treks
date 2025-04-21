import React, { useContext } from 'react';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import PopularCard from './PopularCard';
import { context } from '../MainLayout/MainLayout';
import { Link } from 'react-router-dom';
import Experience from './Experience/Experience';
import AwesomePakage from './AwesomePakage';

const Home = () => {
    // const data = useLoaderData();
  

    const jsonData = useContext(context);
    const data = jsonData.data;
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className='my-20 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold'>Our World Popular Trips.</h1>
                <p className='w-fit md:w-2/3 text-center my-5 text-xl text-gray-500'>Embark on unforgettable journeys with our most loved adventures. From scenic mountain treks to exotic island escapes, these popular trips promise thrill, beauty, and cultural discovery worldwide.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    data.slice(0,3).map(card => <PopularCard key={card.id} data={card}></PopularCard>)
                }
            </div>
             <Link to="/alltrip"><button className='py-1 px-3 bg-pink-400 rounded-md hover:bg-gray-300 cursor-pointer' data={data}>Show All</button></Link>
             <Experience></Experience>
             <AwesomePakage></AwesomePakage>
        </div>
    );
};

export default Home;