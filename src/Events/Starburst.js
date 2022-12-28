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
                    <EventCard bgColor={bgcolor} title="NTU EXPLO" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
                </div>
                <div class="basis-full lg:basis-[30%]">
                    <EventCard bgColor={bgcolor} title="SOUPER NOUA" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
                </div>
                <div class="basis-full lg:basis-[30%]">
                    <EventCard bgColor={bgcolor} title="LUCKY DRAW" date="<Date, time, location>" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
                </div>
            </div>
            <EventImagesCard bgColor={bgcolor} title="NTU EXPLO: POETRY SUPERBOWL" date="<Date, time, location>" imgs={imgs} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventImagesCard>
            <div class="mt-10"></div>
            <EventImagesCard bgColor={bgcolor} title="STYLE IT IN YOUR STYLE" date="<Date, time, location>" imgs={imgs} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventImagesCard>
        </div>
    )
}

export default Starburst