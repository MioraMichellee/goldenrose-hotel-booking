import React from "react";
import './style/Card.css'
// import { Button } from '@material-ui/core';

function Card ({ src, title, description, price}) {
    return(
        <div className="card">
            <img src={src} alt="" />
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <div className="info_down">
                    <br/>
                    <h3>{price}</h3>
                    {/* <button variant='outlined'>
                        Book 
                    </button> */}
                </div>
               
            </div>
        </div>
    )
}

export default Card