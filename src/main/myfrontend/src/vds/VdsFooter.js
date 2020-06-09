import React from "react";

const VdsFooter = ()=>{


    return(

        <div>

            <footer id="main-footer" className="text-center p-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>Copyright &copy;
                                <span id="year"></span> VDS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default VdsFooter;