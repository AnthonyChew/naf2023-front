import React, { useState, useEffect } from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import FestGuide from './FestGuide'
import Info from './Info'
import Nebula from './Nebula'

const AboutUs = () => {
  return (

    <div>
      <Navbar class="z-20"></Navbar>
      <FestGuide></FestGuide>
      <Nebula></Nebula>
      <Info></Info>
      <Footer></Footer>
    </div>

  )
}

export default AboutUs

