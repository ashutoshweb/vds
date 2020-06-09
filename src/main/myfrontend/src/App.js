import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MithilaCardComponent from './MithilaCardComponent';
import MithilaProductComponent from './MithilaProductComponent';
import MithilaBuyingComponent from "./MithilaBuyingComponent";
import MiAdminComponent from "./MiAdminComponent";
import MiAdminNavComponent from "./MiAdminNavComponent";
import TSVDSMainComponent from "./tsvds/TSVDSMainComponent";

import VdsMainComponent from "./vds/VdsMainComponent";
import  VdsHeaderComponent from "./vds/VdsHeaderComponent"


import VdsAboutUsComponent from "./vds/VdsAboutUsComponent";

class App extends React.Component {







    render(){


        return (


            <div className="App">
                <BrowserRouter>




                    <VdsHeaderComponent/>

                    <Route path="/" exact component = { TSVDSMainComponent}/>

                    <Route path="/contact" exact component = { VdsMainComponent}/>

                    <Route path="/about" exact component = { VdsAboutUsComponent}/>





                </BrowserRouter>



            </div>
        )

    };

}

export default App;
