import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import  Axios  from "axios";
import SearchResult2 from "./SearchResult2";
import Header from "./Header";
function Panier (){

    const [availableChambre, setAvailableChambre] = useState([]);
    const [nbGuest, setNbGuest] = useState(2);
    const [roomID, setRoomID] = useState(0)
    const [roomID2, setRoomID2 ] = useState(0)
    const [premiereChambre, setPremiereChambre ] = useState([]);
    // const [deuxiemeChambre, setDeuxiemeChambre ] =useState([]);
    // const [prixTotal, setPrixTotal] = useState(0)
    const [duration, setDuration] = useState(0)
    const [selectedType, setSelectedType] = useState("")
    // const [needSecondRomm, setNeedSecondRoom] = useState(false)
    useEffect(() => {
        Axios.get("http://localhost:3003/getAvailable")
        .then((response) => {
            console.log("Réponse recue aty am SearchPAAH:", response.data);
            setAvailableChambre(response.data); // Maj données de la chambre disponibles
        })
        .catch((error) => {
            console.error("Erreur lors de la requête GET :", error);
        });
    }, []);

    useEffect(() => {
        const nbGuest = localStorage.getItem('nbGuest');
        if(nbGuest){
            setNbGuest(parseInt(nbGuest))
            console.log(nbGuest+"nombreGuest")
        }
    }, [])

    useEffect(() => {
        const roomID = localStorage.getItem('roomID');
        if (roomID) {
            setRoomID(parseInt(roomID)); 
        }
      }, []);

    //   useEffect(() => {
    //     const roomID2 = localStorage.getItem('roomID2');
    //     if (roomID) {
    //         setRoomID2(parseInt(roomID2)); 
    //     }
    //   }, []);

    
      useEffect(() => {
        const storedDuration = localStorage.getItem('duration');
        if (storedDuration) {
            setDuration(parseInt(storedDuration)); 
        }
      }, []);

      useEffect(() => {
        const storedSelectedType = localStorage.getItem('selectedType')
        if(storedSelectedType){
            setSelectedType(storedSelectedType)
        }
      })
    
  
  
  
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
            description:"3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
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

   
  
    // let PChambre = { ...findPChambre }
    // setPremiereChambre(PChambre)
    // console.log(premiereChambre)
    useEffect(() => {
        if (roomID !== null) {
            const findPChambre = listChambre.find(chambre => chambre.id === roomID);
            if (findPChambre) {
                setPremiereChambre(findPChambre);
            }
        }
    }, [roomID]);

    // useEffect(() => {
    //     if (roomID2 !== null) {
    //         const findPChambre2 = listChambre.find(chambre => chambre.id === roomID2);
    //         if (findPChambre2) {
    //             setDeuxiemeChambre(findPChambre2);
    //         }
    //     }
    // }, [roomID]);

    const headerState = {
        home: 'non-active',
        about: 'non-active',
        services: 'non-active',
        contact: 'non-active'
    };
    return(
        
        <div>
            <Header headerState={headerState}/>
            <div className="my-reservation" style={{ marginTop:'120px' , padding:'2%' }}>
             <h2 className="form-headline"> My reservation</h2>
             
             <SearchResult
                        // key={index}
                        id={premiereChambre.id}
                        img={premiereChambre.img}
                        location={premiereChambre.location}
                        title={premiereChambre.title}
                        description={premiereChambre.description}
                        star={premiereChambre.star}
                        price={premiereChambre.price}
                        buttonText='Continue'

                        total={calculateTotal(duration, premiereChambre.id)}
                        
                    />
           
                    {/* {roomID2 &&  <SearchResult
                        // key={index}
                        id={deuxiemeChambre.id}
                        img={deuxiemeChambre.img}
                        location={deuxiemeChambre.location}
                        title={deuxiemeChambre.title}
                        description={deuxiemeChambre.description}
                        star={deuxiemeChambre.star}
                        price={deuxiemeChambre.price}
                        buttonText='Continue'

                        total={calculateTotal(duration,deuxiemeChambre.id)}
                    />} */}
            </div>
            {/* {nbGuest>4 && <h2 className="form-headline"> Add room</h2>} */}
            <h2 className="form-headline"> Add room</h2>
            {selectedType && availableChambre.length > 0 &&
            listChambre
                .filter(chambre => availableChambre.includes(chambre.id))
                .filter(chambre => {

                    // Si nbGuest > 2, exclure les identifiants 4, 5, 6, 7, 8 et 9
                    if (selectedType === 'familiale') {
                        return ![roomID,4, 5, 6, 7, 8, 9].includes(chambre.id);
                    }
                    // Si nbGuest > 1, exclure les identifiants 7, 8 et 9
                    else if (selectedType  === 'couple') {
                        return ![roomID,7, 8, 9].includes(chambre.id);
                    }
                    else{
                        return ![roomID].includes(chambre.id)
                    }
                    return true; // Sinon, inclure toutes les chambres disponibles
                })
                .map((result, index) => (
                    <SearchResult2
                        key={index}
                        id={result.id}
                        img={result.img}
                        location={result.location}
                        title={result.title}
                        description={result.description}
                        star={result.star}
                        price={result.price}
                        total={calculateTotal(duration, result.id)}
                        buttonText='Book'
                    />
                    
                ))
        }
        </div>
    )
}
export default Panier;