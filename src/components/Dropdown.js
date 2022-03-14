import React from "react";

export default function Dropdown(props) {
    
    const [isDisplayed, setIsDisplayed] = React.useState(false)
    const [isIconValue, setIconValue] = React.useState("fa-chevron-down")

    function DisplayDropdown() {
        setIsDisplayed(prevState => !prevState)
        setIconValue(prevIcon => !prevIcon)
    }
    
    return (
        <article className="dropdown">
            <div className="dropdown--header white" onClick={DisplayDropdown}>
                <h3 className="dropdown--title">{props.title}</h3>
                <i className={`fas ${isIconValue? "fa-chevron-down": "fa-chevron-up"} dropdown--icon`}></i>
            </div>
            <div className={`dropdown--content red ${isDisplayed ? "": "invisible"}`}  >
                {props.content}
            </div>
        </article>

    )
}