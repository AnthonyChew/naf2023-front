import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import GlimmerLogo from './svgs/Glimmer.png'
const Glimmer = () => {
  const bgcolor = "bg-NAFBlue"
  return (
    <div class="relative bg-NAFBlue pb-20">
      <EventHeader img={GlimmerLogo} text=""></EventHeader>
      <div class="flex w-[85%] mx-auto text-center flex-wrap">
        <div class="basis-full lg:basis-1/2">
          <EventCard bgColor={bgcolor} title="PUBLICITY BOOTH" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-full lg:basis-1/2">
          <EventCard bgColor={bgcolor} title="ARTS MOVIE SCREENING" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      <div class="bg-white w-[85%] h-fit mx-auto py-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)] text-center">
        <div class="font-yerk italic text-2xl font-bold mt-2">PICCREW</div>
        <div className={"rounded-lg text-white mx-5 p-1 mt-3 " + bgcolor}>&lt;Date, time, location&gt;</div>
       
    </div>
    </div>
  )
}

export default Glimmer