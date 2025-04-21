import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';



export const context = createContext();
const MainLayout = () => {
    const data = useLoaderData();



    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <context.Provider value={{ data }}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </context.Provider>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayout;