import React from "react";
import "./style/CardRoomType.css"
import Footer from "./Footer";
function CardRoomType(){
    return(
        <div class="projcard-container">
    
  <div class="projcard projcard-blue">
    <div class="projcard-innerbox">
      <img class="projcard-img" src="https://img.freepik.com/photos-premium/interieur-chambre-luxe_1048944-20877901.jpg?w=740" />
      <div class="projcard-textbox">
        <div class="projcard-title">Family suite</div>
        <div class="projcard-subtitle">Perfect for a family gateway</div>
        <div class="projcard-bar"></div>
        <div class="projcard-description">

        Beautiful family suite for 4 to 5 people on the ground floor – 26 m²  
Ocean view or with private courtyard  
Bed 160×200 in the bedroom and a 2-seater convertible sofa in the living room (except on the mezzanine: 2 beds 90cm)

Bathroom with corner whirlpool bath or shower – Towel warmer – Hairdryer – Toiletries  
Separate toilet  
Free Wi-Fi – Flat-screen TV – Safe – Individual air conditioning


</div>
        {/* <div class="projcard-tagbox">
          <span class="projcard-tag">HTML</span>
          <span class="projcard-tag">CSS</span>
        </div> */}
      </div>
    </div>
  </div>
  
  {/* ------------------- */}
  <div class="projcard projcard-blue">
    <div class="projcard-innerbox">
      <img class="projcard-img" src="https://img.freepik.com/photos-premium/chambre-hotel-fleurs-jaunes-table-couverture-jaune_662214-583771.jpg?w=740" />
      <div class="projcard-textbox">
        <div class="projcard-title">Double room </div>
        <div class="projcard-subtitle">Bright and spacious</div>
        <div class="projcard-bar"></div>
        <div class="projcard-description">

        Double room for 2 people or couple on the ground floor or upstairs – 13 to 19 m²  
Courtyard view, ocean view  
Comfortable bed 160×200 or 180×200  
Bathroom with walk-in shower – Towel warmer – Hairdryer – Toiletries  
Free Wi-Fi – Flat-screen TV – Safe – Individual air conditioning

</div>
      </div>
    </div>
  </div>
  <div class="projcard projcard-blue">
    <div class="projcard-innerbox">
      <img class="projcard-img" src="https://img.freepik.com/photos-gratuite/suite-chambre-coucher-moderne-classique-luxe-dans-hotel_105762-1787.jpg?t=st=1713204439~exp=1713208039~hmac=4482d948f41f66387df5245549bedf4ca618198bfb8eb0f7db9c2c3ad07205ef&w=740" />
      <div class="projcard-textbox">
        <div class="projcard-title">Single room</div>
        <div class="projcard-subtitle">Equipped and comfortable</div>
        <div class="projcard-bar"></div>
        <div class="projcard-description">

        Classic room for 1 person on the ground floor or upstairs – 13 to 15 m²  
Courtyard view  
Comfortable bed 160×200  

Bathroom with walk-in shower – Towel warmer – Hairdryer – Toiletries  
Free Wi-Fi – Flat-screen TV – Safe – Individual air conditioning

</div>
      </div>
    </div>
  </div>
  <Footer />
 </div>
    )
}
export default CardRoomType;