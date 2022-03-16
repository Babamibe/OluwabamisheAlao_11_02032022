import React from "react";
import welcomeImage from "../images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"


export default function Banner(props) {
    return (
        <section className={`welcome--section white ${props.about? "welcome--section__about" : ""}`}>
            <img className={`welcome--image ${props.about? "welcome--image__about" : ""}`} src={props.img} alt=""/>
            {props.about && <img className="welcome--image__mobile" src={props.mobileImg} alt=""/>}
            
            <div className={`welcome--background ${props.about?  "welcome--background__about" : ""}`}></div>
            {props.img === welcomeImage && <p className="welcome--text">Chez vous, partout et ailleurs</p>}
        </section>
    )
}