import React from "react";

const TsvdsPaymentComponent = () =>{

    const style = {

        position: "fixed",
        zIndex : 5,

    };
    return(


        <div className="mt-1">

            <div className='pm-button 'style={style}><a
                href='https://www.payumoney.com/paybypayumoney/#/CF7B38C6D7843A0CCAB99953FAB77C22'>
                <button className="btn btn-success btn-lg" type="button">Donate Now</button></a></div>

        </div>
    )


};

export default TsvdsPaymentComponent;