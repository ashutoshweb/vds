import React from 'react';
import {Link} from 'react-router-dom';


const MithilaNavComponent1 = ()=>{


        return(

            <div className=" fixed-top mb-5">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
                    <div className="container">
                        <Link to="/" className="navbar-brand font-weight-bold font-italic">Mithilawear</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
                                aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse  text-left" id="navbarNav" >
                            <ul className="navbar-nav ml-auto font-weight-bold">
                                <li className="nav-item mr-4">
                                    <Link to="/" className="nav-link " >Saree</Link>
                                </li>
                                <li className="nav-item  mr-4">
                                    <a className="nav-link" href="#">Scarves</a>
                                </li>
                                <li className="nav-item  mr-4">
                                    <a className="nav-link" href="#">Pottery</a>
                                </li>
                            </ul>


                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link " >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span ><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                </nav>



            </div>




        )



};

export default MithilaNavComponent1;

