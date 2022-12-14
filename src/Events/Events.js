import React from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import Glimmer from './Glimmer'
import Interstellar from './Interstellar'
import Orbit from './Orbit'

const Events = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Glimmer></Glimmer>
        {/* <Interstellar></Interstellar> */}
        {/* <Orbit></Orbit> */}
        <Footer></Footer>
    </div>
  )
}

export default Events