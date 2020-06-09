import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MithilaNavComponent from './MithilaNavComponent';
import MithilaCardComponent from './MithilaCardComponent';
import MithilaProductComponent from './MithilaProductComponent';
import MithilaBuyingComponent from "./MithilaBuyingComponent";
import MiAdminComponent from "./MiAdminComponent";
import MiAdminNavComponent from "./MiAdminNavComponent";
import TSVDSMainComponent from "./tsvds/TSVDSMainComponent";

class App extends React.Component {







    render(){


        return (


            <div className="App">
                <BrowserRouter>
                    <MithilaNavComponent/>

                    <Route path="/miadmin" exact component ={MiAdminComponent} />
                    <Route path="/admin" exact component ={MiAdminComponent} />
                    <Route path="/products/:id" component = {MithilaProductComponent }/>
                    <Route path="/order" component = { MithilaBuyingComponent}/>
                    <Route path="/mithilaproduct" component = { MithilaCardComponent}/>
                    <Route path="/" component = { TSVDSMainComponent}/>

                </BrowserRouter>



            </div>
        )

    };

}

export default App;
