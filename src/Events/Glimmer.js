import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import EventImagesCard from './EventImagesCard'
import GlimmerLogo from './svgs/Glimmer.png'
const Glimmer = () => {
  const bgcolor = "bg-NAFBlue"
  const imgs = [1,2,3,4]
  return (
    <div class="relative bg-NAFBlue pb-20">
      <EventHeader img={GlimmerLogo} text=""></EventHeader>
      <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="PUBLICITY BOOTH" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="ARTS MOVIE SCREENING" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      <EventImagesCard button="Visit Picrew" href="/pi crew" bgColor={bgcolor} title="PICREW" date="<Date, time, location>" imgs={imgs} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventImagesCard>

    </div>
  )
}

export default Glimmer