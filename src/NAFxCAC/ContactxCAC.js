import React from 'react'
import InstagramIcon from '../HomePage/svgs/landing/landingInstagram.svg'
import FacebookIcon from '../HomePage/svgs/landing/landingFacebook.svg'
import EmailIcon from '../HomePage/svgs/landing/landingFacebook.svg'

const ContactxCAC = (props) => {
  return (
    <div class="ml-[50%] w-[30%] my-20 text-white">
        <div class="flex flex-col">
            <div class="mt-3 text-2xl">Contact Us</div>
            <div class="mt-3"><img src={FacebookIcon} class="inline"/> {props.facebook}</div>
            <div class="mt-3"><img src={InstagramIcon} class="inline"/> {props.instagram}</div>
            <div class="mt-3"><img src={EmailIcon} class="inline"/> {props.email}</div>

        </div>
    </div>
  )
}

export default ContactxCAC