import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import LandingBg from './svgs/landingbg.svg'
import workshops_Logo from './svgs/workshops_Logo.svg'

const Workshops = () => {
  return (
    <div class="min-h-screen bg-WorkshopRed p-20" style={{ backgroundImage: `url(${LandingBg})`}}>
      <div class="mx-auto h-20 mb-20" style={{ backgroundImage: `url(${workshops_Logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
      <div class="border-solid border-2 border-black shadow-lg shadow-cyan-500/10 bg-white">
        Workshops
      </div>
    </div> 
  )
}

export default Workshops