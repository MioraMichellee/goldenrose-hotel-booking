import React from 'react'
import './style/Header.css'
import { Link } from 'react-router-dom'
import logo from "./style/images/logo.jpg"
import { useState } from 'react'
import DatePicker from './DatePicker'

// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// function Header({headerState}) {
function Header({ headerState }) {
	// const imagePath = ;
// 	const [state, setState] = useState('')

//   const handleLinkClick = (link) => {
//     setState(link);
//   }

const [showSearch, setShowSearch] = useState(false);
const [searchText, setSearchText] = useState('Search dates')

const dislaySearch = () => {
	if(showSearch === false){ setShowSearch(true); setSearchText('Hide')}
	else{ setShowSearch(false); setSearchText('Search date')}
}

    return(
       
            <section className="header">
	    <div className="container-fluid">
	      <div className="container-limit extra-limit">
	        <div className="container">
	          <div className="row">
	            <div className="logo">
	              {/* <div className="header-logo-wrapper">
	               
	              </div>
                  <div className="header-logo"> 

                  </div>*/}
	            </div>
	            <div className="menu">
	              <div className="header-menu-wrapper">
				  <div className='logo'>
				  <a href="/">
	                  <img src={logo}alt="Logo Image" width='99px'/>
	                </a>
				  </div>
									{/* <div className="helper-wrapper">
										<a href="/" className={headerState.Home} > Home<div className="helper-div"></div></a>
										<a href="/AboutUs" className={headerState.About}> About<div className="helper-div"></div></a>
										<a href="/Services" className={headerState.Service}>Services<div className="helper-div"></div></a>
										<a href="/ContactForm" className={headerState.Contact}>Contact<div className="helper-div"></div></a>
										
									</div> */}
									<div className="helper-wrapper">
            <a href="/" className={headerState.home} > Home<div className="helper-div"></div></a>
            <a href="/AboutUs" className={headerState.about}> About<div className="helper-div"></div></a>
            <a href="/Services" className={headerState.services}>Services<div className="helper-div"></div></a>
            <a href="/ContactForm" className={headerState.contact}>Contact<div className="helper-div"></div></a>
			<button variant='outlined' onClick={dislaySearch}> { searchText} 
    
                    </button>
        </div>
	              </div>
								<div className="burger-menu">
									<div className="burger-holder">
										<div className="burger-line"></div>
										<div className="burger-line"></div>
										<div className="burger-line"></div>
									</div>
								</div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
		{showSearch && <DatePicker />}
	  </section>



    )
}

export default Header