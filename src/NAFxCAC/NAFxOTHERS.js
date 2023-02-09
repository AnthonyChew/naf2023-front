import React, { useState } from 'react'
import AboutxCAC from './AboutxCAC'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import GalleryxCAC from './GalleryxCAC'
import OthersTextLogo from './svgs/Others/OTHERSTextLogo.png'
import JDCLogo from './svgs/JDC/JDCLogo.png'
import JDC_1 from './svgs/JDC/JDC_1.JPG'
import JDC_2 from './svgs/JDC/JDC_2.jpg'
import JDC_3 from './svgs/JDC/JDC_3.jpg'
import JDC_4 from './svgs/JDC/JDC_4.JPG'
import ContactxCAC from './ContactxCAC'
import EventHeader from '../Events/EventHeader'


const NAFxOTHERS = () => {
    document.body.style.overflow = 'unset';
    const concert = {
        0: [
            { concertName: "PIANO ENSEMBLE — ELEGANZA", concertDate: "27 FEBRUARY, 7:30PMESPLANADE RECITAL STUDIO" }
        ],
        1: [
            {
                concertName: "HARMONICA BAND — VIVACE", concertDate: "18 MARCH, 7PM | NANYANG AUDITORIUM"
            },
            { concertName: "CHOIR — CANTEMUS", concertDate: "5 MARCH, 7:30PM | SOTA CONCERT HALL" },
            { concertName: "CHINESE ORCHESTRA TRANSIENT REMINISCENCE: TIMELESS 25", concertDate: "19, MARCH, 7PM I ESPLANADE CONCERT HALL" },
            { concertName: "JAZZ AND BLUES — HOURGLASS", concertDate: "26 MARCH, 5PM1 I LT:9A" }
        ],
        2: [
            { concertName: "SYMPHONIC BAND — SOJOURN", concertDate: "2 APRIL, 7PM | SOTA" },
            { concertName: "GUITAR ENSEMBLE — NOCTURNE", concertDate: "2 APRIL, 7:30PM | NAFA FOUNDATION THEATRE" }]
    }

    const special = [
        { concertName: "AFTH CARNIVAL: PRELUDE TO YOUNIVERSE", concertDate: "13-14 MARCH, 11AM | AIA CANOPY ", image: { QRCode } },
        { concertName: "CENTERSTAGE FINALS", concertDate: "16 MARCH | NANYANG AUDITORIUM ", image: { QRCode } }
    ]



    const classNames = {
        tabActive: " bg-white pt-1 border-t-2 border-l-2 border-r-2 border-black",
        tabInactive:
            "bg-gray-300 pt-1 mt-1",
    };
    const [active, setActive] = useState(0);

    const [specialActive, setSpecialActive] = useState(0);

    const renderText = (array) => {
        return (array.map(concert =>
            <div class="text-left self-start font-syne">
                <p class="text-subheader">{concert.concertName}</p>
                <p class="md:text-paragraph_Desktop text-paragraph_Mobile">{concert.concertDate}</p>
            </div>))
    }

    return (
        <div class="relative bg-NAFBlue overflow-hidden">

            <div class='xl:w-[70%] mx-auto relative'>
                <EventHeader headerStyle='' img={OthersTextLogo}></EventHeader>
                <div class="w-[90%] lg:w-[80%] h-fit mx-auto mb-2 pb-10">
                    < div class="z-10 relative flex w-full" >
                        <div
                            onClick={() => setActive(0)}
                            class={`${active === 0 ? classNames.tabActive : classNames.tabInactive
                                } text-paragraph_Desktop w-[32%] sm:w-[17%] px-1 lg:px-5 font-syne text-center cursor-pointer`}
                        >
                            FEB
                        </div>
                        <div
                            onClick={() => setActive(1)}
                            class={`${active === 1 ? classNames.tabActive : classNames.tabInactive
                                } text-paragraph_Desktop  w-[32%] sm:w-[17%] font-syne text-center cursor-pointer`}
                        >
                            MAR
                        </div>
                        <div
                            onClick={() => setActive(2)}
                            class={`${active === 2 ? classNames.tabActive : classNames.tabInactive
                                } text-paragraph_Desktop  w-[32%] sm:w-[17%] font-syne text-center cursor-pointer`}
                        >
                            APR
                        </div>
                    </div >

                    < div class="z-10 relative flex flex-col item border-solid gap-5 bg-white border-2 border-black w-full lg:w-auto shadow-[10px_10px_0_0_rgba(0,0,0)] p-[5%] md:shadow-[20px_20px_0_0_rgba(0,0,0)]" >

                        {active === 0
                            ? renderText(concert[0])
                            : active === 1 ? renderText(concert[1]) :
                                renderText(concert[2])}

                    </div >
                </div>

                <div class="w-[90%] lg:w-[80%] h-fit mx-auto mb-2 pb-10">

                    < div class="z-10 relative flex w-full" >
                        <div
                            onClick={() => setSpecialActive(0)}
                            class={`${specialActive === 0 ? classNames.tabActive : classNames.tabInactive
                                } text-paragraph_Desktop w-[32%] sm:w-[17%] px-1 lg:px-5 font-syne text-center cursor-pointer`}
                        >
                            AFTH
                        </div>
                        <div
                            onClick={() => setSpecialActive(1)}
                            class={`${specialActive === 1 ? classNames.tabActive : classNames.tabInactive
                                } text-paragraph_Desktop  w-[32%] sm:w-[17%] font-syne text-center cursor-pointer`}
                        >
                            CS
                        </div>
                    </div >

                    < div class="z-10 relative flex lg:flex-row flex-col items-center border-solid bg-white border-2 border-black w-full lg:w-auto shadow-[10px_10px_0_0_rgba(0,0,0)] p-[5%] md:shadow-[20px_20px_0_0_rgba(0,0,0)] text-center" >

                        {/* Text Area */}
                        < div class=" flex lg:w-8/12 flex-col gap-y-2 sm:gap-y-5" >
                            <p class="text-header flex font-syne justify-center lg:justify-start text-left">
                                {special[specialActive].concertName}
                            </p>
                            <p class="text-left text-[10px] text-paragraph_Mobile md:text-paragraph_Desktop font-syne">

                                {special[specialActive].concertDate}
                            </p>
                        </div >
                        {/* Image */}
                        < div class=" h-auto lg:h-80 lg:w-4/12 mr-[8%] flex items-center justify-center font-syne self-center lg:p-0 p-10" >
                            <img class='overflow-y-auto' src={special[specialActive].image} />
                        </div >
                    </div >
                </div>
            </div>
        </div>
    )
}

export default NAFxOTHERS