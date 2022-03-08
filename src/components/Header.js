import React from "react";
import logo from "../images/logo-kasa.jpg"

export default function Header() {
    return(
        <nav className="red">
            <img src={logo} className="logo-img" alt="logo kasa"/>
            <h3>Accueil</h3>
            <h3>A Propos</h3>
        </nav>
    )
}