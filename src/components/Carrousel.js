import React from "react";

export default function Carrousel(props) {
    const [index, setIndex] = React.useState(0)
    
    function next() {
        setIndex(prevIndex => prevIndex === props.pictures.length-1 ? 0 : prevIndex + 1)
    }
    function prev() {
        setIndex(prevIndex => prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1)
    }
    

    return(
        <section className="carrousel white">
            <div className="carrousel--box">
                <img className="carrousel--img" src={props.pictures[index]} alt=""/>
                <div className="carrousel--navigation">
                    {props.pictures.length > 1 && <i className="fas fa-chevron-left" onClick={prev}></i>}
                    {props.pictures.length > 1 && <i className="fas fa-chevron-right" onClick={next}></i>}
                    <div className="carrousel--count">                
                        {index + 1}/{props.pictures.length}
                    </div>
                </div>
            </div>
            

        </section>
    )
}