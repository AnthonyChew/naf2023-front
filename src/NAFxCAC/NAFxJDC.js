import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import JDCTextLogo from './svgs/JDC/JDCTextLogo.png'
import JDCLogo from './svgs/JDC/JDCLogo.png'
import JDCMiniAd from './svgs/JDC/JDCMiniAd.png'
import JDC_1 from './svgs/JDC/JDC_1.JPG'
import JDC_2 from './svgs/JDC/JDC_2.jpg'
import JDC_3 from './svgs/JDC/JDC_3.jpg'
import JDC_4 from './svgs/JDC/JDC_4.JPG'
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

const NAFxJDC = () => {
    document.body.style.overflow = 'unset';
    const description = "Joint Dance Concert (JDC) is NTU’s largest and most highly anticipated annual dance concert featuring the nine dance clubs of CAC. Over the years, JDC has continuously achieved the impressive feat of being a sold-out concert, as a result of providing captivating performances for audience members Since its inaugural concert in 2007, JDC has been providing a platform for our talented dancers to showcase their skills while pursuing their passion in dance, alongside offering an opportunity for all others to cultivate their appreciation for this form of art. As Singapore transitioned towards endemic living in the past year, JDC 2022 successfully delivered its first live concert, after two years of online productions due to COVID-19 restrictions. With JDC 2023 right around the corner, we aim to continue offering an authentic experience to dancers and audience members alike through another live show."
    const theme = "An old showman, who makes a living capitalising off the odd powers of his performers, uses his dark magic to give life to a puppet. Follow Alice’s discovery of the tale of Pinocchio – the puppet that was turned into a boy, and journey alongside Pinocchio in the retelling of how his life came to be. Alice’s encounter with fairytales is few and far between, but it seems she may find out that these stories are not as fictional as they seem."
    const imgs = [JDC_1, JDC_2, JDC_3, JDC_4]
    return (
        <div class="relative bg-NAFBlue py-[50px] relative overflow-hidden">
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
                    <img class="mx-auto" src={JDCTextLogo}></img>
                </div>
                <AboutxCAC title="About JDC" img={JDCLogo} content={description} themeTitle="THEME: Stories After Dark" theme={theme}></AboutxCAC>
                <GalleryxCAC title="JDC Gallery" imgs={imgs}></GalleryxCAC>
                {/* <ThemexCAC title="THEME: Stories After Dark" imgs={imgs} content={theme}></ThemexCAC> */}
                <ContactxCAC facebook="https://www.facebook.com/JointDanceConcert" instagram="https://www.instagram.com/ntucacjdc" website="https://www.cac-jdc.com/"></ContactxCAC>
            </div>
        </div>
    )
}

export default NAFxJDC