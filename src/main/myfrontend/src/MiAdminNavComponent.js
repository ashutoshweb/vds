import React from 'react';
import {Link} from 'react-router-dom';


class MiAdminNavComponent extends React.Component{



render(){




    let search = window.location.search;
    let params = new URLSearchParams(search);
    let idparam = params.get('idparam');

    console.log("idparam :",idparam);

    return(

        <div className=" fixed-top mb-5">
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand font-weight-bold font-italic">MiAdmin</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
                            aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse  text-left" id="navbarNav" >
                        <ul className="navbar-nav ml-auto font-weight-bold">
                            <li className="nav-item mr-4">
                                <Link to="/" className="nav-link " >User Id : adas47</Link>
                            </li>
                            <li className="nav-item  mr-4">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item  mr-4">
                                <a className="nav-link" href="#"></a>
                            </li>
                        </ul>


                    </div>
                </div>

            </nav>



        </div>




    )
}




};

    export default MiAdminNavComponent;

