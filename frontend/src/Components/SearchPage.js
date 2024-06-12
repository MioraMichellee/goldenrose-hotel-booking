import React, { useState, useEffect } from 'react';
import './style/SearchPage.css';
// import { button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Axios from "axios"
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Warning from "./style/images/icones/warning-.png"
function SearchPage() {
    

    const [availableChambre, setAvailableChambre] = useState([]);
    const [nbGuest, setNbGuest] = useState(2);
    const [selectedType, setSelectedType] = useState("simple")
    const [modalAlert, setModalAlert] = useState(false)
    const [duration , setDuration ] = useState(1)

    const navigate = useNavigate();
    useEffect(() => {
        Axios.get("http://localhost:3003/getAvailable")
        .then((response) => {
            console.log("Réponse recue aty am SearchPAAH:", response.data);
            setAvailableChambre(response.data); // Maj données de la chambre disponibles
          
            if(  response.data.length === 0){
                setModalAlert(true)
            }
        })
        .catch((error) => {
            console.error("Erreur lors de la requête GET :", error);
            setModalAlert(true)
        });
    }, []);

    useEffect(() => {
        const nbGuest = localStorage.getItem('nbGuest');
        if(nbGuest){
            setNbGuest(parseInt(nbGuest))
            console.log(nbGuest+"nombreGuest")
        }
    }, [])
    useEffect(() =>{
        const selectedType = localStorage.getItem('selectedType')
        if (selectedType){
            setSelectedType(selectedType)
        }
    })

        const handleTryClick =() =>{
            setModalAlert(false)
            navigate('/')
        }

        useEffect(() => {
            const storedDuration = localStorage.getItem('duration');
            if (storedDuration) {
                setDuration(parseInt(storedDuration)); 
            }
          }, []);
    //calcul total somme due 
     
  
  function calculateTotal(duration, id) {
    let total;
    if (id < 4) {
      total = duration * 150000;
    } else if (id < 7) {
      total = duration * 100000;
    } else {
      total = duration * 80000;
    }
    return total;
  }

    const listChambre = [
        {
            id:1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
          location: " Family suite with serene garden views",
          title: "Stay at this spacious Edwardian suite",
          description: "4 guest · 2 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
          star: 4.73,
          price: "Ar 150.000 / night",
          total: "0 total"
        },
        {
            id:2,
          img: "https://img.freepik.com/photos-premium/chambre-lits-jumeaux-standard-hotel_527134-1409.jpg?w=740",
          location: "Spacious ocean-view family suite",
          title: "Independant apartment",
          description: "4 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
          star: 4.3,
          price: "Ar 150.000 / night",
          total: "7 total"
        },
        {
            id:3,
          img: "https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",
          location: "Family suite with serene garden views",
          title: " Family Studio Apartments",
          description: "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
          star: 3.8,
          price: "Ar 150.000 / night",
          total: "7 total"
        },
        {
            id:4,
                img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",
                location:"Elegant double room with ocean view",
                title:"Double room",
                description:"2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
                star:4.1,
                price:"Ar 100.000 / night",
                total:"0 total"
        },
        { 
            id:5,
                img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",
                location:"Cozy double room with garden view",
                title:"Couple's Room",
                description:"2 guest · 1 kingsize bedroom  · 1  bathrooms · Wifi · Free parking · Dry Cleaning",
                star:5.0,
                price:"Ar 100.000 / night",
                total:"0 total",
        },

        {
            id:6,
                
                img:"https://img.freepik.com/photos-premium/chaise-bleue-dans-lit_1048944-10128229.jpg?w=740",
                location:"Classic double room with stunning ocean views",
                title:"The Blue Couple Room ",
                description:"2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine",
                star:4.23,
                price:"Ar 100.00 / night",
                total:"0 total",
        },
        {
            id:7,
                // img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",
                img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",
                location:" Comfortable single room with garden view",
                title:"Standard Room",
                description:"1 guest · 1 bedroom · 1  bathrooms · Wifi · Kitchen · Work Desck · Washing Machine",
                star:3.85,
                price:"Ar 80.000 / night",
                total:"0 total"
        },
        {
            id:8,
                img:"https://img.freepik.com/photos-gratuite/oreiller-confortable-blanc-couverture-lit-lampe-legere_74190-12078.jpg?t=st=1713300644~exp=1713304244~hmac=b3c00bf042d7bd145da632d5989e3b35472d99057c9ce8b97ca222572009e509&w=740",
                location:"Tranquil single room with garden view",
                title:" Solo Room",
                description:"1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
                star:3.85,
                price:"Ar 80.000 / night",
                total:"0 total"
        },
        {
            id:9,
                img:"https://img.freepik.com/photos-premium/interieur-maison_1048944-22950263.jpg?w=740",
                location:"Cozy single room with garden view",
                title:"Economy Single Room",
                description:"1 guest · 1 bed · 1.5 shared bathrooms · Wifi · Work Desck · Free parking · Washing Machine",
                star:3.85,
                price:"Ar 80.000 / night",
                total:"0 total"
        }
      
      ];


      const headerState = {
        home: 'non-active',
        about: 'non-active',
        services: 'non-active',
        contact: 'non-active'
    };
    return (
        <div className='searchPage'>
             <Header headerState={headerState}/>

            <div className='searchPage__info' >
          
            <h2 className="form-headline">Available room</h2>  <br/>
                <p> 26 april to 30 april · type:{selectedType} </p>
                
                {/* <button variant="outlined">Cancellation Flexibility</button>
                <button variant="outlined">Type of place</button>
                <button variant="outlined">Price</button>
                <button variant="outlined">Rooms and beds</button>
                <button variant="outlined">More filters</button> */}
            </div>

            {modalAlert && ( <div className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={Warning}/>
                  <h2>Alert</h2>
                  </div>
                  
                  {/* <p>Il n'y a plus de chambre {selectedType} disponibles pour cette date.<br/> Veuillez selectioner un autre date </p> */}
                  <p>No {selectedType} room available for this date.<br/> Please select another date.</p>
                  {/* <button onClick={confirmReservation}>Confirmer</button> */}
                  <div className="modal-btn">
                  <button className=" modal-btn-try" onClick={handleTryClick}>Try again</button>
                  </div>
                  
                </div>
              </div>)}
            
            {/* {photos} */}

            {availableChambre.length > 0 &&
            listChambre
                .filter(chambre => availableChambre.includes(chambre.id))
                .filter(chambre => {
                    // Si nbGuest > 2, exclure les identifiants 4, 5, 6, 7, 8 et 9
                    if (selectedType === "familiale" ) {
                        return ![4, 5, 6, 7, 8, 9].includes(chambre.id);
                    }
                    // Si nbGuest > 1, exclure les identifiants 7, 8 et 9
                    else if (selectedType === 'couple' ) {
                        return ![7, 8, 9].includes(chambre.id);
                    }
                    return true; // Sinon, inclure toutes les chambres disponibles
                })
                .map((result, index) => (
                    <SearchResult
                        key={index}
                        id={result.id}
                        img={result.img}
                        location={result.location}
                        title={result.title}
                        description={result.description}
                        star={result.star}
                        price={result.price}
                        // total={result.total}
                        total={calculateTotal(duration, result.id)}
                        buttonText="Book"
                    />
                    
                ))
        }

        
        </div>
    )
}

export default SearchPage