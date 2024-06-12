import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import DurationContext from "./Context";
// import { useDatePicker } from './Context';

function BookingForm({ onClose }) {

    const [duration, setDuration] = useState(null);
    const [roomID, setRoomID] = useState(0)
    
    // const { duration } = useDatePicker();
    const handleSubmit = (e) => {
        e.preventDefault();
            // Logique pour soumettre la réservation
            // Vous pouvez accéder aux valeurs des champs du formulaire ici
            // et les envoyer à votre backend pour finaliser la réservation
        };
    
   

        useEffect(() => {
            const storedDuration = localStorage.getItem('duration');
            if (storedDuration) {
                setDuration(parseInt(storedDuration)); // Conversion en nombre
            }
        }, []);
        console.log("TY LE DUREE"+duration)

        useEffect(() => {
            const roomID = localStorage.getItem('roomID');
            if (roomID) {
                setRoomID(parseInt(roomID)); // Conversion en nombre
            }
        }, []);
        console.log("TY LE roomid"+roomID)

    return(
        <div className="booking-form-container">
        <h2>Booking Form</h2>

        <p>La durée du séjour est : {duration}</p>

        <form onSubmit={handleSubmit}>
            {/* Afficher l'identifiant de la chambre */}
            <p>Room ID: {roomID}</p>
            {/* Autres champs du formulaire */}
            {/* Bouton de soumission */}
            <button type="submit">Submit Reservation</button>
        </form>
        {/* Bouton pour fermer le formulaire */}
        <button onClick={onClose}>Cancel</button>
    </div>
    )
}
export default BookingForm;