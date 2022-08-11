import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Admin from "./Admin";


const HomePage = () => {
    const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
    const [campData, setCampData] = useState({ camps: [] });
    const [campsLoading, setCampsLoading] = useState(false);
    const [reserve, setReserve] = useState(false)
    const [campId, setCampId] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)





    useEffect(() => {
        const fetchData = async () => {
            const url = `${urlEndpoint}/camps/all-camps`;
            const apiResponse = await fetch(url);
            const campData = await apiResponse.json();
            setCampData(campData);
            return;
        };

        // if (campData.reserve === 'no') {
        fetchData();

        // }


    }, [campsLoading]);
    console.log(campData)

    const updatedCampReserve = async () => {
        const url = `${urlEndpoint}/admin/edit-camp-reserve`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                campId: campId,
                reserve: reserve

            }),
        });
        const responseJSON = await response.json();
        console.log(responseJSON)

        return responseJSON;
    };



    return (


        <div>
            <header> <NavBar></NavBar></header>

            <h1>
                home Page
            </h1>

            {campData.camps.map((camp, idx) => {
                return (
                    <div className="camp-cards">
                        <h3>{camp.campName}</h3>
                        <p>{camp.address}</p>
                        <p>${camp.campAmount}</p>
                        <p>{camp.reserve === true ? "Yes" : "No"}</p>
                        <button onClick={(e) => {
                            updatedCampReserve()
                            setCampId(campId)


                        }}>rent camp</button>

                    </div>
                )
            })}



        </div>

    )

}






export default HomePage