import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import EventImagesCard from './EventImagesCard'
import StarBurstLogo from './svgs/Starburst.png'

const Starburst = () => {
    const bgcolor = "bg-NAFYellow"
    const imgs = [1, 2, 3, 4]

    return (
        <div class="relative bg-NAFYellow pb-20">
            <EventHeader img={StarBurstLogo} text="" bgColor="bg-NAFYellow"></EventHeader>
            <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
                <div class="basis-full lg:basis-[30%]">
                    <EventCard bgColor={bgcolor} title="NTU EXPLO" date="6 to 10 Mar, 11am to 5pm, NTU Marketplace" content="Want to burst out of your comfort zone and view some out-of-this-world exhibitions? Our NTU Explo! will be featuring just that. With interactive booths and fun drop-in activities for everyone, we're sure your experience will be explosively fun!"></EventCard>
                </div>
                <div class="basis-full lg:basis-[30%]">
                    <EventCard bgColor={bgcolor} title="SOUPERNOVA" date="7 March 2023, 11am to 5pm, Foyer @ LT1" content="Craft your very own “galaxy in a bowl” using slime and other materials in Souper-nova! All materials will be provided — join us for an engaging and tactile sensory activity that is sure to provide a breather from your busy life."></EventCard>
                </div>
                <div class="basis-full lg:basis-[30%]">
                    <EventCard bgColor={bgcolor} title="LUCKY DRAW" date="<Date, time, location>" content="Participated in any of our activities? Scan the related QR codes upon completion in order to join our lucky draw and stand a chance to win attractive prizes!"></EventCard>
                </div>
            </div>
            <EventImagesCard bgColor={bgcolor} title="NTU EXPLO: POETRY SUPERBOWL" date="6-10 March 2023, 11am to 5pm, Foyer @ LT1" imgs={imgs} content="Kopi Raur, eat your heart out! We're looking for our next poetry superstar in the making. Pen down a short, free-verse poem and get one by your fellow students in return!"></EventImagesCard>
            <div class="mt-10"></div>
            <EventImagesCard bgColor={bgcolor} title="STYLE IT IN YOUR STYLE" date="14 - 17 February, 11am - 5pm, Linkway" imgs={imgs} content='Think you’ve got what it takes to be our next trendsetter? Embrace your inner fashion guru and design your own version of the NAF mascot following the theme "Starry, Starry Night" for a chance to win awesome prizes!'></EventImagesCard>
        </div>
    )
}

export default Starburst