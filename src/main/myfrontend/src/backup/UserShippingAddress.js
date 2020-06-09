import React from 'react';

const UserShippingAddress = props =>{
    return(

        <div className="card">
            <div className="card-header">
                <h5>
                    <a href="#collapse2" data-parent="#accordion" data-toggle="collapse">
                        Address Information
                    </a>
                </h5>
            </div>

            <div id="collapse2" className="collapse ">
                <div className="card-body">
                    <form>


                        <div className="form-row">

                            <input className="form-control " type="text"
                                   placeholder="Address Line 1"/>



                        </div>
                        <br/>
                        <div className="form-row">


                            <input className="form-control " type="text"
                                   placeholder="Address Line 2"/>


                        </div>
                        <br/>

                        <div className="form-row">
                            <div className="col">


                                <select className="form-control" id="sel1" name="sellist1">
                                    <option selected>City</option>
                                    <option>Patna</option>
                                    <option>Indore</option>
                                    <option>Mumbai</option>
                                </select>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Zip Code"/>


                            </div>

                        </div>
                        <br/>

                        <div className="form-row">
                            <div className="col">


                                <select className="form-control" id="sel1" name="sellist1">
                                    <option selected>State</option>
                                    <option>Bihar</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                            <div className="col">



                                <select className="form-control" id="sel1" name="sellist1">
                                    <option selected>Country</option>
                                    <option>India</option>
                                    <option>Nepal</option>
                                    <option>United States Of America</option>
                                </select>
                            </div>



                        </div>
                        <br/>
                        <button className="btn btn-primary btn-block" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>

    )

};

export default UserShippingAddress;