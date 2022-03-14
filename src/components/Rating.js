import React from "react";

export default function Rating(props) {
    const score = [1, 2, 3, 4, 5]
    
    return( 
        <div>
            {score.map((rate)=> ( 
                <i 
                key={rate}    
                className={`fas fa-star rating--star`} 
                    style={{color: rate <= props.rating? "#ff6060" : "#e3e3e3"}}
                >
                </i>)
            )}
        </div>
    )
}