import React, { useState } from 'react';
import './style/SearchResult.css';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ResForm from './ResForm';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons-material/Star";

function SearchResult({
    id,
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    buttonText
}) {

  
 

    const navigate = useNavigate();
    const handleBookClick = () => {
       
       const premiereChambre = localStorage.getItem('roomID')
       console.log(premiereChambre)

       if(premiereChambre == 0){
        navigate('/Panier')
        localStorage.setItem("roomID", id);
        
       }
       else{
        navigate('/ResForm')
        
        
       }

     
    };

     // Mise à jour de localStorage lorsque la durée change
    //  useEffect(() => {
        
    //   }, [duration]);

      
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        {/* <StarIcon className="searchResult__star" /> */}
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                        {/* <p>{id}</p> */}
                        <button variant='outlined' onClick={handleBookClick}>
                        {buttonText}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult