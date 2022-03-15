import React from "react";
import logo from "../images/logo-kasa.jpg"
import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return(
        <header>
            <Link to='/' className="logo--link">
                <img src={logo} className="logo-img" alt="logo kasa"/>
            </Link>
            <nav className="nav red">
            
                <NavLink
                style={({isActive}) => {
                    return {
                        textDecoration: isActive ? "underline" : "none"
                    }
                }}
                to="/">
                    Accueil
                </NavLink>

                <NavLink
                style={({isActive}) => {
                    return {
                        textDecoration: isActive ? "underline" : "none"
                    }
                }}
                to="/about">
                    A Propos
                </NavLink>
        </nav>
        </header>
        
    )
}