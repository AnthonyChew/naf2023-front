import React, {useState, useEffect} from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import EventImagesCard from './EventImagesCard'
import StarBurstLogo from './svgs/Starburst2.png'

import TopRightPurpleStar from './svgs/Starburst/TopRightPurpleStar.svg';
import TopLeftBlueStar from './svgs/Starburst/TopLeftBlueStar.svg';

import MiddleLeftRedStar from './svgs/Starburst/MiddleLeftRedStar.svg';
import MiddleLeftWhiteDot from './svgs/Starburst/MiddleLeftWhiteDot.svg';

import MiddleRightBlueStar from './svgs/Starburst/MiddleRightBlueStar.svg';
import MiddleRightOrangeStar from './svgs/Starburst/MiddleRightOrangeStar.svg';
import MiddleRightPurpleStar from './svgs/Starburst/MiddleRightPurpleStar.svg';
import MiddleRightWhiteDot from './svgs/Starburst/MiddleRightWhiteDot.svg';

import BottomLeftOrangeStar from './svgs/Starburst/BottomLeftOrangeStar.svg';
import BottomRightRedStar from './svgs/Starburst/BottomRightRedStar2.svg';

import config from '../config/env';
import { trackPromise } from 'react-promise-tracker';
import imageService from '../services/images';

const Starburst = () => {
    const bgcolor = "bg-NAFYellow";
    const [superbowlImages, setSuperbowl] = useState([]);
    const [styleItImages, setStyleItImages] = useState([]);

  
    useEffect(() => {
      async function fetchAllImage() {
        const res = await trackPromise(imageService.getVerifiedImages());
        if (res.status === 200) {
          //console.log(res.data)
          setSuperbowl(res.data.filter(image => image.workShopName.includes(config.events.PoetrySuperbowl)));
          setStyleItImages(res.data.filter(image => image.workShopName.includes(config.events.StyleIt)));
        }
      }
      fetchAllImage();
    }, []);
    

    document.body.style.overflow = 'unset';
    return (
        <div class="relative bg-NAFYellow pb-20">
            <img src={TopLeftBlueStar} class="hidden md:block absolute top-[0%] left-[0%]"></img>
            <img src={TopRightPurpleStar} class="hidden md:block absolute top-[0%] right-[2%]"></img>

            <img src={MiddleLeftRedStar} class="absolute top-[31%] left-[0%]"></img>
            <img src={MiddleLeftWhiteDot} class="absolute top-[30%] left-[3%]"></img>

            <img src={MiddleRightOrangeStar} class="hidden md:block absolute top-[34%] right-[0%]"></img>

            <img src={MiddleRightBlueStar} class="hidden md:block absolute top-[65%] right-[0%]"></img>
            <img src={MiddleRightWhiteDot} class="absolute top-[62%] right-[3%]"></img>

            <img src={MiddleRightPurpleStar} class="hidden md:block absolute top-[51%] left-[0%]"></img>

            <img src={BottomLeftOrangeStar} class="hidden md:block absolute bottom-[-3%] left-[0%] w-[15%]"></img>
            <img src={BottomRightRedStar} class="hidden md:block absolute bottom-[10%] right-[0%]"></img>




            <div class='md:w-[70%] mx-auto'>
                <EventHeader img={StarBurstLogo} text="Join us for Starburst, where you'll get to participate in the various activities we have lined up for you, ranging from slime making to interactive art exhibitions!" bgColor="bg-NAFYellow"></EventHeader>
                <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
                    <div class="basis-full lg:basis-[55%]">
                        <EventCard bgColor={bgcolor} title="NTU EXPLO" date={"6 to 10 Mar, 11am to 5pm\nNTU Marketplace"} content="Want to burst out of your comfort zone and view some out-of-this-world exhibitions? Our NTU Explo! will be featuring just that. With interactive booths and fun drop-in activities for everyone, we're sure your experience will be explosively fun!"></EventCard>
                    </div>
                    <div class="basis-full lg:basis-[40%]">
                        <EventCard bgColor={bgcolor} title="SOUPERNOVA" date={"7 March 2023, 11am to 5pm\nFoyer @ LT1"} content="Craft your very own “galaxy in a bowl” using slime and other materials in Souper-nova! All materials will be provided — join us for an engaging and tactile sensory activity that is sure to provide a breather from your busy life."></EventCard>
                    </div>
                    {/* <div class="basis-full lg:basis-[30%]">
                        <EventCard bgColor={bgcolor} title="LUCKY DRAW" date={"8 February - 8 March 2023, 2359hrs"} content="Stand a chance to win attractive prizes in our lucky draw by following our Instagram page, attending workshops, or supporting our online Marketplace!"></EventCard>
                    </div> */}
                </div>
                <div class="w-[85%] mx-auto">
                    {/* remove noOfImgs and change the .map in imagescard to use props.img when got images already */}
                <EventImagesCard bgColor={bgcolor} title="NTU EXPLO: POETRY SUPERBOWL" date={"6-10 March 2023, 11am to 5pm\nFoyer @ LT1"} imgs={superbowlImages} noOfImgs={[1,2,3,4]} content="Kopi Raur, eat your heart out! We're looking for our next poetry superstar in the making. Pen down a short, free-verse poem and get one by your fellow students in return!"></EventImagesCard>
                <div class="mt-10"></div>
                <EventImagesCard bgColor={bgcolor} title="STYLE IT IN YOUR STYLE" date={"14 - 17 February, 11am - 5pm\nSouth Spine"} imgs={styleItImages} noOfImgs={[1,2,3,4]} content='Think you’ve got what it takes to be our next trendsetter? Embrace your inner fashion guru and design your own version of the NAF mascot following the theme "Starry, Starry Night" for a chance to win awesome prizes!'></EventImagesCard>
          
                </div>
           </div>
        </div>
    )
}

export default Starburst