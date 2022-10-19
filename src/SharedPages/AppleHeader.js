import React from 'react'
import GreenButton from './svgs/greenbutton.svg'

import RedButton from './svgs/redbutton.svg'
import YellowButton from './svgs/yellowbutton.svg'

const AppleHeader = ({ title }) => {
 
  return (
    <div class="bg-headerGray border-solid border-2 border-black relative pb-1 ">
      <div class="inline-block text-left absolute top-0 left-1 p">
      <img class="inline ml-2" src={GreenButton}></img>
      <img class="inline ml-2" src={YellowButton}></img>
      <img class="inline ml-2" src={RedButton}></img>

      </div>
      <div class="inline-block text-center">
        {title}
      </div>
    </div>
  )
}

export default AppleHeader