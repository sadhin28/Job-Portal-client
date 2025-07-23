import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        // bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white h-[100vh]
        <div className=''>
             <Navbar></Navbar>
            <div className='max-w-7xl mx-auto min-h-[calc(100vh-417px)]'>
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;