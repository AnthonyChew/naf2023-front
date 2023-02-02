import React, { useEffect, useState } from 'react'
import InstagramIcon from './svgs/Instagram.svg'
import FacebookIcon from './svgs/Facebook.svg'
import InternetIcon from './svgs/Internet.svg'
import TiktokIcon from './svgs/Tiktok.svg'

const ContactxCAC = (props) => {

  const [website, setWebsite] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');

  useEffect(() => {
    let webString = new String(props.website)
    if (webString.slice(-1) === '/') {
      setWebsite(webString.substring(8, webString.length - 1));
    }
    else {
      setWebsite(webString.substring(8));
    }

    let facebookString = new String(props.facebook)
    let last = facebookString.lastIndexOf("/");
    setFacebook(facebookString.substring(++last))

    let instagramString = new String(props.instagram)
    last = instagramString.lastIndexOf("/");
    setInstagram('@' + instagramString.substring(++last))
  }, []
  );

  return (
    <>
      <div class="lg:ml-[45.75%] w-[30%] mx-auto lg:mx-0 my-20 text-white lg:w-fit lg:block hidden">
        <div class="flex flex-col">
          <div class="mt-3 text-2xl font-syne w-[400px]">Contact Us</div>
          <div class="mt-3"><img src={InternetIcon} class="inline w-[60px]" /><a class="ml-1 font-syne" href={props.website}>{website}</a></div>
          <div class="mt-3"><img src={FacebookIcon} class="inline w-[60px]" /><a class="ml-1 font-syne" href={props.facebook}>{facebook}</a></div>
          <div class="mt-3"><img src={InstagramIcon} class="inline w-[60px]" /><a class="ml-1 font-syne" href={props.instagram}>{instagram}</a> </div>
        </div>
      </div>
      <div class="my-20 text-white lg:hidden block">
        <div class="flex flex-col justify-center items-center">
          <div class="mt-3 text-2xl font-syne">Contact Us</div>
          <img class='mt-3' src={InternetIcon} />
          <p><a class="ml-1 font-syne" href={props.website}>{props.website}</a></p>
          <img class='mt-3' src={FacebookIcon} />
          <p><a class="ml-1 font-syne" href={props.facebook}>{props.facebook}</a></p>
          <img class='mt-3' src={InstagramIcon} />
          <p><a class="ml-1 font-syne" href={props.instagram}>{props.instagram}</a></p>

        </div>
      </div>
    </>
  )
}

export default ContactxCAC