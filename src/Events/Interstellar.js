import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import InterStellarLogo from './svgs/Interstellar.png'

const Interstellar = () => {
  const bgcolor="bg-NAFOrange";
  return (
    <div class="relative bg-NAFOrange pb-20">
      <EventHeader img={InterStellarLogo} text=""></EventHeader>
      <div class="flex w-[85%] mx-auto text-center">
        <div class="basis-full">
          <EventCard button="Click here to register" href="/" bgColor={bgcolor} title="REGISTER FOR INTERSTELLAR" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      <div class="flex w-[85%] mx-auto text-center">
        <div class="basis-full">
          <EventCard button="Click here to find out more" href="/workshop" bgColor={bgcolor} title="WORKSHOPS" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
    </div>
  )
}

export default Interstellar