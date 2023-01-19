import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import OrbitLogo from './svgs/Orbit.png'
import { Link, useNavigate } from 'react-router-dom'
const Orbit = () => {
  const bgcolor = "bg-NAFPink"

  const content = [{
    title: "test",
    desc: "sdadasda"
  }, {


    title: "test",
    desc: "booo"
  },
  {
    title: "test",
    desc: "sdadasda"
  }, {


    title: "test",
    desc: "booo"
  }]
  return (
    <div class="relative bg-NAFPink pb-20">
      <EventHeader img={OrbitLogo} text=""></EventHeader>
      <div class="flex w-[80%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="PHYSICAL ARTS MARKET" date="9 March, 7:30pm to 9:30pm, Nanyang Auditorium" content="Come enjoy a night of performances at Ophiuchus. Our very own NTU students will be there showcasing their musical talents. With 10 performances lined up, it would be an exciting night ahead! Grab tickets with your friends for just $5. Ticket sales will be donated to our beneficiaries SOS and SAMH."></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="ONLINE ARTS MARKET" date="6 to 8 March, 11am to 6pm, Linkway" content="In the collision of worlds, Collide showcases physical arts with interactive elements like throwing balls dipped in paint to create a community art piece! If you are less for the physical collide, a mental collision of beautiful poetry and artworks from NTU students will be exhibited at the showcase as well, and you can come to admire them."></EventCard>
        </div>
      </div>
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-full">
          <EventCard bgColor={bgcolor} title="BRILLIANCE" date="20 February 2023 to 24 February 2023, 6 March 2023 to 10 March 2023, 15 to 17 March 2023, 11:00pm - 5:00pm, The Green Space @ North Spine" content="NAF Arts Market is a creative and craftswork bazaar meant to show off the artistry of local students and expose NTU to various art mediums. Home to over 30 vendors, students get to interact with these unique artists both in person and online over at the NAF 2023 website. Additionally, we will be having a photo booth where you can come and make fun memories with your friends! So come on down and enjoy a variety of talent, from candles to little trinkets to crochet!"></EventCard>
        </div>
      </div>
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-full">
          <EventCard bgColor={bgcolor} title="COLLIDE" date="20 February 2023 to 24 February 2023, 6 March 2023 to 10 March 2023, 15 to 17 March 2023, 11:00pm - 5:00pm, The Green Space @ North Spine" content="NAF Arts Market is a creative and craftswork bazaar meant to show off the artistry of local students and expose NTU to various art mediums. Home to over 30 vendors, students get to interact with these unique artists both in person and online over at the NAF 2023 website. Additionally, we will be having a photo booth where you can come and make fun memories with your friends! So come on down and enjoy a variety of talent, from candles to little trinkets to crochet!"></EventCard>
        </div>
      </div>
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-full">
          <div class="min-h-[300px] bg-white w-[100%] h-fit pb-5 mb-10 lg:mb-[5rem] py-2 pt-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)]">
            <div class="font-syneExtraBold text-2xl font-bold mt-2">OPHIUCHUS</div>
            <div className={"rounded-lg mx-auto p-1 mt-3 bg-NAFPink text-white w-fit px-10"}>6 March 2023</div>
            <div className={"mt-3 mx-3 text-md whitespace-pre-wrap"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia.</div>
            <div class="mt-7 mx-3">
              <Link to="" type="button"
                className={"inline-block px-6 py-2.5 h-[45px] text-white rounded-lg shadow-md bg-black"}>
                Purchase Tickets Here
              </Link>
            </div>
            <div class="mt-7 mx-3">
              <div class="flex flex-row flex-wrap justify-center">
                {
                  content.map((one, index) => (
                    <div class="basis-[90%] lg:basis-[40%] mx-5 lg:px-5 mb-[4rem]">
                      <div class='flex md:flex-row p-3 border-2 border-black ml-1 mr-1 bg-white md:shadow-[10px_10px_0_0_rgba(0,0,0)]'>
                        <img class='basis-[40%] w-[200px] h-[200px]' src="" />
                        <div class='basis-[60%] max-w-[90%] md:max-w-full min-w-0'>
                          <div class="">
                            <div class="text-2xl font-syne text-ellipsis overflow-hidden whitespace-nowrap text-center bg-NAFPink w-[90%] px-3 mx-auto">{one.title}</div>
                            <div class="font-syne text-left w-[90%] mt-3 mx-auto">{one.desc}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Orbit