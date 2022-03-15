import React from "react";
import Thumb from "../components/Thumb";
import Banner from "../components/Banner";
import data from "../logements.json"
import welcomeImage from "../images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import { Link } from "react-router-dom";



export default function Homepage() {
    return (
        <div>
            <Banner
            img={welcomeImage}
            />
            <section className="thumb--section">
                {data.map((logement, index) => {
                    return(
                        <Link to={`/lodging/${logement.id}`} key={`${logement.id}-${index}`}>
                            <Thumb
                            
                            title={logement.title}
                            cover={logement.cover}
                            />
                        </Link>

                    )
                })}
            </section>
        </div>
    )


}

