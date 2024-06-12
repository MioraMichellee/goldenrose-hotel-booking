import React, { useState } from "react";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './style/ContactForm.css'
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Confirm from "./style/images/icones/confirm.png"


   

export const ContactForm = () => {
  const navigate = useNavigate()
  const form = useRef();
  const [modalSucces , setModalSucces] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nq9j0ac', 'template_c6flhub', form.current, {
        publicKey: 'cDEMDGDv06OsDuUwX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setModalSucces(true)
          // navigate('/ThankYou')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleOK= ()=> {
    navigate('/')
  }

  const headerState = {
    home: 'non-active',
    about: 'non-active',
    services: 'non-active',
    contact: 'active'
};

  return (
<div>
<Header headerState={headerState}/>

<div className="contain">

<div className="wrapper">

  <div className="form">
    <h4>GET IN TOUCH</h4>
    <h2 className="form-headline">Send us a message</h2>
    {/* <form id="submit-form" action=""> */} <br /><br />
    <form ref={form} onSubmit={sendEmail}>
      <p>
        <input id="name" className="form-input" type="text" name="from_name" placeholder="Your Name*" required/>
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email" className="form-input" type="email" name="user_email" placeholder="Your Email*" required/>
        <small className="name-error"></small>
      </p>
 
      <p className="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" name="message" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      {/* <p className="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked/> Yes, I would like to receive communications by call / email about Company's services.</input>
      <p className="full-width">
        <input type="submit" className="submit-btn" value="Submit" onclick="checkValidations()"/>
        <button className="reset-btn" onclick="reset()">Reset</button>
        
      </p> */}
      <input type="submit" value="Send" className="submit"/>
    </form>
  </div>

  <div className="contacts contact-wrapper">

    <ul>
      <li>We've driven online revenues of over <span className="highlight-text-grey">$2
          billion</span> for our clients. Ready to know
        how we can help you?</li>
      <span className="hightlight-contact-info">
        <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> mioramichelle25@gmail.com</li>
        <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+261 34 46 775 00</span></li>
      </span>
    </ul>
  </div>
</div>
{modalSucces && <div className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={Confirm} />
                    <h2>Success</h2>
                  </div>
                  
                  <p>Your message has been sent successfully.</p>
                  <div class="modal-btn">
                    <button className="modal-btn-confirm" onClick={handleOK}>OK</button>
                    {/* <button className="modal-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button> */}
                  </div>
                </div>
              </div>}
</div>

   <Footer />
    </div>
  );
};


export default ContactForm;