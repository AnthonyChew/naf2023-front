import React, { useState, useEffect } from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import FestGuide from './FestGuide'
import Info from './Info'

const AboutUs = () => {
  return (

    <div>
      <Navbar></Navbar>
      <FestGuide></FestGuide>
      <Info></Info>
      <Footer></Footer>
    </div>

  )
}

export default AboutUs

