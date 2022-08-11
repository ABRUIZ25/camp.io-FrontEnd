import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NavBar from "../Components/NavBar";
import { loginUser } from '../Auth'



const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()


    return (
        <div>
            <header> <NavBar></NavBar></header>

            <h1 className="title">
                login page
            </h1>
            <div className="user-login-info">
                <input placeholder='email' onChange={(e) => {
                    setEmail(e.target.value)
                }} ></input>

                <input placeholder='password' type='password' onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
                <button onClick={(e) => {
                    loginUser(email, password)

                    // nav('/')
                }} >Login</button>
            </div>



        </div >

    )
}






export default LoginPage