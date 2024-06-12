
import { useState } from 'react';
import { useEffect } from 'react';

import Axios from 'axios';
import "./style/ResForm.css"

import { useNavigate } from 'react-router-dom';


//icone modal
import Confirm from "./style/images/icones/confirm.png"
import Error from "./style/images/icones/error.png"

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function ResForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [duration, setDuration] = useState(1);
  const [roomID, setRoomID] = useState(0);
  const [roomID2, setRoomID2] = useState(0)

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [nbGuest, setNbGuest] = useState(2);
  const [prixTotal1, setPrixTotal1] = useState(0);
  const [prixTotal2, setPrixTotal2] = useState(0);
  // const [prixTotal1, setPrixTotal2] = useState(0);

  const [modalError, setModalError] = useState(false);
  const [error, setError] = useState("")
  


  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false);
 
  useEffect(() => {
    const storedDuration = localStorage.getItem('duration');
    if (storedDuration) {
        setDuration(parseInt(storedDuration)); 
    }
  }, [setDuration]);


  useEffect(() => {
    const roomID = localStorage.getItem('roomID');
    if (roomID) {
        setRoomID(parseInt(roomID)); 
    }
  }, [setRoomID]);

  useEffect(() => {
    const roomID2 = localStorage.getItem('roomID2');
    if (roomID2) {
        setRoomID2(parseInt(roomID2)); 
    }
  }, [setRoomID2]);


   useEffect(() => {
      const startDate = localStorage.getItem('startDate');
      if (startDate) {
        const storedStartDate = new Date(startDate)
        const formattedStartDate = storedStartDate.toISOString().split('T')[0];
        setStartDate(formattedStartDate); 
      }
  }, [setStartDate]);


  useEffect(() => {
    const endDate = localStorage.getItem('endDate');
    if (endDate) {
      const storedEndDate = new Date(endDate)
      const formattedEndDate = storedEndDate.toISOString().split('T')[0];
        setEndDate(formattedEndDate); 
    }
}, [setEndDate]);

 useEffect(() => {
        const nbGuest = localStorage.getItem('nbGuest');
        if(nbGuest){
            setNbGuest(parseInt(nbGuest))
            console.log(nbGuest+"nombreGuest")
        }
    }, [setNbGuest])

console.log("TY LE DUREE", duration);
console.log("TY LE roomid", roomID);
console.log("TY LE roomid2", roomID2);
console.log("TY LE start date", startDate);
console.log("TY LE end date", endDate);
console.log("TY LE nb guest ", nbGuest);


useEffect(() => {
  const newTotal1 = calculateTotal(duration, roomID);
  setPrixTotal1(newTotal1);
}, [duration, roomID]); 

useEffect(() => {
  const newTotal2 = calculateTotal(duration, roomID2);
  setPrixTotal2(newTotal2);
}, [duration, roomID2]); 

function calculateTotal(duration, roomID) {
  let total;
  if (roomID < 4) {
    total = duration * 150000;
  } else if (roomID < 7) {
    total = duration * 100000;
  } else {
    total = duration * 80000;
  }
  return total;
}

const handleCancel = () =>{
  navigate('/Panier')
}

const sendMail = () => {
  const data = {
    name: name,
    email: email,
    message: `Dear ${name},

    We are delighted to inform you that your room reservation at Golden Rose Hotel has been successfully made!
    
    **Reservation Details:**
    
    - Customer Name: ${name}
    - Email: ${email}
    - Room Number: ${roomID} ${roomID2}
    - Duration of Stay: ${duration} day(s)
    - Total Price: ${prixTotal1 + prixTotal2} Ar
    
    Thank you for choosing us for your stay, and we look forward to welcoming you soon!
    If you have any questions or concerns, please don't hesitate to contact us.
    
    Warm regards,
    The Golden Rose Hotel Team
  `
  };

  Axios.post('http://localhost:3003/send-email', data)
    .then(response => {
      console.log(response.data);
      // setModalIsOpen(true)
      
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
};

const cleanRoomIDLocalStorage = () => {
  localStorage.setItem('roomID',0)
  localStorage.setItem('roomID2',0)
}

const addCustomer = (event) => {
  event.preventDefault();
  console.log("ra vide izy de zao"+email,name,tel)
  if(!name) {
    setError('Le nom est requis');
    setModalError(true)
  }
  if(!email) {
    setError('L\'email est requis')
    setModalError(true)
  }
  if (!tel){ 
    setError('Le numero telephone est requis')
    setModalError(true)
  }
  if(name&& email && tel){
    setShowModal(true);
    setModalError(false)
  }
  else{
    setError('Please complete all required fields')
    setModalError(true)
  }
  
};



  const confirmReservation = () =>{
    cleanRoomIDLocalStorage()
    sendMail();
    navigate('/ThankYou')
    Axios.post("http://localhost:3003/create", {
      name:name,
      email:email,
      tel:tel,
      idChambre:roomID,
      idChambre2:roomID2,
      startDate: startDate,
      endDate: endDate,
      prixTotal1: prixTotal1,
      prixTotal2: prixTotal2

    }).then(() => {
      console.log("ok");
      setShowModal(false)
    })
   
   
  };
 
  // const localStorage1 = localStorage.getItem('roomID') 
  // const localStorage2 = localStorage.getItem('roomID2') 
  // console.log(localStorage1, localStorage2)
  return (
      
<div>
  <div class="contain">

      <div class="wrapper">

        <div class="form">
          {/* <h4>GET IN TOUCH</h4> */}
          <h2 class="form-headline">My information</h2>
          {/* <form id="submit-form" action=""> */} <br /><br />
          <form onSubmit={addCustomer} >
          {/* <p>
              <input id="civility" class="form-input" type="text" name="user_civility" placeholder="Mrs/ Mr/ Mmme*"/>
              <small class="name-error"></small>
            </p> */}
             <select  style={{
                backgroundColor: 'rgb(255, 255, 255)',
                width: '52%',
                height: '48px',
                color: '#737879',
                borderRadius: '5px'
              }}>
                {/* <option value="">Choisissez une option</option> */}
                <option value="Mr">Mr </option>
                <option value="Ms">Ms </option>
                <option value="Mrs">Mrs</option>
              </select>
            <p>
              <input id="name" class="form-input" type="text" name="user_name" placeholder="Your Name*" onChange={(event) =>{
                  setName(event.target.value)
                }}/>
              <small class="name-error"></small>
            </p>
            <p>
              <input id="email" class="form-input" type="email" name="user_email" placeholder="Your Email*"onChange={(event) =>{
                  setEmail(event.target.value)
                }}/> 
              <small class="name-error"></small>
            </p>
            {/*<p>
               <input id="tel" class="form-input" type="number" name="user_tel" placeholder="Your number*"onChange={(event) =>{
                  setTel(event.target.value)
                }}/> 
              <small class="name-error"></small>
            </p> */}
            <PhoneInput
      placeholder="Enter phone number"
      value={tel}
      onChange={setTel}  style={{
        display: 'flex',
        alignItems: 'center',
        height: '49px',
        marginLeft: '22px',
        width: '101%'
      }}/>
            
      
            <p class="full-width">
              <textarea  minlength="20" id="message" cols="30" rows="7" name="message" placeholder="Your Comment" ></textarea>
              <small></small>
            </p>

            <p class="full-width">
              <input type="checkbox" id="checkbox" name="checkbox" required/> Terms and conditions
          
            </p>
          
            

            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={Confirm} />
                    <h2>Confirmation</h2>
                  </div>
                  
                  <p>Do You Want to Confirm your<br/>  Reservation?</p>
                  <div class="modal-btn">
                    <button className="modal-btn-confirm" onClick={confirmReservation}>Confirm</button>
                    <button className="modal-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                  </div>
                </div>
              </div>
  )}
            {modalError && (
              <div className="modal">
                <div className="modal-content">
                  <div class="modal-header">
                    <img src={Error}/>
                  <h2>Error </h2>
                  </div>
                  
                  <p>{error}</p>
                  {/* <button onClick={confirmReservation}>Confirmer</button> */}
                  <div className="modal-btn">
                  <button className=" modal-btn-ok" onClick={() => setModalError(false)}>Try again</button>
                  </div>
                  
                </div>
              </div>
  )}

          </form>
        </div>

        <div class="reservation-wrapper">
        <h2 class="form-headline"> Summary </h2>
        <ul>
          <li> <span class="highlight-text-grey">Chambre number:</span> {roomID}</li>
          <li> <span class="highlight-text-grey">Duree sejour:</span> {duration}</li>
          <li> <span class="highlight-text-grey"> Total:</span> {prixTotal1}</li>
           
          </ul><br />
          {roomID2!=0 &&  
          <ul>
            ---------------------------------------------------------
          <li> <span class="highlight-text-grey">Chambre number:</span> {roomID2}</li>
          <li> <span class="highlight-text-grey">Duree sejour:</span> {duration}</li>
          <li> <span class="highlight-text-grey"> Total:</span> {prixTotal2}</li>
           
          </ul>}
         
        </div>
      </div>
      <div className='reservation-btn'>
           <button class="btn" onClick={addCustomer}>Confirm</button>
            <button className='btn-cancel' onClick={handleCancel}>Cancel</button>
           </div>
      </div>
      {/* <Modal isOpen={modalIsOpen}>
                <h2>Réservation confirmée</h2>
                <p>Merci pour votre réservation ! Un email de confirmation vous a été envoyé.</p>
                <button onClick={() => setModalIsOpen(false)}>Fermer</button>
            </Modal> */}
            
      </div>
    // </div>

    
  );
}
export default ResForm;
