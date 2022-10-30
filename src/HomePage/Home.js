import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import Landing from './Landing'
import WhatsOn from './WhatsOn'
import Events from './Events'
import Workshops from './Workshops'
import Marketplace from './Marketplace'

const Home = () => {
  return (
    <div>
        <Landing></Landing>
        <WhatsOn></WhatsOn>
        <Events></Events>
        <Marketplace></Marketplace>
    {/* <AppleHeader title="test"></AppleHeader>
    <div>PIKACHU</div> */}
    </div>
  )
}

export default Home