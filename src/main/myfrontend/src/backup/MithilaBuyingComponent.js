import React from 'react';
import UserReceipt from "./UserReceipt";
import UserContactForm from "./UserContactForm";
import UserShippingAddress from "./UserShippingAddress";

const MithilaBuyingComponent = props =>{

    return(
        <div className="container mt-5 ">

            <div className="card-columns ">
                <div className="card-body">
                    <h4 className="card-title"></h4>
                    <p className="card-text"> </p>

                </div>
            </div>
                <div id="accordion mb-5">

                    <UserContactForm/>
                    <UserShippingAddress/>

                    <UserReceipt/>


                </div>
        </div>
    );
}

export default MithilaBuyingComponent;