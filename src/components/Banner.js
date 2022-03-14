import React from "react";
import welcomeImage from "../images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"


export default function Banner(props) {
    return (
        <section className="welcome--section white">
            <img className="welcome--image" src={props.img} alt=""/>
            
            <div className="welcome--background"></div>
            {props.img === welcomeImage && <p className="welcome--text">Chez vous, partout et ailleurs</p>}
        </section>
    )
}