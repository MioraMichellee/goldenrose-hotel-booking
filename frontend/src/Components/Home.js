import React from 'react'
import './style/Home.css'
import Banner from './Banner'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'


function Home() {
  
      const headerState = {
        home: 'active',
        about: 'non-active',
        services: 'non-active',
        contact: 'non-active'
    };
    console.log(headerState);
    return(
        
        <div className='home'>
             {/* <Header className={headerState}/> */}
             <Header headerState={headerState} />
            <Banner/>

            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Family suite "
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="Ar 150.000/night "
                
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Couple room - Double room"
                description="Enjoy the amazing sights with this stunning penthouse"
                price="Ar 100.000/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Single room "
                description="Superhost with great amenities and a fabolous sights"
                price="Ar 80.000/night"
            />
            </div>
            <Footer />
        </div>
    )
}

export default Home