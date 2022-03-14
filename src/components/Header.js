import React from "react";
import logo from "../images/logo-kasa.jpg"
import { NavLink } from "react-router-dom";

export default function Header() {

    return(
        <nav className="nav red">
            <img src={logo} className="logo-img" alt="logo kasa"/>
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
    )
}