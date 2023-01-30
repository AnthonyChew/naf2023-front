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
const NAFxJDC = () => {
    const description = "Joint Dance Concert (JDC) is NTU’s largest and most highly anticipated annual dance concert featuring the nine dance clubs of CAC. Over the years, JDC has continuously achieved the impressive feat of being a sold-out concert, as a result of providing captivating performances for audience members Since its inaugural concert in 2007, JDC has been providing a platform for our talented dancers to showcase their skills while pursuing their passion in dance, alongside offering an opportunity for all others to cultivate their appreciation for this form of art. As Singapore transitioned towards endemic living in the past year, JDC 2022 successfully delivered its first live concert, after two years of online productions due to COVID-19 restrictions. With JDC 2023 right around the corner, we aim to continue offering an authentic experience to dancers and audience members alike through another live show."
    const theme = "An old showman, who makes a living capitalising off the odd powers of his performers, uses his dark magic to give life to a puppet. Follow Alice’s discovery of the tale of Pinocchio – the puppet that was turned into a boy, and journey alongside Pinocchio in the retelling of how his life came to be. Alice’s encounter with fairytales is few and far between, but it seems she may find out that these stories are not as fictional as they seem."
    const imgs = [JDC_1,JDC_2,JDC_3,JDC_4]
    return (
        <div class="relative bg-NAFBlue py-[50px]">
            <div>
                <img class="mx-auto" src={JDCTextLogo}></img>
            </div>
            <AboutxCAC title="About JDC" img={JDCLogo} content={description}></AboutxCAC>
            <GalleryxCAC title="JDC Gallery" imgs={imgs}></GalleryxCAC>
            <ThemexCAC title="THEME: Stories After Dark" imgs={imgs} content={theme}></ThemexCAC>
            <ContactxCAC facebook="www.facebook.com/JointDanceConcert" instagram="www.instagram.com/ntucacjdc" email="email.com"></ContactxCAC>
        </div>
    )
}

export default NAFxJDC