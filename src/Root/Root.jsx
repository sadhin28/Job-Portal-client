import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        // bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white h-[100vh]
        <div className=''>
             <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                 <Outlet></Outlet>
            </div>
            <h1>Footer</h1>
        </div>
    );
};

export default Root;