import React from "react";
import Header from "./Header";
import "./style/AboutUs.css"
import CardBlog from "./CardBlog";
import CardRoomType from "./CardRoomType";
function AboutUs (){
    const headerState = {
        home: 'non-active',
        about: 'active',
        services: 'non-active',
        contact: 'non-active'
    };
    return(
        <div>
        <Header headerState={headerState}/>
        <div className="banner-aboutus">
            <div className="banner-aboutus-info">
                <h1>ABOUT US</h1> 
                <CardBlog />
                <CardRoomType />
                {/* <CardRoomType /> */}
                {/* <CardBlog /> */}
                {/* <p> A tres biento dans nos locaux</p> */}
            </div>
        </div>
        
    </div>
    )

}
export default AboutUs;