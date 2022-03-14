import React from "react";

export default function Error404() {
    return (
        <div className="error--404 red">
            <h1 className="error--num">404</h1>
            <h2 className="error--message">Oups! La page que vous demandez n'existe pas.</h2>
            <p className="error--link">Retourner sur la page d'accueil</p>
        </div>
    )
}