import React from "react";
import VdsFooter from "./VdsFooter";

const VdsContactComponent = ()=>{


    const style = {

        position: "fixed",
        zIndex : 5,

    };
    return (

        <div>

            <header id="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <h1>Contact Us</h1>

                        </div>
                    </div>
                </div>
            </header>


            {/*<section id="contact" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h4>Get In Touch</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio!</p>
                                    <h4>Address</h4>
                                    <p>550 Main st, Boston MA</p>
                                    <h4>Email</h4>
                                    <p>test@test.com</p>
                                    <h4>Phone</h4>
                                    <p>(555) 555-5555</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h3 className="text-center">Please fill out this form to contact us</h3>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Phone Number"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="submit" value="Submit"
                                                           className="btn btn-outline-danger btn-block"/>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}


            <section /*id="background-contact"*/ class="bg-light py-5">

            <div class="container">
                <div class="row">

                    <div className="col-md-4" >
                        <div className="card p-4">
                            <div className="card-body ">
                                <h4>Get In Touch</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio!</p>
                                <h4>Address</h4>
                                <p>3087,Kolkata -85032</p>
                                <h4>Email</h4>
                                <p>test@test.com</p>
                                <h4>Phone</h4>
                                <p>(555) 555-5555</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card p-4 ">
                            <div className="card-body">
                            <h3 className="text-center">Please fill out this form to contact us</h3>
                            </div>


                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Name"/>
                            </div>

                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Email"/>
                            </div>

                            <div className="input-group input-group-lg mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Phone"/>
                            </div>

                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                         <i class="fas fa-pencil-alt"></i>
                                    </span>
                                </div>
                                <textarea class="form-control" placeholder="Message" rows="5"></textarea>
                            </div>

                            <div>
                            <input type="submit" value="Submit" class="btn btn-primary btn-block btn-lg"/>
                            </div>


                    </div>

                    <div class="col-lg-3 align-self-center">
                        <img src="img/mlogo.png" alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>
            </div>

        </section>





            <section id="authors" className="my-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="info-header mb-5">
                                <h1 className="text-primary pb-3">
                                    Meet The Members
                                </h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam
                                    aperiam dolores a porro!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/vds/Ma-1.jpg" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Radha Rani Das</h3>
                                        <h5 className="text-muted">Founder</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum,
                                            ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/vds/ArnabJeejaji-1.jpg" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Arnab Das</h3>
                                        <h5 className="text-muted">Founder</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum,
                                            ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/vds/BinduDidi-1.jpg" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Bindu Das</h3>
                                        <h5 className="text-muted">Treasurer</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum,
                                            ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


             <VdsFooter/>




        </div>


    )
};

export default VdsContactComponent;