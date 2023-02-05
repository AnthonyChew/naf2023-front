import React from 'react'
import DirectorNoteLogo from './svgs/DirectorNote/DirectorNoteLogo.png';

import TopLeftOrangeStar from './svgs/DirectorNote/TopLeftOrangeStar.svg';
import TopLeftWhiteDot from './svgs/DirectorNote/TopLeftWhiteDot.svg';
import TopLeftWhiteStar from './svgs/DirectorNote/TopLeftWhiteStar.svg';
import TopLeftRedStar from './svgs/DirectorNote/TopLeftRedStar.svg';

import TopRightOrangeStar from './svgs/DirectorNote/TopRightOrangeStar.svg';
import TopRightWhiteDot from './svgs/DirectorNote/TopRightWhiteDot.svg';
import TopRightWhiteStar from './svgs/DirectorNote/TopRightWhiteStar.svg';

import BottomLeftRedStar from './svgs/DirectorNote/BottomLeftRedStar2.svg';
import BottomLeftYellowStar from './svgs/DirectorNote/BottomLeftYellowStar.svg';

import BottomRightRedDot from './svgs/DirectorNote/BottomRightRedDot.svg';
import BottomRightBlueStar from './svgs/DirectorNote/BottomRightBlueStar.svg';
import BottomRightYellowStar from './svgs/DirectorNote/BottomRightYellowStar.svg';
import BottomRightWhiteStar from './svgs/DirectorNote/BottomRightWhiteStar.svg';



const DirectorNote = () => {
    return (
        <div class="bg-NAFPurple bg-cover relative py-20 pb-40">
            <img src={TopLeftOrangeStar} class="hidden lg:block absolute top-[10%] left-[2%]"></img>
            <img src={TopLeftWhiteDot} class="absolute top-[2%] left-[2%]"></img>
            <img src={TopLeftWhiteStar} class="absolute top-[30%] left-[2%]"></img>
            <img src={TopLeftRedStar} class="hidden md:block absolute top-[-12%] left-[5%] w-[20%]"></img>

            <img src={TopRightOrangeStar} class="absolute top-[25%] right-[0%] w-[12%]"></img>
            <img src={TopRightWhiteDot} class="absolute top-[34%] right-[12%]"></img>
            <img src={TopRightWhiteStar} class="hidden md:block absolute top-[40%] right-[0%]"></img>

            <img src={BottomLeftRedStar} class="hidden md:block absolute bottom-[20%] left-[0%]"></img>
            <img src={BottomLeftYellowStar} class="absolute bottom-[0%] left-[0%] w-[15%]"></img>

            <img src={BottomRightRedDot} class="absolute bottom-[6%] right-[15%] w-[3%]"></img>
            <img src={BottomRightBlueStar} class="absolute bottom-[5%] right-[0%] w-[15%]"></img>
            <img src={BottomRightYellowStar} class="absolute bottom-[20%] right-[0%] w-[5%]"></img>
            <img src={BottomRightWhiteStar} class="hidden md:block absolute bottom-[17%] right-[10%]"></img>





            <div class='relative z-10'>
                <div class="flex relative flex-col items-center">
                    <img class="my-10 w-[80%] lg:w-[40%]" src={DirectorNoteLogo}></img>
                </div>
                <div class="w-[90%] md:w-[75%] mx-auto font-syne text-white">
                    <div class="mt-5 text-paragraph_Mobile md:text-paragraph_Desktop">It is a great pleasure to welcome you to the return of NTU Arts Festival (NAF)! This year, NAF is guided by our theme Supernova, which celebrates the brilliant, blazing return of the local arts scene while emphasising the role of the arts as bridges between NTU's diverse communities; Through celebrating the arts in unity, we hope to nurture a collaborative spirit between students, artists, and performers alike. In creating NAF's 4 main programme segments, the committee has worked tirelessly for the past six months to plan and curate exciting activities for the student body to enjoy, in hopes of presenting each and every student with an opportunity to discover an appreciation for the arts. NAF is a dazzling celebration of our diverse arts scene, featuring CAC Member Clubs, arts and cultural groups from the NTU community, Halls of Residences, and National Institute of Education. </div>
                    <div class="mt-20 text-paragraph_Mobile md:text-paragraph_Desktop">This edition of NAF maintains its hybrid status, making use of virtual elements to complement and further elevate the exciting return to fully physical activities; We are happy to present this year's performances beyond the screen in a live showcase, as are we to finally bring NAF's arts marketplace to you in-person. In collaboration with CAC's Arts From the Heart (AFTH), 10% of proceeds from the arts market will go towards supporting our beneficiaries of Samaritans of Singapore and Singapore Association for Mental Health, in-line with the festival's consistent commitment to give back to the community at large.</div>
                    <div class="mt-20 text-paragraph_Mobile md:text-paragraph_Desktop">To the following teams: NTU Student Affairs Office, Dorothy Cheung Memorial Fund, CAC Member Clubs, Special Projects, Support Committees, and our beloved instructors and performers; We express our deepest gratitude for your generous and heartening support, without which NAF would not be possible. And of course, a thank you to my beloved NAF committee for your creativity, diligence, and dedication, that have provided all of the star-power for our very own supernova.</div>
                    <div class="mt-20 text-paragraph_Mobile md:text-paragraph_Desktop">NAF features a variety of programmes for all levels of artistic expertise and all to enjoy. Don't miss out on making your NAF experience uniquely you by dressing up our mascot in Style This In your Style, shop to your heart's content while supporting small, local artisans at the Arts Market, bask in out-of-this-world music and dances put up by our talented NTU community at Ophiuchus, and so much more. We sincerely hope to see you at NAF 2023!</div>
                    <div class="mt-20 text-paragraph_Mobile md:text-paragraph_Desktop">See you Space Cowboy,</div>
                    <div class="mt-10 font-bold text-paragraph_Mobile md:text-paragraph_Desktop">Neo Yi Teng</div>
                    <div class="text-paragraph_Mobile md:text-paragraph_Desktop">Special Project Director <br></br>NTU Arts Festival</div>


                </div>
            </div>
        </div>
    )
}

export default DirectorNote