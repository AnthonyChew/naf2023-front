import React, { useState, useEffect } from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import FestGuide from './FestGuide'
import Info from './Info'
import Nebula from './Nebula'

const AboutUs = () => {
  return (

    <div>
      <FestGuide></FestGuide>
      <Nebula></Nebula>
      <Info></Info>
    </div>

  )
}

export default AboutUs

