import React from "react"
import { Link, useHistory } from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import "./NavBar.css"



// when one of these links is clicked, the URL will change  and end with the associated TO=/WhateverYouNameIt



export const NavBar = () => {
    const { isAuthenticated, logout, getCurrentUser } = useSimpleAuth()
    const history = useHistory()
    return (
        <ul className="navbar">
                        <li className="navbar__item">
                            {
                                !isAuthenticated()
                                    ? <Link className="nav-link" to="/register">Register</Link>
                                    : <Link className="nav-link" to="/campsites">{getCurrentUser().name}</Link>
                            }
                        </li>
                        <li className="navbar__item">
                            {
                                isAuthenticated()
                                    ? <Link onClick={() => {
                                        logout()
                                    }} className="nav-link" to="/login">Logout</Link>
                                    : <Link className="nav-link" to="/login">Login</Link>
                            }
                        </li>
        </ul>
    )
}
