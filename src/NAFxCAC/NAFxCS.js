import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import CSTextLogo from './svgs/CS/CSTextLogo.png'
import CSLogo from './svgs/CS/CSLogo.png'
import CSMiniAd from './svgs/CS/CSMiniAd.png'
import CS_1 from './svgs/CS/CS_1.JPG'
import CS_2 from './svgs/CS/CS_2.JPG'
import CS_3 from './svgs/CS/CS_3.JPG'
import CS_4 from './svgs/CS/CS_4.jpg'
import CS_5 from './svgs/CS/CS_5.jpg'
import ThemexCAC from './ThemexCAC'
import ContactxCAC from './ContactxCAC'
const NAFxCS = () => {
    const description = "Organized by NTU Cultural Activities Club (CAC), CenterStage 2023 is back revamped as a campus-wide all-inclusive talent competition, seeking to unearth hidden talents amongst the NTU community by providing them with an accessible and professional platform to compete with other talents. CenterStage allows contestants to perform and showcase any form of talent, from dance and music, to even unconventional talents such as stand-up comedy and magic."
    const theme = "Our theme this year is Y2K, a popular fashion theme from the 2000s. Through this Y2K theme, we hope to give our contestants a sense of nostalgia, by bringing them back in time to relive their childhood memories, or even fulfill their childhood dreams of performing on stage!"
    const imgs = [CS_1,CS_2,CS_3,CS_4]
    return (
        <div class="relative bg-NAFBlue py-[50px]">
            <div>
                <img class="mx-auto" src={CSTextLogo}></img>
            </div>
            <AboutxCAC title="About CS" img={CSLogo} content={description}></AboutxCAC>
            <GalleryxCAC title="CS Gallery" imgs={imgs}></GalleryxCAC>
            <ThemexCAC title="THEME: Y2K" imgs={imgs} content={theme}></ThemexCAC>
            <ContactxCAC facebook="www.facebook.com/ntucenterstage" instagram="www.instagram.com/ntucenterstage" email="email.com"></ContactxCAC>
        </div>
    )
}

export default NAFxCS