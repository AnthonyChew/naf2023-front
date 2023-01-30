import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import TOPTextLogo from './svgs/TOP/TOPTextLogo.png'
import TOPLogo from './svgs/TOP/TOPLogo.png'
import TOPMiniAd from './svgs/TOP/TOPMiniAd.png'
import TOP_1 from './svgs/TOP/TOP_1.jpg'
import TOP_2 from './svgs/TOP/TOP_2.jpg'
import TOP_3 from './svgs/TOP/TOP_3.JPG'
import TOP_4 from './svgs/TOP/TOP_4.jpg'
import TOP_5 from './svgs/TOP/TOP_5.jpg'
import ThemexCAC from './ThemexCAC'
import ContactxCAC from './ContactxCAC'
const NAFxTOP = () => {
    const description = "CAC Transition and Orientation Program (TOP) is one of the major events organised by CAC. Filled with fun and exciting activities that vary from exploring the NTU campus and venturing around interesting spots and landmarks on the NTU campus, CAC TOP serves to facilitate freshmen around the new varsity environment as well as to foster deep and long-lasting friendships among participants. With TOP’23 coming up, CAC TOP aims to welcome undergraduates from all faculties to create a memorable experience and build long-lasting friendships!"
    const theme = ""
    const imgs = [TOP_1,TOP_2,TOP_3,TOP_4, TOP_5]
    return (
        <div class="relative bg-NAFBlue py-[50px]">
            <div>
                <img class="mx-auto" src={TOPTextLogo}></img>
            </div>
            <AboutxCAC title="About TOP" img={TOPLogo} content={description}></AboutxCAC>
            <GalleryxCAC title="TOP Gallery" imgs={imgs}></GalleryxCAC>
            <ThemexCAC title="THEME: Spiderhead" imgs={imgs} content={theme}></ThemexCAC>
            <ContactxCAC facebook="www.facebook.com/ntucactop" instagram="www.instagram.com/ntucactop" email="email.com"></ContactxCAC>
        </div>
    )
}

export default NAFxTOP