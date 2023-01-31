import React from 'react'
import InstagramIcon from '../HomePage/svgs/landing/landingInstagram.svg'
import FacebookIcon from '../HomePage/svgs/landing/landingFacebook.svg'
import EmailIcon from '../HomePage/svgs/landing/landingFacebook.svg'

const ContactxCAC = (props) => {
  return (
    <>
      <div class="lg:ml-[45%] w-[30%] mx-auto lg:mx-0 my-20 text-white lg:block hidden">
        <div class="flex flex-col ">
          <div class="mt-3 text-2xl">Contact Us</div>
          <div class="mt-3"><img src={FacebookIcon} class="inline" /> {props.facebook}</div>
          <div class="mt-3"><img src={InstagramIcon} class="inline" /> {props.instagram}</div>
          <div class="mt-3"><img src={EmailIcon} class="inline" /> {props.email}</div>
        </div>
      </div>
      <div class="my-20 text-white lg:hidden block">
        <div class="flex flex-col justify-center items-center">
          <div class="mt-3 text-2xl">Contact Us</div>
          <img class='mt-3' src={FacebookIcon} />
          <p>{props.facebook}</p>
          <img  class='mt-3' src={InstagramIcon} />
          <p>{props.instagram}</p>
          <img  class='mt-3' src={EmailIcon} />
          <p>{props.email}</p>
        </div>
      </div>
    </>
  )
}

export default ContactxCAC