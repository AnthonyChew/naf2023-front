import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import EventImagesCard from './EventImagesCard'
import GlimmerLogo from './svgs/Glimmer2.png'
const Glimmer = () => {
  const bgcolor = "bg-NAFBlue"
  const imgs = [1,2,3,4]
  return (
    <div class="relative bg-NAFBlue pb-20">
      <EventHeader img={GlimmerLogo} text="Starting the festival off with a glimmer of what is to come, Glimmer features our publicity booth and an Arts Movie Screening. Participate in Style This In Your Style, where you get to design your own version of our mascot, and learn more about NAF! Pop by our Arts Movie Screening to catch a movie"></EventHeader>
      {/* <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="PUBLICITY BOOTH" date="14 to 17 Feb, 11am to 5pm, Concourse area @ South Spine" content="Come down to our publicity booth at Linkway to learn more about our upcoming events!"></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="ARTS MOVIE SCREENING" date="24 Feb, 5pm to 10pm, LT1A" content="Join us for a night of unforgettable movies will "></EventCard>
        </div>
      </div> */}
      <EventImagesCard button="Visit Picrew" href="/picrew" bgColor={bgcolor} title="CREATE YOUR OWN PICREW" date="8 Feb to 17 Mar, Online" imgs={imgs} content="Come try out our NAF Picrew, where you'll get to dress up our very own NAF mascot in your own custom outfits and share them on social media!"></EventImagesCard>

    </div>
  )
}

export default Glimmer