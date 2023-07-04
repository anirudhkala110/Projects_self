import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const handleRoute = (Route) => {
        navigate(`/${Route}`)
    }
    return (
        <>
            <div>
                <div className='container-fluid m-auto w-100 p-3 nvi' >
                    <div className='container-fluid d-flex align-items-center  justify-content-end'>
                        <button className='btn btn-primary mx-1 rounded-0 routers' >About</button>
                        <button className='btn btn-primary mx-1 rounded-0 routers' >Home</button>
                        <button className='btn btn-primary mx-1 rounded-0 routers' >Services</button>
                        <button className='btn btn-primary mx-1 rounded-0 routers' >Categories</button>
                        <button className='btn btn-primary mx-1 rounded-0 routers' >Filter</button>
                        <button className='btn btn-primary mx-1 rounded-0 routers' >Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage