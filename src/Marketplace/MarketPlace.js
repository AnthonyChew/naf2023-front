import React from 'react'
import Footer from '../SharedPages/Footer'
import Navbar from '../SharedPages/Navbar'
import Cart from './Cart'
import MarketPlaceLanding from './MarketPlaceLanding'

const MarketPlace = () => {
  return (
    <div>
        <Navbar></Navbar>
        <MarketPlaceLanding></MarketPlaceLanding>
        <Footer></Footer>
    </div>
  )
}

export default MarketPlace