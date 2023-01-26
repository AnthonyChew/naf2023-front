import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import AFTHTextLogo from './svgs/AFTHTextLogo.png'
import AFTHLogo from './svgs/AFTHLogo.png'
import AFTHMiniAd from './svgs/AFTHMiniAd.png'
import AFTH_1 from './svgs/AFTH_1.jpg'
import AFTH_2 from './svgs/AFTH_2.jpg'
import AFTH_3 from './svgs/AFTH_3.jpg'
import AFTH_4 from './svgs/AFTH_4.jpg'
import AFTH_5 from './svgs/AFTH_5.jpg'
import ThemexCAC from './ThemexCAC'
import ContactxCAC from './ContactxCAC'
const NAFxAFTH = () => {
    const description = "Arts From The Heart is a Special Project under NTU CAC. Established in 2004, the NTU CAC Arts From The Heart (AFTH) is an annual Charity Project organised by the club. As the charity arm of NTU CAC, our vision is to help the less fortunate in the society by involving all our 24 member clubs and integrating each member club’s specialisation to put up an extravagant performance. Through the 18 years of operation, AFTH has supported many other non-profit organisations such as the Down Syndrome Association, Chen Su Lan Methodist Children’s Home and Asian Women’s Welfare Association – Teach Me services, Club Rainbow, Dyslexia Association of Singapore, Singapore Children’s Society, The Salvation Army, Singapore Cancer Society, Singapore Association for Mental Health and Samaritans of Singapore."
    const theme = "In our pursuit of goals and endless hustling, we often forget to take a step back and leave some time for ourselves. This year’s space-themed AFTH carnival, YOUniverse, seeks to raise awareness of mental health, while conveying the message of self-growth at one’s own pace. Our mental health journey is an individual experience that cannot be compared. In your universe, you’re free to grow in your own space and time. "
    const imgs = [1,2,3,4]
    return (
        <div class="relative bg-NAFBlue py-[50px]">
            <div>
                <img class="mx-auto" src={AFTHTextLogo}></img>
            </div>
            <AboutxCAC title="About AFTH" img={AFTHLogo} content={description}></AboutxCAC>
            <GalleryxCAC title="AFTH Gallery"></GalleryxCAC>
            <ThemexCAC title="THEME: YOUniverse" imgs={imgs} content={theme}></ThemexCAC>
            <ContactxCAC facebook="www.facebook.com/cacafth" instagram="www.instagram.com/cac_afth" email="email.com"></ContactxCAC>
        </div>
    )
}

export default NAFxAFTH