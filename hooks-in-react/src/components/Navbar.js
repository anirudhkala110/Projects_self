import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleRoute = (Route) => {
        navigate(`/${Route}`)
    }
    return (
        <div>
            <div className='base'></div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navstyle">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b style={{ textTransform: "uppercase", letterSpacing: "2px", wordSpacing: "10px", fontFamily: 'Poppins' }}>Swastik Properties</b></a>
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav right-alinged lg">
                                {/* <a class="nav-link active " aria-current="page" href="#">Home</a> */}
                                <button class="nav-link active mx-2 hovering" onClick={() => { handleRoute("Homepage") }}>Home</button>
                                <button class="nav-link active mx-2 hovering" onClick={() => { handleRoute("Features") }}>Features</button>
                                <button class="nav-link active mx-2 hovering" onClick={() => { handleRoute("Pricing") }}>Pricing</button>
                                <button class="nav-link active mx-2 hovering" onClick={() => { handleRoute("Routes") }}>Routes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar