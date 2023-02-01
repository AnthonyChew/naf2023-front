import React from 'react'

import OrderSubmittedLogo from './svgs/submitted/OrderSubmitted.png'

import SubmittedYellow8Star1 from './svgs/submitted/SubmittedYellow8Star1.svg'
import SubmittedPurple4Star1 from './svgs/submitted/SubmittedPurple4Star1.svg'
import SubmittedBlue4Star1 from './svgs/submitted/SubmittedBlue4Star1.svg'
import SubmittedYellow8Star2 from './svgs/submitted/SubmittedYellow8Star2.svg'
import SubmittedPurple4Star2 from './svgs/submitted/SubmittedPurple4Star2.svg'
import SubmittedBlue8Star1 from './svgs/submitted/SubmittedBlue8Star1.svg'
import SubmittedOrange4Star1 from './svgs/submitted/SubmittedOrange4Star1.svg'
import SubmittedYellow4Star1 from './svgs/submitted/SubmittedYellow4Star1.svg'
import SubmittedWhite8Star1 from './svgs/submitted/SubmittedWhite8Star1.svg'

import SubmittedOrange4Star2 from './svgs/submitted/SubmittedOrange4Star2.svg'
import SubmittedBlue8Star2 from './svgs/submitted/SubmittedBlue8Star2.svg'
import SubmittedPurple4Star3 from './svgs/submitted/SubmittedPurple4Star3.svg'

import SubmittedBlue8Star3 from './svgs/submitted/SubmittedBlue8Star3.svg'
import SubmittedPurple8Star1 from './svgs/submitted/SubmittedPurple8Star1.svg'
import SubmittedWhite4Star1 from './svgs/submitted/SubmittedWhite4Star1.svg'
import SubmittedOrange8Star1 from './svgs/submitted/SubmittedOrange8Star1.svg'
import SubmittedBlue4Star2 from './svgs/submitted/SubmittedBlue4Star2.svg'
import SubmittedYellow8Star3 from './svgs/submitted/SubmittedYellow8Star3.svg'
import SubmittedPurple4Star4 from './svgs/submitted/SubmittedPurple4Star4.svg'
import SubmittedBlue8Star4 from './svgs/submitted/SubmittedBlue8Star4.svg'

import SubmittedOrangeDot from './svgs/submitted/SubmittedOrangeDot.svg'
import SubmittedWhiteDot from './svgs/submitted/SubmittedWhiteDot.svg'
import SubmittedYellowDot from './svgs/submitted/SubmittedYellowDot.svg'
import SubmittedPurpleDot from './svgs/submitted/SubmittedPurpleDot.svg'


const OrderSubmitted = () => {
  return (
    <div class="bg-NAFPink relative min-h-screen flex flex-col justify-center overflow-hidden">
      <img src={SubmittedWhiteDot} class="absolute top-[29%] left-[2.6%] hidden lg:block"></img>      
      <img src={SubmittedYellow8Star1} class="absolute top-[1.7%] left-[1.3%]"></img>
      <img src={SubmittedOrangeDot} class="absolute top-[6.1%] left-[13%] hidden lg:block"></img>
      <img src={SubmittedPurple4Star1} class="absolute top-[16.6%] left-[15.1%] hidden lg:block"></img>
      <img src={SubmittedBlue4Star1} class="absolute top-[4.4%] left-[24%] hidden lg:block"></img>
      <img src={SubmittedWhiteDot} class="absolute top-[16%] left-[31%] hidden lg:block"></img>
      <img src={SubmittedYellow8Star2} class="absolute top-[-1.5%] left-[36%] hidden lg:block"></img>
      <img src={SubmittedPurple4Star2} class="absolute top-[12%] left-[52%]"></img>
      <img src={SubmittedBlue8Star1} class="absolute top-[1.9%] right-[26.7%] hidden lg:block"></img>
      <img src={SubmittedWhiteDot} class="absolute top-[19.2%] right-[21.6%] hidden lg:block"></img>
      <img src={SubmittedOrange4Star1} class="absolute top-[3.2%] right-[14.1%] hidden lg:block"></img>
      <img src={SubmittedYellow4Star1} class="absolute top-[16.1%] right-[4%] hidden lg:block"></img>
      <img src={SubmittedWhite8Star1} class="absolute top-[-2.3%] right-[0%]"></img>

      <img src={SubmittedOrange4Star2} class="absolute top-[43.5%] left-[4.6%] hidden lg:block"></img>
      <img src={SubmittedBlue8Star2} class="absolute top-[32%] right-[0%] hidden lg:block"></img>
      <img src={SubmittedPurple4Star3} class="absolute bottom-[30%] right-[2.1%] hidden lg:block"></img>

      <img src={SubmittedBlue8Star3} class="absolute bottom-[0%] left-[0%] "></img>
      <img src={SubmittedPurple8Star1} class="absolute bottom-[16.6%] left-[0%] hidden lg:block"></img>
      <img src={SubmittedYellowDot} class="absolute bottom-[9.5%] left-[16%] hidden lg:block"></img>
      <img src={SubmittedWhite4Star1} class="absolute bottom-[15.6%] left-[22%]"></img>
      <img src={SubmittedOrange8Star1} class="absolute bottom-[-3%] left-[30%] hidden lg:block"></img>
      <img src={SubmittedBlue4Star2} class="absolute bottom-[19%] right-[52.4%] hidden lg:block"></img>
      <img src={SubmittedPurpleDot} class="absolute bottom-[8.1%] right-[45.6%] hidden lg:block"></img>
      <img src={SubmittedYellow8Star3} class="absolute bottom-[11.7%] right-[31.4%] hidden lg:block"></img>
      <img src={SubmittedPurple4Star4} class="absolute bottom-[6%] right-[20.5%]"></img>
      <img src={SubmittedOrangeDot} class="absolute bottom-[25.1%] right-[15.1%] hidden lg:block"></img>
      <img src={SubmittedBlue8Star4} class="absolute bottom-[-7%] right-[0%] hidden lg:block"></img>

      
      <div class="z-20">
        <img src={OrderSubmittedLogo} class="mx-auto mb-6 w-[80%] md:w-[70%]"></img>
        <p class="mx-auto w-[90%] font-syne text-lg md:text-2xl lg:text-3xl leading-10 text-center text-white">Check your email for your receipt and collection details. <br></br> Thank you for shopping with us!</p>
      </div>
    </div>
  )
}

export default OrderSubmitted