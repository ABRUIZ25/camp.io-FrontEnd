import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { registerUser } from "../Auth"
import { useNavigate } from "react-router";

function CreateUserPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()



    return (
        <div>
            <header> <NavBar></NavBar></header>


            <div className="creat-user">
                <input placeholder="first name" onChange={(event) =>
                    setFirstName(event.target.value)}></input>

                <input placeholder="last name" onChange={(event) =>
                    setLastName(event.target.value)}></input>

                <input placeholder="email" onChange={(event) =>
                    setEmail(event.target.value)}></input>

                <input placeholder="phone number" onChange={(event) =>
                    setPhoneNumber(event.target.value)}></input>

                <input type="password" placeholder="password" onChange={(event) =>
                    setPassword(event.target.value)}></input>

                <button onClick={(e) => {
                    registerUser(firstName, lastName, email, phoneNumber, password)
                    nav('/')

                }}>Create account</button>

            </div>



        </div >

    )
}


export default CreateUserPage