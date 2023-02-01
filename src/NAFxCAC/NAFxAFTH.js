import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import AFTHTextLogo from './svgs/AFTH/AFTHTextLogo.png'
import AFTHLogo from './svgs/AFTH/AFTHLogo.png'
import AFTHMiniAd from './svgs/AFTH/AFTHMiniAd.png'
import AFTH_1 from './svgs/AFTH/AFTH_1.jpg'
import AFTH_2 from './svgs/AFTH/AFTH_2.jpg'
import AFTH_3 from './svgs/AFTH/AFTH_3.jpg'
import AFTH_4 from './svgs/AFTH/AFTH_4.jpg'
import AFTH_5 from './svgs/AFTH/AFTH_5.jpg'
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

const NAFxAFTH = () => {
    const description = "Arts From The Heart is a Special Project under NTU CAC. Established in 2004, the NTU CAC Arts From The Heart (AFTH) is an annual Charity Project organised by the club. As the charity arm of NTU CAC, our vision is to help the less fortunate in the society by involving all our 24 member clubs and integrating each member club’s specialisation to put up an extravagant performance. Through the 18 years of operation, AFTH has supported many other non-profit organisations such as the Down Syndrome Association, Chen Su Lan Methodist Children’s Home and Asian Women’s Welfare Association – Teach Me services, Club Rainbow, Dyslexia Association of Singapore, Singapore Children’s Society, The Salvation Army, Singapore Cancer Society, Singapore Association for Mental Health and Samaritans of Singapore."
    const theme = "In our pursuit of goals and endless hustling, we often forget to take a step back and leave some time for ourselves. This year’s space-themed AFTH carnival, YOUniverse, seeks to raise awareness of mental health, while conveying the message of self-growth at one’s own pace. Our mental health journey is an individual experience that cannot be compared. In your universe, you’re free to grow in your own space and time. "
    const imgs = [AFTH_1, AFTH_2, AFTH_3, AFTH_4, AFTH_5]
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
                    <img class="mx-auto" src={AFTHTextLogo}></img>
                </div>
                <AboutxCAC title="About AFTH" img={AFTHLogo} content={description} themeTitle="THEME: YOUniverse" theme={theme}></AboutxCAC>
                <GalleryxCAC title="AFTH Gallery" imgs={imgs}></GalleryxCAC>
                {/* <ThemexCAC title="THEME: YOUniverse" imgs={imgs} content={theme}></ThemexCAC> */}
                <ContactxCAC facebook="https://www.facebook.com/cacafth" instagram="https://www.instagram.com/cac_afth" website="https://cacafth.com"></ContactxCAC>
            </div>
        </div>
    )
}

export default NAFxAFTH