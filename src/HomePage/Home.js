import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import Landing from './Landing'
import WhatsOn from './WhatsOn'
import Events from './Events'
import Workshops from './Workshops'
import Marketplace from './Marketplace'
import Navbar from '../SharedPages/Navbar'
import Footer from '../SharedPages/Footer'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
  return (
    <div>
        <Landing></Landing>
        <WhatsOn></WhatsOn>
        <Events></Events>
        <Workshops/>
        <Marketplace></Marketplace>
    </div>
  )
}

export default Home