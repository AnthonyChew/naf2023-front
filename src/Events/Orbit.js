import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import OrbitLogo from './svgs/Orbit.png'
const Orbit = () => {
  const bgcolor = "bg-NAFPink"
  return (
    <div class="relative bg-NAFPink pb-20">
      <EventHeader img={OrbitLogo} text=""></EventHeader>
      <div class="flex w-[80%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="OPHIUCHUS" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="COLLIDE" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-full">
          <EventCard button="Visit Online Marketplace" href="/marketplace" bgColor={bgcolor} title="PHYSICAL MARKETPLACE" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
    </div>
  )
}

export default Orbit