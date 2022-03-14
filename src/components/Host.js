import React from "react";

export default function Host(props) {
    return (
        <div className="host--profile">
            <p className="host--name red">{props.name}</p>
            <img src={props.picture} alt="" className="host--img"></img>
            <div className="host--background"></div>
        </div>
    )
}