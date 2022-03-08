import React from "react";
import blackLogo from "../images/logo-black.png"
export default function Footer() {
    return (
        <footer className="footer">
            <img src={blackLogo} alt=""/>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}