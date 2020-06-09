import React from 'react'
import {Link} from "react-router-dom";

class TSVDSMainComponent extends React.Component{

    render(){


        return(

            <div className="container mt-5">

                <div className="card-columns ">
                    <div className="card-body">
                        <h4 className="card-title"></h4>
                        <p className="card-text"> </p>

                    </div>
                </div>

                <div id="slider1" className="carousel slide mt-5" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="card text-white carousel-item active">
                            <img className="card-img" src="/images/tsvds/typical-indian-village-1.jpg" alt=""/>
                                <div className="card-img-overlay">
                                    <h4 className="card-title">TSVDS</h4>
                                    <p className="card-text">Village life</p>
                                    <p className="card-text">
                                        <small className="text-muted">Taralahi</small>
                                    </p>
                                </div>
                        </div>

                        <div className="card text-white carousel-item ">
                            <img className="card-img" src="/images/tsvds/typical-indian-village-1.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h4 className="card-title">TSVDS in Kolkata</h4>
                                <p className="card-text">Food distribution during COVID-19, 2020</p>
                                <p className="card-text">
                                    <small className="text-muted">Mar, Kolkata</small>
                                </p>
                            </div>
                        </div>

                        <div className="card text-white carousel-item ">
                            <img className="card-img" src="/images/tsvds/kolkata-corona-20-2.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h4 className="card-title">TSVDS in Kolkata</h4>
                                <p className="card-text">Food distribution during COVID-19, 2020</p>
                                <p className="card-text">
                                    <small className="text-muted">Mar,Kolkata</small>
                                </p>
                            </div>
                        </div>

                        <div className="card text-white carousel-item ">
                            <img className="card-img" src="/images/tsvds/kolkata-corona-20-3.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h4 className="card-title">TSVDS in Kolkata</h4>
                                <p className="card-text">Food distribution during COVID-19, 2020</p>
                                <p className="card-text">
                                    <small className="text-muted">Mar,Kolkata</small>
                                </p>
                            </div>
                        </div>

                        <div className="card text-white carousel-item ">
                            <img className="card-img" src="/images/tsvds/taralahi-09-1.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h4 className="card-title">TSVDS in Taralahi</h4>
                                <p className="card-text">Blanket distribution before onset of winters, 2009</p>
                                <p className="card-text">
                                    <small className="text-muted">Taralahi</small>
                                </p>
                            </div>
                        </div>

                        <div className="card text-white carousel-item ">
                            <img className="card-img" src="/images/tsvds/taralahi-09-2.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h4 className="card-title">TSVDS in Taralahi</h4>
                                <p className="card-text">Blanket distribution before onset of winters, 2009</p>
                                <p className="card-text">
                                    <small className="text-muted">Taralahi</small>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mb-5">

                    <div className="col-sm-8 m-auto">



                            <div className="card text-white  ">
                                <img className="card-img" src="/images/tsvds/kolkata-corona-20-1.jpg" alt=""/>
                                <div className="card-img-overlay">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text">Food distribution during COVID-19 </p>
                                    <p className="card-text">
                                        <small className="text-muted">Mar,2020 Kolkata</small>
                                    </p>
                                </div>
                            </div>



                        <div className="card">
                            <div className="card-header">
                                COVID-19
                            </div>
                            <img className="card-img-top img-fluid" src= "/images/tsvds/taralahi-09-1.jpg" alt=""/>

                            <div className="card-body">
                                <h4 className="card-title"> Kolkata, 2020</h4>
                                <p className="card-text"> Food distribution during COVID-19 </p>


                                <Link to="/products" className="btn btn-success btn-block" href="#">Read more</Link>
                            </div>
                        </div>

                            <div className="card text-white ">
                                <img className="card-img" src="/images/tsvds/kolkata-corona-20-2.jpg" alt=""/>
                                <div className="card-img-overlay">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text">Food distribution during COVID-19</p>
                                    <p className="card-text">
                                        <small className="text-muted">Mar,2020 Kolkata</small>
                                    </p>
                                </div>
                            </div>

                            <div className="card text-white  ">
                                <img className="card-img" src="/images/tsvds/kolkata-corona-20-3.jpg" alt=""/>
                                <div className="card-img-overlay">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text">Food distribution during COVID-19</p>
                                    <p className="card-text">
                                        <small className="text-muted">Mar,2020 Kolkata</small>
                                    </p>
                                </div>
                            </div>

                            <div className="card text-white ">
                                <img className="card-img" src="/images/tsvds/taralahi-09-1.jpg" alt=""/>
                                <div className="card-img-overlay">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text">Blanket distribution before onset of winters </p>
                                    <p className="card-text">
                                        <small className="text-muted">2009, Taralahi</small>
                                    </p>
                                </div>
                            </div>

                            <div className="card text-white ">
                                <img className="card-img" src="/images/tsvds/taralahi-09-2.jpg" alt=""/>
                                <div className="card-img-overlay">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text">Blanket distribution before onset of winters</p>
                                    <p className="card-text">
                                        <small className="text-muted">2009, Taralahi</small>
                                    </p>
                                </div>
                            </div>

                </div>
            </div>

            </div>

        )

    }


};

export default TSVDSMainComponent;