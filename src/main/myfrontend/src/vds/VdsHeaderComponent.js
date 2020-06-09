import React from "react";
import {Link} from "react-router-dom";

const VdsHeaderComponent = () =>{

    return(


       /* <div id="home" data-spy="scroll" data-target="#main-nav">
            <nav className="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
                <div className="container">
                    <a href="#home" className="navbar-brand">
                        <img src="img/mlogo.png" width="50" height="50" alt=""/>
                            <h3 className="d-inline align-middle">Mizuxe</h3>

                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#authors" className="nav-link">Meet The Authors</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>*/

    <div className=" fixed-top mb-5 ">
        <nav className="navbar navbar-expand-sm navbar-light bg-white mb-3 ">
            <div className="container">
                <Link to="/" className="navbar-brand font-weight-bold font-italic ">TSVDS</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
                        aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse  text-left" id="navbarNav" >


                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-primary" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>



    </div>
    )


};

        export default VdsHeaderComponent;



