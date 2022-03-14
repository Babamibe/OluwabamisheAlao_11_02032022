import React from "react";
import Tag from "./Tag";

export default function Title(props) {
    return(
        <div className="title--section">
            <h1 className="title--header">{props.title}</h1>
            <p className="title--location">{props.location}</p>
            <ul className="title--tag__list">
                {props.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </ul>
        </div>
    )
}