import React from "react";

export default function Dropdown(props) {
    
    const [isDisplayed, setIsDisplayed] = React.useState(false)
    const [isIconValue, setIconValue] = React.useState("fa-chevron-down")

    function DisplayDropdown() {
        setIsDisplayed(prevState => !prevState)
        setIconValue(prevIcon => !prevIcon)
    }
    
    return (
        <article className={`dropdown ${props.about? "dropdown__long": "" }`}>
            <div className={`dropdown--header white ${props.about? "dropdown--header__long": "" }`} onClick={DisplayDropdown}>
                <h3 className={`dropdown--title ${props.about ? "dropdown--title__long" : ""}`}>{props.title}</h3>
                <i className={`fas ${isIconValue? "fa-chevron-down": "fa-chevron-up"} dropdown--icon`}></i>
            </div>
            <div className={`dropdown--content red ${isDisplayed ? "": "invisible"} ${props.about? "dropdown--content__long": "" }`}  >
                {props.content}
            </div>
        </article>

    )
}