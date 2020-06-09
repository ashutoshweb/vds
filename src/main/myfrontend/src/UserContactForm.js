import React from 'react';

const UserContactForm = props =>{
    return(

        <div className="card">
            <div className="card-header">
                <h5>
                    <a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
                        Contact Information
                    </a>
                </h5>
            </div>

            <div id="collapse1" className="collapse show">
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"/>
                            </div>

                        </div>
                        <br/>
                        <div className="form-row">

                            <input className="form-control form-control" type="email" id="email"
                                   placeholder="Enter email"/>
                            <small className="form-text text-muted">Your email will not  be shared</small>


                        </div>
                        <br/>
                        <div className="form-row">


                            <input className="form-control " type="text" id="phone"
                                   placeholder="Enter phone"/>
                            <small className="form-text text-muted">Your phone will not be shared</small>

                        </div>
                        <br/>
                        <button className="btn btn-primary btn-block" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>

    )

};

export default UserContactForm;