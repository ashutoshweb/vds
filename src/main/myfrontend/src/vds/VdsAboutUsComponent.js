import React from "react";
import VdsHeading from "./VdsHeading";
import VdsFooter from "./VdsFooter";

const VdsAboutUsComponent = ()=>{

    return(

        <div>
        <VdsHeading/>
            <section id="about" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>What We Do</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet,
                                assumenda aliquid tempore dolorum
                                error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam
                                accusantium pariatur aut sint deleniti
                                laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate
                                dicta blanditiis similique
                                praesentium temporibus adipisci debitis labore!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet,
                                assumenda aliquid tempore dolorum
                                error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam
                                accusantium pariatur aut sint deleniti
                                laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate
                                dicta blanditiis similique
                                praesentium temporibus adipisci debitis labore!</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://source.unsplash.com/random/700x700/?technology" alt=""
                                 className="img-fluid rounded-circle d-none d-md-block about-img"/>
                        </div>
                    </div>
                </div>
            </section>

            <VdsFooter/>
        </div>
    )


};

export default VdsAboutUsComponent;