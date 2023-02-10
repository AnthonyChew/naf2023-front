import React, { useState } from 'react'
import QRCode from '../Marketplace/svgs/Payment/QRCode.svg'
import OthersTextLogo from './svgs/Others/OTHERSTextLogo.png'
import EventHeader from '../Events/EventHeader'

import RightBottomPinkStar from './svgs/Others/RightBottomPinkStar.svg'
import RightBottomYellowSparkle from './svgs/Others/RightBottomYellowSparkle.svg'
import RightTopOrageBigStar from './svgs/Others/RightTopOrangeBigStar.svg'
import RightTopPurpleBigSparkle from './svgs/Others/RightTopPurpleBigSparkle.svg'
import RightTopYellowDot from './svgs/Others/RightTopYellowDot.svg'

import LeftBottomBigYellowStar from './svgs/Others/LeftBottomBigYellowStar.svg'
import LeftBottomWhiteDot from './svgs/Others/LeftBottomWhiteDot.svg'
import LeftBottomSmallPinkSparkle from './svgs/Others/LeftBottomSmallPinkSparkle.svg'
import LeftTopPinkDot from './svgs/Others/LeftTopPinkDot.svg'
import LeftTopPurpleStar from './svgs/Others/LeftTopPurpleStar.svg'
import LeftTopSmallWhiteSparkle from './svgs/Others/LeftTopSmallWhiteSparkle.svg'

import AFTH from './svgs/Others/AFTH.jpg'
import CS from './svgs/Others/CS.jpg'

const NAFxOTHERS = () => {
    document.body.style.overflow = 'unset';
    const concert = {
        0: [
            { concertName: "PIANO ENSEMBLE — ELEGANZA", concertDate: "27 FEBRUARY, 7:30PMESPLANADE | RECITAL STUDIO" }
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
        { concertName: "AFTH CARNIVAL: PRELUDE TO YOUNIVERSE", concertDate: "13-14 MARCH, 11AM | AIA CANOPY ", image:  AFTH  },
        { concertName: "CENTERSTAGE FINALS", concertDate: "16 MARCH | NANYANG AUDITORIUM ", image:  CS  }
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
            <img class='absolute bottom-[10%] -right-[5%] hidden md:block' src={RightBottomPinkStar} />
            <img class='absolute -bottom-[10%] -right-[2%]' src={RightBottomYellowSparkle} />
            <img class='absolute -top-[10%] right-[10%] hidden md:block' src={RightTopOrageBigStar} />
            <img class='absolute top-[15%] right-[5%] ' src={RightTopPurpleBigSparkle} />
            <img class='absolute top-[10%] right-[4%]' src={RightTopYellowDot} />

            <img class='absolute -bottom-[15%] left-[0%]' src={LeftBottomBigYellowStar} />
            <img class='absolute bottom-[30%] left-[10%]' src={LeftBottomWhiteDot} />
            <img class='absolute -bottom-[5%] left-[15%] hidden md:block' src={LeftBottomSmallPinkSparkle} />
            <img class='absolute top-[15%] left-[20%]' src={LeftTopPinkDot} />
            <img class='absolute -top-[8%] left-[0%] hidden md:block' src={LeftTopPurpleStar} />
            <img class='absolute top-[30%] left-[0%]' src={LeftTopSmallWhiteSparkle} />

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
                        < div class=" h-auto lg:h-80 lg:w-4/12 md:ml-5 flex items-center justify-center font-syne self-center lg:p-0 p-10" >
                            <img class='w-auto' src={special[specialActive].image} />
                        </div >
                    </div >
                </div>
            </div>
        </div>
    )
}

export default NAFxOTHERS