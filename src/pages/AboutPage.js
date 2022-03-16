import React from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutImage from "../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import {aPropos} from "../aPropos"
import mobileImg from "../images/gustavo-alves-YOXSC4zRcxw-unsplash 1.png"



export default function AboutPage() {
    return(
        <div>
            <Banner
            img={aboutImage}
            mobileImg={mobileImg}
            about={true}
            />
            <section className="dropdown--section__about">
                {
                    aPropos.map( item => {
                        return (
                            <Dropdown
                            key={item.id}
                            title={item.title}
                            content={<p>{item.description}</p>}
                            about={item.about}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}