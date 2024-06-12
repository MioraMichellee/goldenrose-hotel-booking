
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
// import { Search } from '@mui/icons-material';
import SearchPage from './Components/SearchPage';
import ContactForm from './Components/ContactForm';
import ResForm from './Components/ResForm'


import { DatePickerProvider } from './Components/Context';
import BookingForm from './Components/BookingForm';

// import { DatePickerProvider } from './Context';
import DatePicker from './Components/DatePicker';
import ThankYou from './Components/ThankYou';

import Panier from './Components/Panier'
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';

import Modal from 'react-modal';

Modal.setAppElement('#root');
// import Banner from './Components/Banner'
// import Card from './Components/Card'
// import Navbar from './Components/Navbar'

// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
   return (

    <div className='app'>
     {/* <Header /> */}
      <div>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/searchPage' element={<SearchPage />} />
         <Route path='/ContactForm' element={<ContactForm />} /> 
         <Route path='/ResForm' element={<ResForm />} /> 
         <Route path='/ThankYou' element={<ThankYou />}/>
         <Route path='/Panier' element={<Panier />}/>
         <Route path='/AboutUs' element={<AboutUs />}/>
         <Route path='/Services' element={<Services/>}/>
         
        </Routes>
        </div>
      {/* <Footer /> */}
      
    </div>
  );
}


export default App;
 