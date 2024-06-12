import React from "react"
import "./style/Services.css"
import Header from "./Header"
import Footer from "./Footer"
// import PiscineLogo from "./style/images/icones/piscine.png"
import PiscineLogo from "./style/images/icones/piscine.png"
import Lotus from "./style/images/icones/lotus.png"
import Car from"./style/images/icones/car-1.png"
import Wifi from "./style/images/icones/wifi-1.png"


function Service  (){
    const headerState = {
        home: 'non-active',
        about: 'non-active',
        services: 'active',
        contact: 'non-active'
    };
    return(
        <div>
        <Header headerState={headerState}/>
        <div className="banner-service">
            <div className="banner-service-info">
                <h1>SERVICES</h1> 
               
                {/* <CardRoomType /> */}
                {/* <CardBlog /> */}
                {/* <p> A tres biento dans nos locaux</p> */}
            </div>
            <div class="service-info ">
                <div class="service-info-cellule">
                <img src={PiscineLogo}/>
                <h3 class="service-info-title"> Indoor pool </h3>
                <p>Relax around our indoor pool equipped with a jacuzzi and sauna.</p>
                </div >

                <div class="service-info-cellule">
                <img src={Car}/>
                <h3 class="srvice-info-service-info-title"> Mobility </h3>
                <p> We work with partners offering car, quad, motorcycle, and ski rentals.
</p>
                </div>

                <div class="service-info-cellule"> 
                <img src={Wifi}/>
                <h3 class="service-info-title"> Wifi </h3>
                <p>High-speed Wi-Fi available for free throughout the hotel.</p>
                </div>

                <div class="service-info-cellule">
                <img src={Lotus}/>
                <h3 class="service-info-title"> Wellness  </h3>
                <p>Discover our sauna, massage services, and wellness area.</p>
                </div>

                
            </div>
            <Footer />
        </div>
        
    </div>
    )
}
export default Service