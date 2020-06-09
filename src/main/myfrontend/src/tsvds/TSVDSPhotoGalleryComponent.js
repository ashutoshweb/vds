import React from "react";
import {Link} from "react-router-dom";
import dataList from './tsvds-events.json';

class TSVDSPhotoGalleryComponent extends React.Component{

    render(){

        let eventList =[];

        eventList = dataList.map(data =>{

            return (
                <div className="card mb-5">
                    <div className="card-header"><b> {data.event_name}</b>

                    </div>
                    <img className="card-img-top img-fluid" src= {data.image_url} alt=""/>

                    <div className="card-body">
                        <h4 className="card-title"> {data.event_place}</h4>
                        <p className="card-text"> {data.event_description} </p>
                        <p className="card-text"> {data.event_date} </p>

                    </div>
                </div>
            )
        });

        console.log("eventList=",eventList);

        return(
            <div className="container mt-5">

                <div className="card-columns ">
                    <div className="card-body">
                        <h4 className="card-title"></h4>
                        <p className="card-text"> </p>

                    </div>
                </div>

                <div className="">
                    {eventList}
                </div>

            </div>

        )
    }



};

export default TSVDSPhotoGalleryComponent;