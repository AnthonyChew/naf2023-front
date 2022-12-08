import React from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import Gallery from './Gallery'
import SignUp from './SignUp'
import Workshops from './Workshops'

const WorkshopMain = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Workshops></Workshops>
        <SignUp></SignUp>
        <Gallery></Gallery>
        <Footer></Footer>
    </div>
  )
}

export default WorkshopMain