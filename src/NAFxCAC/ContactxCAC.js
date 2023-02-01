import React from 'react'
import InstagramIcon from './svgs/Instagram.svg'
import FacebookIcon from './svgs/Facebook.svg'
import InternetIcon from './svgs/Internet.svg'
import TiktokIcon from './svgs/Tiktok.svg'

const ContactxCAC = (props) => {
  return (
    <>
      <div class="lg:ml-[45%] w-[30%] mx-auto lg:mx-0 my-20 text-white lg:block hidden">
        <div class="flex flex-col ">
          <div class="mt-3 text-2xl">Contact Us</div>
          <div class="mt-3"><img src={InternetIcon} class="inline w-[60px]" /><a class="ml-1" href={props.website}>{props.website}</a></div>
          <div class="mt-3"><img src={FacebookIcon} class="inline w-[60px]" /><a class="ml-1" href={props.facebook}>{props.facebook}</a></div>
          <div class="mt-3"><img src={InstagramIcon} class="inline w-[60px]" /><a class="ml-1" href={props.instagram}>{props.instagram}</a> </div>
        </div>
      </div>
      <div class="my-20 text-white lg:hidden block">
        <div class="flex flex-col justify-center items-center">
          <div class="mt-3 text-2xl">Contact Us</div>
          <img  class='mt-3' src={InternetIcon} />
          <p><a class="ml-1" href={props.website}>{props.website}</a></p>
          <img class='mt-3' src={FacebookIcon} />
          <p><a class="ml-1" href={props.facebook}>{props.facebook}</a></p>
          <img  class='mt-3' src={InstagramIcon} />
          <p><a class="ml-1" href={props.instagram}>{props.instagram}</a></p>

        </div>
      </div>
    </>
  )
}

export default ContactxCAC