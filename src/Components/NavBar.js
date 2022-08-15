import { Outlet, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


const NavBar = ({ }) => {

    return (
        <div>
            <nav>
                <h3>NavBar</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/loginpage">Login</Link>
                    </li>
                    <li>
                        <Link to="/createpage">Registration</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}






export default NavBar