import React, { useState, useEffect } from "react";
// import { useDatePicker } from './Context';

import './style/DatePicker.css'

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range";
import Warning from "./style/images/icones/warning-.png"
import Axios from "axios";

// import DurationContext from "./Context";
// import BookingForm from "./BookingForm";

// import { useNavigate } from "react-router-dom";

function DatePicker () {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [nbGuest, setNbGuest ] = useState(2);
    const [availableChambre, setAvailableChambre] = useState([]);
    const [duration, setDuration] = useState(1);
    const [selectedType , setSelectedType] = useState('simple')

    const [modalInfo, setModalInfo] = useState(false)
    // const [modalDateError, setModalDateError] = useState(false)

    const minDate = new Date()
    // const { setDuration } = useDatePicker();

    // Mise à jour de localStorage lorsque la durée change
    useEffect(() => {
      localStorage.setItem("duration", duration);
      localStorage.setItem("startDate", startDate);
      localStorage.setItem("endDate", endDate);
      localStorage.setItem("nbGuest", nbGuest);
   
    }, [duration, startDate, endDate, nbGuest]);
    

    function calculateDuration(start, end) {
      var difference = end.getTime() - start.getTime();
      difference += 1000 * 3600 * 24;
      var daysDifference = Math.ceil(difference / (1000 * 3600 * 24));
      console.log("Durée du séjour:", daysDifference, "jours");

      return daysDifference;
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        const newDuration = calculateDuration(
          ranges.selection.startDate,
          ranges.selection.endDate
        );
        setDuration(newDuration);
        // setDuration (calculateDuration(ranges.selection.startDate, ranges.selection.endDate));
        localStorage.setItem('duration', duration);
          
      }

   
    
    const  selectionRange = {
        startDate:startDate,
        endDate: endDate,
        key: "selection",
    }


    const formattedStartDate = selectionRange.startDate.toISOString().split('T')[0];
    const formattedEndDate = selectionRange.endDate.toISOString().split('T')[0];
    
   
    
    const checkAvailable = () =>{
      if(minDate>startDate || minDate===startDate){
        setModalInfo(true)
        
      }
      else{
        if (selectedType){
          Axios.post("http://localhost:3003/checkAvailable", {
            startDate:formattedStartDate,
            endDate:formattedEndDate,
            nbGuest: selectedType,
            
  
          }).then(response => {
              if (response.status === 200) {
                window.location.href='/searchPage'
                console.log("Réponse reçue aty am datePicker:", response.data);
                setAvailableChambre(response.data)
                
                // console.log(availableChambre+"ito")
                // // localStorage.setItem('roomID',3)
                // const test = localStorage.getItem('roomID')
                // console.log("TEST VAR LOCALSTORAGE "+test)
              } else {
                // Gérer les erreurs ici si nécessaire
                console.error('Erreur lors de l\'envoi de la variable au serveur');
              }
            })
        }
        else{
          setModalInfo(true)
        }
        
      }
            
      };

    console.log(formattedStartDate,formattedEndDate)

   

    const handleSelectChange = (event) => {
      setSelectedType(event.target.value);
    };
    
    useEffect(() => {
      if(selectedType){
        localStorage.setItem("selectedType",selectedType)
      }
    },[selectedType])
    



    return(
        <div className="datePicker"> 

            <DateRangePicker ranges={
                [selectionRange]} onChange = {handleSelect}
                minDate={minDate}
                // ShowDefinedRangeWrapper={false}
        //         ShowDefinedRangeWrapper={false}  // Désactive le sélecteur de plage de dates prédéfinies
        // showMonthAndYearPickers={false}  // Cache les sélecteurs de mois et d'année
        // showDateDisplay={false}  // Cache la ligne d'affichage de la sélection
        // showPreview={false}  // Cache la prévisualisation de la sélection
                
            />
            <h2>
                Number of guest :
                {/* <input className="datePicker_input" min={1} defaultValue={2} max={8} type='number' onChange={(event) =>{
            setNbGuest(event.target.value)
          }}/> */}
          <select value={selectedType} onChange={handleSelectChange} style={{
    backgroundColor: '#f8f8f8',
    width: '52%',
    height: '40px',
    color: '#737879',
    borderRadius: '5px'
  }}>
        {/* <option value="">Choisissez une option</option> */}
        <option value="simple">Single (1)</option>
        <option value="couple">Couple (2)</option>
        <option value="familiale">Family (4)</option>
      </select>
                {/* <PeopleIcon /> */}
            </h2>
            
            <button onClick={checkAvailable}> check availability</button>

            {modalInfo && (
              <div className="modal">
                <div className="modal-content">
                  <div class="modal-header">
                    <img src={Error}/>
                  <h2>Error</h2>
                  </div>
                  
                  <p> Please double-check your dates.</p>
                  {/* <button onClick={confirmReservation}>Confirmer</button> */}
                  <div class="modal-btn">
                  <button class=" modal-btn-ok" onClick={() => setModalInfo(false)}>Try again</button>
                  </div>
                  
                </div>
              </div>
  )}
           {/* <DurationContext.Provider value={{duration: ['T'] }}>
            <BookingForm />
           </DurationContext.Provider>
             */}
        </div>
    )
}

export default DatePicker;