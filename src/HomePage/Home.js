import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import Landing from './Landing'
import WhatsOn from './WhatsOn'
import Events from './Events'
import Workshops from './Workshops'
import Marketplace from './Marketplace'
<<<<<<< Updated upstream
import Navbar from '../SharedPages/Navbar'
import Footer from '../SharedPages/Footer'
=======
import AboutUs from './AboutUs'
>>>>>>> Stashed changes

const Home = () => {
  return (
    <div>
<<<<<<< Updated upstream
        <Navbar></Navbar>
=======
        <AboutUs></AboutUs>
>>>>>>> Stashed changes
        <Landing></Landing>
        <WhatsOn></WhatsOn>
        <Events></Events>
        <Marketplace></Marketplace>
        <Workshops/>
        <Footer></Footer>
    </div>
  )
}

export default Home