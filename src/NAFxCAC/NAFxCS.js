import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import CSTextLogo from './svgs/CS/CSTextLogo.png'
import CSLogo from './svgs/CS/CSLogo_1.png'
import CSMiniAd from './svgs/CS/CSMiniAd.png'
import CS_1 from './svgs/CS/CS_1.JPG'
import CS_2 from './svgs/CS/CS_2.JPG'
import CS_3 from './svgs/CS/CS_3.JPG'
import CS_4 from './svgs/CS/CS_4.jpg'
import CS_5 from './svgs/CS/CS_5.jpg'
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

const NAFxCS = () => {
    document.body.style.overflow = 'unset';
    const description = "Organized by NTU Cultural Activities Club (CAC), CenterStage 2023 is back revamped as a campus-wide all-inclusive talent competition, seeking to unearth hidden talents amongst the NTU community by providing them with an accessible and professional platform to compete with other talents. CenterStage allows contestants to perform and showcase any form of talent, from dance and music, to even unconventional talents such as stand-up comedy and magic."
    const theme = "Our theme this year is Y2K, a popular fashion theme from the 2000s. Through this Y2K theme, we hope to give our contestants a sense of nostalgia, by bringing them back in time to relive their childhood memories, or even fulfill their childhood dreams of performing on stage!"
    const imgs = [CS_1, CS_2, CS_3, CS_4]
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
                    <img class="mx-auto" src={CSTextLogo}></img>
                </div>
                <AboutxCAC title="About CS" img={CSLogo} content={description} themeTitle="THEME: Y2K" theme={theme}></AboutxCAC>
                <GalleryxCAC title="CS Gallery" imgs={imgs}></GalleryxCAC>
                {/* <ThemexCAC title="THEME: Y2K" imgs={imgs} content={theme}></ThemexCAC> */}
                <ContactxCAC facebook="https://www.facebook.com/ntucenterstage" instagram="https://www.instagram.com/ntucenterstage" website="https://ntucac.com/centerstage/"></ContactxCAC>
            </div>
        </div>
    )
}

export default NAFxCS