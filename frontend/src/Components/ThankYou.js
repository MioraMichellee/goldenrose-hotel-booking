import React from "react";
import "./style/Thankyou.css"
import Header from "./Header";
// import Footer from "./Footer";

function ThankYou (){
    const headerState = {
        home: 'non-active',
        about: 'non-active',
        services: 'non-active',
        contact: 'non-active'
    };
    return(
    <div>
        <Header headerState={headerState}/>
        <div className="banner-thankyou">
        <div className="filter">
            <h1>Thank You for Your Trust</h1> <br/>
            <p> See You Soon at Our Location. <br/>
You will receive an email at the address you provided confirming that your reservation has been successfully made.</p>
            </div>
        </div>
        
    </div>
    )
}
export default ThankYou