import React, { useState, useEffect } from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import DirectorNote from './DirectorNote'
import FestGuide from './FestGuide'
import Info from './Info'

const AboutUs = () => {      
  document.body.style.overflow = 'unset';
  return (
    <div>
        <FestGuide></FestGuide>
        <Info></Info>
        <DirectorNote></DirectorNote>
    </div>

  )
}

export default AboutUs

