import React from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import LandingBg from './svgs/landingbg.svg'


const Landing = () => {
  return (
    <div class="min-h-screen bg-LandingPurple" style={{ backgroundImage: `url(${LandingBg})` }}>

        <div class="m-5 border-solid border-2 border-black shadow-lg shadow-cyan-500/10 bg-gray">
            <AppleHeader title={"www.teaservideo.com"}></AppleHeader>
            <div>SADASDASDASDASD</div>
        </div>

    </div>
  )
}

export default Landing