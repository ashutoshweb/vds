import React from 'react';

const UserReceipt = props =>{
    return(

        <div className="card mb-5 ">
            <div className="card-header">
                <h5>
                    <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                        Order Summary
                    </a>
                </h5>
            </div>

            <div id="collapse3" className="collapse ">
                <div className="card h-100 ">

                    <div className="card-body ">
                        <div className="card-text d-inline-block"> Code : #{props.itemCode}</div>
                        <div className="card-text d-inline-block"> Amount : 1 </div>
                        <div className="card-text d-inline-block"> Price : Rs 5000 </div>

                    </div>
                </div>
                <div className="card h-100 ">

                    <div className="card-body">
                        <div className="card-text d-inline-block"> Product : #{props.itemCode}</div>
                        <div className="card-text d-inline-block"> Amount : 1 </div>
                        <div className="card-text d-inline-block"> Price : Rs 5000 </div>

                    </div>
                </div>

                <button className="btn btn-primary btn-block" type="submit">Order</button>
                <br/>
            </div>

        </div>

    )

};

export default UserReceipt;