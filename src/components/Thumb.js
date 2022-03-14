import React from "react";
//import logements from "../logements.json"

export default function Thumb(props) {
    return (
        <div className="thumb--card white">
            <img className="thumb--img" src={props.cover} alt=""/>
            <div className="thumb--background"></div>
            <p className="thumb--text">
                {props.title}
            </p>            
        </div>
    )
}
