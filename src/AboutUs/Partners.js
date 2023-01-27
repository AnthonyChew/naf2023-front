import React from "react";

import TextLogo from './svgs/partners/TextLogo.png'
import NTUCACLogo from './svgs/partners/NTUCACLogo.svg'
import MyULifeLogo from './svgs/partners/MyULifeLogo.svg'
import CELogo from './svgs/partners/CELogo.svg'
import ActiveRed from './svgs/partners/ActiveRed.svg'
import Cloversoft from './svgs/partners/Cloversoft.svg'
import CreativeEateries from './svgs/partners/CreativeEateries.svg'
import MerchandiseMaverick from './svgs/partners/MerchandiseMaverick.svg'
import MGP from './svgs/partners/MGP.svg'
import SelfPhotoStudio from './svgs/partners/SelfPhotoStudio.svg'
import CommCube from './svgs/partners/CommCube.svg'
import AppleHeader from '../SharedPages/AppleHeader';

import Purple8Star1 from './svgs/partners/Purple8Star1.svg'
import Orange8Star1 from './svgs/partners/Orange8Star1.svg'
import Yellow4Star1 from './svgs/partners/Yellow4Star1.svg'
import Blue4Star1 from './svgs/partners/Blue4Star1.svg'
import Orange4Star1 from './svgs/partners/Orange4Star1.svg'
import Blue8Star1 from './svgs/partners/Blue8Star1.svg'
import Yellow8Star1 from './svgs/partners/Yellow8Star1.svg'
import Blue4Star2 from './svgs/partners/Blue4Star2.svg'
import Yellow8Star2 from './svgs/partners/Yellow8Star2.svg'
import Blue4Star3 from './svgs/partners/Blue4Star3.svg'
import Purple8Star2 from './svgs/partners/Purple8Star2.svg'
import Purple4Star1 from './svgs/partners/Purple4Star1.svg'
import Yellow4Star2 from './svgs/partners/Yellow4Star2.svg'
import Orange8Star2 from './svgs/partners/Orange8Star2.svg'

import BigWhiteDot from './svgs/partners/BigWhiteDot.svg'
import SmallWhiteDot from './svgs/partners/SmallWhiteDot.svg'

const Partners = () => {
    return (
        <div class="relative bg-NAFPink pt-16 pb-24 overflow-hidden">
            <img src={Purple8Star1} class="absolute w-[350px] top-[0%]"></img>
            <img src={Orange8Star1} class="hidden lg:block absolute w-[310px] -top-[3.5%] right-[2%]"></img>
            <img src={BigWhiteDot} class="hidden lg:block absolute w-[32px] top-[12%] right-[13.5%]"></img>
            <img src={Yellow4Star1} class="absolute w-[135px] top-[9.8%] right-[3.5%]"></img>
            <img src={Blue4Star1} class="z-10 hidden lg:block absolute w-[200px] top-[23.6%] left-[0%]"></img>
            <img src={SmallWhiteDot} class="z-10 hidden lg:block absolute w-[28px] top-[36%] left-[2%]"></img>
            <img src={Orange4Star1} class="z-10 absolute w-[250px] top-[41%] left-[0%]"></img>
            <img src={Blue8Star1} class="z-10 absolute w-[280px] top-[33%] right-[0%]"></img>
            <img src={Yellow8Star1} class="z-10 hidden lg:block absolute w-[170px] bottom-[34%] right-[0%]"></img>
            <img src={Blue4Star2} class="z-10 hidden lg:block absolute w-[140px] bottom-[16%] left-[2%]"></img>
            <img src={Yellow8Star2} class="z-10 absolute w-[300px] -bottom-[4%] left-[0%]"></img>
            <img src={SmallWhiteDot} class="z-10 hidden lg:block absolute w-[28px] bottom-[26%] right-[2%]"></img>
            <img src={Blue4Star3} class="z-10 hidden lg:block w-[170px] absolute bottom-[2%] right-[0%]"></img>
            <img src={Purple4Star1} class="z-10 hidden lg:block absolute w-[180px] -bottom-[4%] left-[16%]"></img>
            <img src={Yellow4Star2} class="z-10 hidden lg:block absolute w-[140px] -bottom-[2.5%] left-[46%]"></img>
            <img src={Orange8Star2} class="z-10 hidden lg:block absolute w-[270px] -bottom-[6%] right-[15%]"></img>

            <div class="relative">
                <img src={TextLogo} class="mx-auto w-[90%] lg:w-[65%]"></img>
                <p class="font-syne text-white text-center text-lg md:text-2xl pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="relative flex flex-wrap w-[90%] mx-auto text-center justify-between mt-20">
                <div class="basis-[100%] min-[900px]:basis-[35%] min-[1600px]:basis-[27%] pt-8 pb-12 mb-12 bg-white border-4 border-black rounded-2xl shadow-[5px_5px_0_0_rgba(0,0,0)]">
                    <p class="text-3xl lg:text-4xl font-syneExtraBold mb-4">Organised by</p>
                    <img src={NTUCACLogo} class="mx-auto h-[200px] lg:h-[250px]"></img>
                    <p class="text-xl font-syne">NTU Cultural Activities Club</p>
                </div>
                <div class="basis-[100%] min-[900px]:basis-[60%] min-[1600px]:basis-[40%] min-[1600px]:mx-6 pt-8 pb-12 mb-12 bg-white border-4 border-black rounded-2xl shadow-[5px_5px_0_0_rgba(0,0,0)]">
                    <p class="text-3xl lg:text-4xl font-syneExtraBold mb-4">Powered by</p>
                    <div class="flex flex-wrap px-4">
                        <div class="basis-[100%] md:basis-[50%]">
                            <div class="flex h-[200px] lg:h-[250px] justify-center">
                                <img src={MyULifeLogo} class="mx-auto w-[180px] lg:w-[222px]"></img>
                            </div>
                            <p class="text-xl font-syne">MyULife</p>
                        </div>
                        <div class="basis-[100%] md:basis-[50%]">
                            <div class="flex h-[200px] lg:h-[250px] justify-center">
                                
                            </div>
                            <p class="text-xl font-syne">Dorothy Cheung <br></br> Memorial Fund</p>
                        </div>
                    </div>
                </div>
                <div class="basis-[100%] min-[1600px]:basis-[27%] pt-8 pb-12 mb-12 bg-white border-4 border-black rounded-2xl shadow-[5px_5px_0_0_rgba(0,0,0)]">
                    <p class="text-2xl lg:text-4xl font-syneExtraBold mb-4">Official Productions Partner</p>
                </div>
            </div>

            <div class="z-20 relative w-[90%] min-h-[1000px] bg-white mx-auto mt-12 border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0)] md:shadow-[20px_20px_0_0_rgba(0,0,0)] text-center">
                <AppleHeader></AppleHeader>
                <p class="text-3xl lg:text-4xl font-syneExtraBold py-12">Sponsored By</p>
                <div class="flex flex-row min-h-[800px]">
                    <div class="basis-[50%] border-r-2 border-black pt-6">
                        <p class="text-3xl lg:text-4xl font-syne mx-auto mb-12">Gold Sponsors</p>
                        <div class="flex flex-wrap">
                            <img src={ActiveRed} class="mx-auto px-4 pb-4 w-[240px]"></img>
                            <img src={Cloversoft} class="mx-auto px-4 pb-4 w-[200px]"></img>
                            <img src={CreativeEateries} class="mx-auto px-4 pb-4 w-[240px]"></img>
                            <img src={MerchandiseMaverick} class="mx-auto px-4 pb-4 w-[240px]"></img>
                            <img src={MGP} class="mx-auto px-4 pb-4 w-[170px]"></img>
                            <img src={SelfPhotoStudio} class="mx-auto px-4 pb-4 w-[200px]"></img>
                        </div>
                    </div>
                    <div class="basis-[50%] pt-6">
                        <p class="text-3xl lg:text-4xl font-syne mx-auto mb-12">Silver Sponsors</p>
                        <img src={CommCube} class="mx-auto px-6"></img>
                    </div>
                </div>
            </div>
           
        </div>
    )
  }
  
  export default Partners