import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Modal from "../Components/Modal";

function Admin() {
    const [campName, setCampName] = useState('')
    const [address, setAddress] = useState('')
    const [campId, setCampId] = useState(null)
    const [campData, setCampData] = useState({ camps: [] });
    const [userData, setUserdata] = useState({ users: [] })
    const [showModal, setShowModal] = useState(false);
    const [campAmount, setCampAmount] = useState('')
    const [reserve, setReserve] = useState(false)
    const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
    ;



    const createCamp = async function (campName, address, campAmount, reserve) {
        const url = `${urlEndpoint}/admin/createCamp`

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                campName,
                address,
                campAmount,
                reserve

            })

        });

        const responseJSON = await response.json();
        console.log(responseJSON);
    }


    const fetchCampData = async function () {
        const url = `${urlEndpoint}/camps/all-camps`;
        const apiResponse = await fetch(url);
        const apiJSON = await apiResponse.json();
        console.log(apiResponse)
        setCampData(apiJSON);


    };
    const fetchUserData = async function () {
        const url = `${urlEndpoint}/auth/all-users`;
        const apiResponse = await fetch(url);
        const apiJSON = await apiResponse.json()
        setUserdata(apiJSON)
    }
    const deleteUser = async () => {

        const url = `${urlEndpoint}/auth/delete-user`;
        const response = await fetch(url, {
            method: "DELETE",
        });
        const responseJSON = await response.json();

    };

    const deletecamp = async () => {

        const url = `${urlEndpoint}/admin/delete-camp`;
        const response = await fetch(url, {
            method: "DELETE",
        });
        const responseJSON = await response.json();

    };

    const updatedCamp = async () => {
        const url = `${urlEndpoint}/admin/edit-camp`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                campId: campId,
                campName: campName,
                address: address,
                campAmount: campAmount

            }),
        });
        const responseJSON = await response.json();
        console.log(responseJSON)

        return responseJSON;
    };


    return (
        <div>

            <Modal
                onClose={() => setShowModal(true)}
                show={showModal}
                updatedCamp={updatedCamp}
            >
                <label>camp name</label>
                &nbsp;
                <input
                    type="text"
                    value={campName}
                    onChange={(e) => {
                        setCampName(e.target.value);
                    }}
                />
                <br />
                <label>address</label>
                &nbsp;
                <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <input type='text' value={campAmount} onChange={(e) => {
                    setCampAmount(e.target.value)
                }}></input>
            </Modal>

            <input placeholder="camp site name" onChange={(event) => {
                setCampName(event.target.value)
            }} ></input>
            <input placeholder="address" onChange={(event) => {
                setAddress(event.target.value)
            }} ></input>

            <input type='text' placeholder="price" value={campAmount} onChange={(e) => {
                setCampAmount(e.target.value)

            }}></input>



            <div>
                <button onClick={(e) => {
                    createCamp(campName, address, campAmount, reserve)

                }}>createCamp</button>
                <button onClick={(e) => {
                    fetchCampData()
                }}>get camps</button>
                <button onClick={(e) => {
                    fetchUserData()
                }}>get users</button>
            </div>
            {campData.camps.map((camp, idx) => {
                return (
                    <div className="camp-cards">
                        <h3>{camp.campName}</h3>
                        <p>{camp.address}</p>
                        <p>${camp.campAmount}</p>
                        <p>{camp.reserve}</p>
                        <button onClick={(e) => {
                            setShowModal(true)
                            setCampId(camp.campId)

                        }}>edit</button>
                        <button onClick={(e) => {
                            deletecamp()
                        }}>delete</button>
                    </div>
                )
            })}
            {userData.users.map((users) => {
                return (
                    <div>
                        <h3>{users.fistName}</h3>
                        <h3>{users.lastName}</h3>
                        <p>{users.email}</p>
                        <p>{users.phoneNumber}</p>
                        <button onClick={(e) => {
                            deleteUser()
                        }}>delete</button>

                    </div>


                )
            })}



        </div>


    )
}

export default Admin