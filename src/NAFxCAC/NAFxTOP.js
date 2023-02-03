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

import TopRightPurpleStar from './svgs/TopRightPurpleStar.svg';
import TopRightOrangeStar from './svgs/TopRightOrangeStar.svg';
import TopRightWhiteDot from './svgs/TopRightWhiteDot.svg';

import TopLeftRedStar from './svgs/TopLeftRedStar.svg';
import TopLeftYellowStar2 from './svgs/TopLeftYellowStar2.svg';


import MiddleLeftYellowStar from './svgs/MiddleLeftYellowStar.svg';
import MiddleLeftWhiteStar from './svgs/MiddleLeftWhiteStar.svg';
import MiddleLeftOrangeStar from './svgs/MiddleLeftOrangeStar.svg';
import MiddleLeftPurpleStar from './svgs/MiddleLeftPurpleStar.svg';
import MiddleLeftPurpleStar2 from './svgs/MiddleLeftPurpleStar2.svg';


import MiddleRightYellowStar from './svgs/MiddleRightYellowStar.svg';
import MiddleRightOrangeStar from './svgs/MiddleRightOrangeStar.svg';
import MiddleRightRedStar from './svgs/MiddleRightRedStar.svg';
import MiddleRightWhiteDot from './svgs/MiddleRightWhiteDot.svg';

import BottomLeftOrangeStar from './svgs/BottomLeftOrangeStar.svg';
import BottomLeftRedStar from './svgs/BottomLeftRedStar.svg';
import BottomLeftWhiteDot from './svgs/BottomLeftWhiteDot.svg';

import BottomRightPurpleStar from './svgs/BottomRightPurpleStar.svg';
import BottomRightYellowStar from './svgs/BottomRightYellowStar.svg';

const NAFxTOP = () => {
    document.body.style.overflow = 'unset';
    const description = "CAC Transition and Orientation Program (TOP) is one of the major events organised by CAC. Filled with fun and exciting activities that vary from exploring the NTU campus and venturing around interesting spots and landmarks on the NTU campus, CAC TOP serves to facilitate freshmen around the new varsity environment as well as to foster deep and long-lasting friendships among participants. With TOP’23 coming up, CAC TOP aims to welcome undergraduates from all faculties to create a memorable experience and build long-lasting friendships!"
    const theme = ""
    const imgs = [TOP_1, TOP_2, TOP_3, TOP_4, TOP_5]
    const offSet = [{x:'0',y:'0'},{x:'0',y:'0'},{x:'0',y:'-0.5'},{x:'0',y:'0'},{x:'0',y:'0'}]
    return (
        <div class="relative bg-NAFBlue py-[50px] overflow-hidden">
            <img src={TopLeftRedStar} class="absolute top-[5%] left-[0%] w-[15%]"></img>
            <img src={TopLeftYellowStar2} class="absolute top-[0%] left-[20%] w-[6%]"></img>


            <img src={TopRightPurpleStar} class="absolute top-[4%] right-[0%]"></img>
            <img src={TopRightOrangeStar} class="hidden md:block absolute top-[-5%] right-[17%]"></img>
            <img src={TopRightWhiteDot} class="absolute top-[3%] right-[2%]"></img>

            <img src={MiddleRightYellowStar} class="absolute top-[20%] right-[0%]"></img>
            <img src={MiddleRightOrangeStar} class="absolute top-[40%] right-[0%]"></img>
            <img src={MiddleRightWhiteDot} class="hidden md:block absolute top-[60%] right-[10%]"></img>
            <img src={MiddleRightRedStar} class="hidden md:block absolute top-[70%] right-[0%]"></img>

            <img src={MiddleLeftPurpleStar} class="absolute top-[25%] left-[0%]"></img>
            <img src={MiddleLeftYellowStar} class="absolute top-[50%] left-[0%] w-[6%]"></img>
            <img src={MiddleLeftOrangeStar} class="absolute top-[60%] left-[6%] w-[12%]"></img>
            <img src={MiddleLeftPurpleStar2} class="hidden md:block absolute top-[70%] left-[20%]"></img>

            <img src={BottomLeftOrangeStar} class="hidden md:block absolute bottom-[-3%] left-[0%]"></img>
            <img src={BottomRightPurpleStar} class="hidden md:block absolute bottom-[0%] right-[15%] w-[10%]"></img>
            <img src={BottomRightYellowStar} class="absolute bottom-[9%] right-[6%] w-[10%]"></img>
            <div class='xl:w-[70%] mx-auto relative'>
                <div>
                    <img class="mx-auto" src={TOPTextLogo}></img>
                </div>
                <AboutxCAC title="About TOP" img={TOPLogo} content={description} themeTitle="THEME: Spiderhead" theme={theme}></AboutxCAC>
                <GalleryxCAC title="TOP Gallery" imgs={imgs} offSet={offSet}></GalleryxCAC>
                {/* <ThemexCAC title="THEME: Spiderhead" imgs={imgs} content={theme}></ThemexCAC> */}
                <ContactxCAC facebook="https://www.facebook.com/ntucactop" instagram="https://www.instagram.com/ntucactop" website="https://ntucac.com/transition-orientation-programme/"></ContactxCAC>
            </div>
        </div>
    )
}

export default NAFxTOP