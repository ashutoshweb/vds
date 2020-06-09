import React from 'react'
import TSVDSPhotoGalleryComponent from "./TSVDSPhotoGalleryComponent";
import TsvdsHeading from "./TsvdsHeading";
import TsvdsMissionComponent from './TsvdsMissionComponent';
import TsvdsWorkListComponent from './TsvdsWorkListComponent';
import TsvdsPaymentComponent from './TsvdsPaymentComponent';
import VdsContactComponent from '../vds/VdsContactComponent';

import dataList from "./tsvds-events";



class TSVDSMainComponent extends React.Component{



    render(){

        const maxheight = 700;

       const style = {

            maxHeight: maxheight
        };

        let eventList =[];

        eventList = dataList.map(data =>{


            return (
                <div className={`card text-white carousel-item ${data.event_status}`} >
                    <img className="card-img" src= {data.image_url} alt="" style={style}/>
                    <div className="card-img-overlay">
                        <h4 className="card-title">TSVDS</h4>
                        <p className="card-text">{data.event_description}</p>
                        <p className="card-text">
                            <small className="text-muted">{data.event_date}</small>
                        </p>
                    </div>
                </div>


            )
        });


        return(

            <div >
                <TsvdsHeading/>
            <div className="container mt-5" >

                <div id="slider1" className="carousel slide" data-ride="carousel" >
                    <div className="carousel-inner">
                    {eventList}

                    </div>
                </div>


                <TsvdsPaymentComponent/>
                <TsvdsMissionComponent/>
                <TsvdsWorkListComponent/>

    <TSVDSPhotoGalleryComponent/>
    <VdsContactComponent/>

            </div>

            </div>

        )

    }


};

export default TSVDSMainComponent;