import React from 'react';
import Navbar from '../navigation/index.js';
// import Outlet
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    );
};

export default Root;