import React from "react";
import "./style/CardBlog.css"
function CardBlog(){
    return(

          <div class="blog-card">
            <div class="product-img">
        
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Golden Rose Hotel</h1>
                <h2>by studio and friends</h2>
                {/* <p>Harvest Vases are a reinterpretation<br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth. </p> */}
                <p>Hotel Golden Rose in Oléron invites you to the cozy world of its 9 rooms and suites, which offer  <span class="span-brown">breathtaking views of the ocean or the hotel's garden. </span>

<br/> <br/>Spacious, bright, and perfectly equipped, they provide all the comfort of upscale hospitality. In a warm atmosphere where natural materials delicately blend with soft tones, you experience nights lulled by the sound of the waves. <br/> <br/>


</p>
              </div>
              {/* <div class="product-price-btn">
                <p><span>78</span>$</p>
                <button type="button">buy now</button>
              </div> */}
            </div>
          </div>
          
       
    
    )
}
export default CardBlog;