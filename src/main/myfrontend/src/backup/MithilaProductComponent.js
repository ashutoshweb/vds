import React from 'react';

import {Link} from 'react-router-dom';

class MithilaProductComponent extends React.Component{

    state ={

        product:{"id": "1",
            "image" : "https://source.unsplash.com/random/300x200",
            "name": "Product 1",
            "title":"title 1",
            "alt_description" : "xyz",
            "urls":{
                "small" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                "regular" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            },
            "user" :{
                "name" : ""
            }
        },

        product_single : {

            "product_id": "",
            "product_name" : " ",
            "image_name" : " ",
            "image_url" : " ",
            "image_url_detail" : " ",
            "image_dimension" : " ",
            "product_type" : " ",
            "product_category" : " ",
            "product_price" : " ",
            "product_description" : " ",
            "product_created_by" : " ",
            "product_status" : " ",
            "Timestamp product_load_time" : "  "
        }
    };



    componentDidMount() {

const productid = this.props.match.params.id;
        fetch(`/api/v2/products/${productid}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("product in Prod Component ",result)
                    this.setState({

                        product_single: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error ",error)
                    this.setState({

                        product_single : {

                            "product_id": "",
                            "product_name" : " ",
                            "image_name" : " ",
                            "image_url" : " ",
                            "image_url_detail" : " ",
                            "image_dimension" : " ",
                            "product_type" : " ",
                            "product_category" : " ",
                            "product_price" : " ",
                            "product_description" : " ",
                            "product_created_by" : " ",
                            "product_status" : " ",
                            "Timestamp product_load_time" : "  "
                        }
                    });
                }
            )
    }



    render() {

let product = this.state.product_single;







        console.log("product =",product);

        return(

            <div className="container mt-5 ">

                <div className="card-columns ">
                    <div className="card-body">
                        <h4 className="card-title"></h4>
                        <p className="card-text"> </p>

                    </div>
                </div>

                <div className="row  mb-5" >
                    <div className="col-md-8 "  >
                        <div id="slider3" className="carousel slide mb-5" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li className="active" data-target="#slider3" data-slide-to="0"></li>
                                <li data-target="#slider3" data-slide-to="1"></li>
                                <li data-target="#slider3" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid" src={product.image_url_detail}
                                         aria-label={product.product_name}/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src={product.image_url_detail}
                                         aria-label={product.product_name}/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src={product.image_url_detail}
                                         aria-label={product.product_name}/>
                                </div>
                            </div>


                            <a href="#slider3" className="carousel-control-prev" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>

                            <a href="#slider3" className="carousel-control-next" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                        <div className="  mb-5">


                            <form>
                                <div className=" row ">

                                    <div className=" col-sm-6 mb-2">
                                        <Link to ="/order">
                                            <button className=" btn btn-outline-primary  w-auto" type="submit">Add to Cart</button>
                                        </Link>
                                        <select className="form-control w-25 d-inline" id="sel1" name="sellist1">
                                            <option selected>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    <div className=" col-sm-2">
                                    </div>
                                    <div className=" col-sm-4">
                                        <Link to ="/order">
                                        <button className="btn btn-outline-primary w-50" type="button">Buy</button>
                                        </Link>
                                    </div>
                                </div>
                            </form >

                        </div>


                    </div>
                    <div className="col-md-4 " >

                        <div className="card h-100">
                            <div className="card-header">
                                #{product.id}
                            </div>


                            <div className="card-body">
                                <h4 className="card-title">{product.product_name}</h4>
                                <div className="card-text"> Description : {product.product_description}</div>
                                <div className="card-text"> Created by : {product.product_created_by} </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }



};

export default MithilaProductComponent;