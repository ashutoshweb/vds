import React from 'react';
import {Link} from 'react-router-dom';


const TSVDSNavHeaderComponent = ()=>{


    return(

        <div className=" fixed-top mb-5 ">
            <nav className="navbar navbar-expand-sm navbar-dark bg-white mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand font-weight-bold font-italic">TSVDS</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
                            aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse  text-left" id="navbarNav" >


                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link " >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Photo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>



        </div>




    )



};

export default TSVDSNavHeaderComponent;

