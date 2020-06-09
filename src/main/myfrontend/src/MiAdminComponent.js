import React from 'react';
import {Link} from "react-router-dom";


class MiAdminComponent extends React.Component{



    state ={

        issues : [{
            "tracker_id" :"",
            "issueId": 1,
            "userId" : " msdbmdfbjs",
            "media_type" : "VI ",
            "application_name" : "XYZ",
            "insert_time" : ""

        },
            {

                "tracker_id" :"",
                "issueId": 1,
                "userId" : " msdbmdfbjs",
                "media_type" : "VI ",
                "application_name" : "XYZ",
                "insert_time" : ""

            }],

        issue : null,

        queryParam : ""





    };



    componentDidMount() {




        fetch("/mi/api/v1/issues")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("result ",result)
                    this.setState({

                        issues: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error ",error)
                    this.setState({

                        issues : [{
                            "tracker_id" :"",
                            "issueId": 1,
                            "userId" : " msdbmdfbjs",
                            "media_type" : "VI",
                            "application_name" : "XYZ",
                            "insert_time" : ""

                        },
                            {

                                "tracker_id" :"",
                                "issueId": 1,
                                "userId" : " msdbmdfbjs",
                                "media_type" : "VI ",
                                "application_name" : "XYZ",
                                "insert_time" : ""

                            }]
                    });
                }
            )


    }

componentDidUpdate() {
    console.log("Updated");
}

searchByUserId (){

        let searchValue = document.getElementById("searchField").value;

        console.log("searchByUserId", searchValue);

         fetch(`/mi/api/v1/tracker/userId/${searchValue}`)
             .then(res => res.json())
             .then(
                 (result) => {
                     console.log("result ",result)
                     this.setState({

                         issues: result
                     });
                 },
                 // Note: it's important to handle errors here
                 // instead of a catch() block so that we don't swallow
                 // exceptions from actual bugs in components.
                 (error) => {
                     console.log("error ",error)
                     this.setState({

                         issues : [{
                             "tracker_id" :"",
                             "issueId": 1,
                             "userId" : " msdbmdfbjs",
                             "media_type" : "VI",
                             "application_name" : "XYZ",
                             "insert_time" : ""

                         },
                             {

                                 "tracker_id" :"",
                                 "issueId": 1,
                                 "userId" : " msdbmdfbjs",
                                 "media_type" : "VI ",
                                 "application_name" : "XYZ",
                                 "insert_time" : ""

                             }]
                     });
                 }
             )

    };
render(){


    let issueList =[];



    issueList = this.state.issues.map(issue =>{

        return (


                    <tr>

                            <td scope="row">{issue.issueId}</td>
                            <td>{issue.tracker_id}</td>
                            <td>{issue.userId}</td>
                            <td>{issue.application_name}</td>
                            <td>{issue.insert_time}</td>


                        <td>
                            <video  width="320" height="240" controls>
                            <source  src= {`/static/${issue.tracker_id}.mp4`}  type="video/mp4">
                            </source>


                        </video></td>
                        </tr>




        )
    });

    console.log("issueList=",issueList);
    return (
        <div className="container">
        <div className=" mt-5">

            <div className="container mt-5 ">

                <div className="card-columns ">
                    <div className="card-body">
                        <h4 className="card-title"></h4>
                        <p className="card-text"> </p>

                    </div>
                </div>
            </div>
            <div className="container mt-5 ">
            <div className="form-inline ml-auto mb-3">
                <input id="searchField" type="text" className="form-control mr-2"  placeholder="Search By UserId"/>
                    <button className="btn btn-outline-success" onClick={() => this.searchByUserId()}>Search</button>
            </div>
            </div>
        </div>
        <div >
            <table className="table  table-hover  table-dark" >

            <thead >
            <tr>
                <th>Issue #</th>
                <th>Tracker ID</th>
                <th>User ID</th>
                <th>Application</th>
                <th>Date</th>
                <th>Media</th>
            </tr>
            </thead>
            <tbody>
                {issueList}
            </tbody>
            </table>
        </div>
        </div>
    )

}
};

export default MiAdminComponent;