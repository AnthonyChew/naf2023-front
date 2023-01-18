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
          <EventCard bgColor={bgcolor} title="OPHIUCHUS" date="9 March, 7:30pm to 9:30pm, Nanyang Auditorium" content="Come enjoy a night of performances at Ophiuchus. Our very own NTU students will be there showcasing their musical talents. With 10 performances lined up, it would be an exciting night ahead! Grab tickets with your friends for just $5. Ticket sales will be donated to our beneficiaries SOS and SAMH."></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="COLLIDE" date="6 to 8 March, 11am to 6pm, Linkway" content="In the collision of worlds, Collide showcases physical arts with interactive elements like throwing balls dipped in paint to create a community art piece! If you are less for the physical collide, a mental collision of beautiful poetry and artworks from NTU students will be exhibited at the showcase as well, and you can come to admire them."></EventCard>
        </div>
      </div>
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-full">
          <EventCard button="Visit Online Marketplace" href="/marketplace" bgColor={bgcolor} title="PHYSICAL MARKETPLACE" date="20 February 2023 to 24 February 2023, 6 March 2023 to 10 March 2023, 15 to 17 March 2023, 11:00pm - 5:00pm, The Green Space @ North Spine" content="NAF Arts Market is a creative and craftswork bazaar meant to show off the artistry of local students and expose NTU to various art mediums. Home to over 30 vendors, students get to interact with these unique artists both in person and online over at the NAF 2023 website. Additionally, we will be having a photo booth where you can come and make fun memories with your friends! So come on down and enjoy a variety of talent, from candles to little trinkets to crochet!"></EventCard>
        </div>
      </div>
    </div>
  )
}

export default Orbit