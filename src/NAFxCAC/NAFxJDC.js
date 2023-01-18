import React from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import AFTHLogo from './svgs/AFTHLogo.png'
import ThemexCAC from './ThemexCAC'
import ContactxCAC from './ContactxCAC'
const NAFxJDC = () => {
    const text = "urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis"
    const imgs = [1,2,3,4]
    return (
        <div class="relative bg-NAFBlue py-[50px]">
            <div>
                <img class="mx-auto" src={AFTHLogo}></img>
            </div>
            <AboutxCAC title="About AFTH" img={QRCode} content={text}></AboutxCAC>
            <GalleryxCAC title="AFTH Gallery"></GalleryxCAC>
            <ThemexCAC title="THEME: AFTH" imgs={imgs} content={text}></ThemexCAC>
            <ContactxCAC facebook="www.facebook.com" instagram="www.instagram.com" email="email.com"></ContactxCAC>
        </div>
    )
}

export default NAFxJDC