import React, { useEffect } from "react";

// import { Button } from '@material-ui/core';

import { useState } from "react";
import DatePicker from "./DatePicker";

import { Link } from "react-router-dom";
import './style/Banner.css';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState('Search dates')

    const dislaySearch = () => {
        if(showSearch === false){ setShowSearch(true); setSearchText('Hide')}
        else{ setShowSearch(false); setSearchText('Search date')}
    }

    // nettoyer local storage
    useEffect(() => {
      
        localStorage.setItem('roomID',0)
        localStorage.setItem('roomID2',0)
          
    })

    return(
        <div className="banner">
            <div className="banner_search">

                
            </div>
            <div className="banner_info">
                <h1>Golden Rose Hotel</h1>
                <h5>
                A haven of peace and tranquility awaits you at Golden Rose Hotel.<br/> Where the elegance of coastal living meets unparalleled comfort and natural beauty.
                </h5>
                {/* <button variant='outlined'>
                <Link to="/SearchPage" className="btn">Explore</Link>
                </button> */}
                <button
                className="banner_searchButton"
                variant='outlined'
                onClick={dislaySearch}> { searchText}
                </button>
            </div>

            {showSearch && <DatePicker />}
        </div>
    )
}
export default Banner;