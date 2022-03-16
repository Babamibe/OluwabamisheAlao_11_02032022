import React from "react";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Title from "../components/Title";
import data from "../logements.json"
import { useParams } from 'react-router-dom';



export default function LodgingPage() {
    const {id} = useParams();
    return (
        <main>
            {data.filter(item => item.id === id).map(item => {
                return (
                    <div key={item.id}>
                        <Carrousel pictures={item.pictures}/>
                        <section className="info--section red">
                            <Title
                                title={item.title}
                                location={item.location}
                                tags={item.tags}
                            />
                            <div className="host--section">
                                <Host
                                name={item.host.name}
                                picture={item.host.picture}/>
            
                                <Rating
                                rating={item.rating}
                                />
                            </div>
                        </section>
                        
                        <section className="dropdown--section__lodging">
                            <Dropdown
                            title="Description"
                            content={<p className="dropdown--text">{item.description}</p>} 
                            />
            
                            <Dropdown
                            title="Équipements"
                            content={
                                <ul className="dropdown--list" >
                                      {item.equipments.map(equipement => {
                                        return (
                                            <li className="dropdown--list__item" key={`key-${item.equipments.indexOf(equipement)}`}>{equipement}</li>                                    
                                        )})}
                                        
                                </ul>
                            }

                                
                            
                            />
                        </section>
                    </div>
                    
                    
                )
            })}
            
            
        </main>
    )
}