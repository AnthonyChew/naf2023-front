import React from 'react'
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import OrbitLogo from './svgs/Orbit2.png'
import { Link, useNavigate } from 'react-router-dom'
import Beztari from './svgs/Orbit/Beztari.jpeg';
import BrokenTailLights from './svgs/Orbit/BrokenTailights.jpeg';
import DewiSamudera from './svgs/Orbit/DewiSamudera.jpeg';
import FriendsofTama from './svgs/Orbit/FriendsofTama.jpg';
import Hall10Jamband from './svgs/Orbit/Hall10Jamband.jpeg';
import JnB from './svgs/Orbit/JnB.jpg';
import LarrytheHilarians from './svgs/Orbit/LarrytheHilarians.jpeg';
import NusaSarjana from './svgs/Orbit/NusaSarjana.jpeg';
import SalsaenSync from './svgs/Orbit/SalsaenSync.JPG';
import SymphonicBand from './svgs/Orbit/SymphonicBand.JPG';
import WeeWeeKim from './svgs/Orbit/WeeWeeKim.PNG';
import WORLD from './svgs/Orbit/WORLD.jpeg';



const Orbit = () => {
  const bgcolor = "bg-NAFPink"

  const content = [
    {
    image: "",
    title: "Harmonix CAC",
    desc: "NTU Harmonix is a vibrant and thriving family with members who have the passion to share their love for music using only their voices. Harmonix has been working towards bringing a different sound to the college community as well as the local a cappella scene. With a blend of different personalities and colourful vocals, they strive to showcase a coherent and sophisticated sound and sensational harmonies to engage and entertain audiences."
  },
  {
    image: BrokenTailLights,
    title: "Broken Tailights",
    desc: "Destinationless, that's us, Broken Taillights. We enrolled into AAI48G, Studies in Pop and Jazz, and had to form a band for our final assessment. Now, here we are, signed up for this exciting event. We don't even know each other that well. Might disband after this, we don't know. See you there!"
  },
  {
    image: WeeWeeKim,
    title: "WEE WEE KIM",
    desc: "who are who are who are we? we are we are WEE WEE KIM! gaby, van and eden will make you shout WEE WEE with their 3-piece vocal ensemble. WEE WEE!! kimanws, as you can probably tell, we are a weekid trio who loves music and everything jazz and funky. we're sure to bring you a combination of smt fun, spunky and jazzy so come on down and jam along w us in the audience! 💥"
  },
  {
    image: LarrytheHilarians,
    title: "Larry & the Hilarians ",
    desc: "Larry & the Hilarians Formed through an NIE mod conducted by none other than the infamous Prof Larry himself, the regrettably named Hilarians are a band that doesn’t joke around. Armed with separation anxiety, our smashing good looks, and an unfortunate penchant for meteors and alcohol, we return for another performance courtesy of said anxiety. We may not be very good, but at least we're easy on the eyes."
  },
  {
    image: FriendsofTama,
    title: "Friends of Tama",
    desc: "Coming from diverse musical backgrounds but united under one goal: to make beautiful music! Tamarind Hall jamband's proudly presents Friends of Tama! With Isaac on the drums, Benson on the bass, Zelda on the keys, Kae and Elvin on the guitar, John on vocals and Phoebe backing him up, we hope to rock your ears with wonderful, beautiful hits!"
  },
  {
    image: JnB,
    title: "Jazz and Blues",
    desc: "the only blue i know is the sky"
  },
  {
    image: Hall10Jamband,
    title: "Hall 10 Band",
    desc: "FASTER CHOP CHOP"
  },
  {
    image: WORLD,
    title: "WORLD",
    desc: `If you're looking to enjoy an evening of intimate vocal-guitar performance, don't miss out on this act. "World" is a 22 year-old singer-songwriter who is here to entertain the NAF'23 crowd with her cover and original songs. Apart from being one of The Voice’s past contestants, she also writes original music with messages pertaining to her life experiences. Soon to graduate, World is currently active in Singapore as an up-and-coming performer who is looking to get involved in the local scene. "Thank you to NAF'23 for this wonderful opportunity. I am looking forward to the show!" - WORLD`
  },
  {
    image: SymphonicBand,
    title: "Symphonic Band",
    desc: "Established in 1985, NTU Symphonic Band (NTUSB) currently has over 60 members. Under the baton of resident conductor Mr Takehiro Oura, NTUSB has clinched numerous awards and achievements both locally and overseas, such as the Gold Award in the Singapore International Band Festival (SIBF) 2014, and the First Prize at the World Music Contest held in the Netherlands in 2005 and 2009. Most recently, NTUSB has received the Silver Award in the 2016 SIBF. NTUSB holds 2 concerts annually, namely Wanderlust in November and Sojourn in April. In addition, NTUSB has been invited to perform in numerous events across Singapore. To learn more about NTUSB, follow them on Instagram @ntusb."
  },
  {
    image: Beztari,
    title: "Beztari",
    desc: "NTU Beztari is a malay dance group, under the cultural wing of NTU Malay Language and Cultural Society, founded in 2008. Beztari has been a platform for new aspiring dancers to showcase their talents under the guidance of Mr Azmi Juhari, the instructor and choreographer. As we approach the new year, it will be Beztari 15th years of founding and we hope to showcase and piqué the interest of more individuals towards Malay Dance."
  },
  {
    image: NusaSarjana,
    title: "Nusa Sarjana",
    desc: "Nusa Sarjana is a male Dikir Barat group from NTU-NIE students. They are the first dikir barat group at the University level to participate in inter-schools competition, Piala Suara Serumpun (PSS), where they had won fourth place in 2019, and 2nd place for male category in 2022. They have been actively participating in various performances both internally and externally over the years such as Perbayu’s Annual Welcome Tea and Freshmen Orientation Programme."
  },
  {
    image: DewiSamudera,
    title: "Dewi Samudera",
    desc: "Dewi Samudera, which means “Goddesses of the Sea”, is NTU-NIE’s very own female dikir barat group. Dewi Samudera has participated in many competitions such as Piala Suara Serumpun, as well as NTU-NIE events such as Rentak Budaya. Dewi Samudera also organised their own production, HAWA: Harakah Wanita in conjunction with International Womens’ Day."
  },
  {
    image: SalsaenSync,
    title: "Salsa en Sync",
    desc: "Established in 2006, Salsa En Sync specialises in Street Latin dance, Salsa On-2, featuring extraordinary partner work, intricate footwork and complicated turn patterns. Salsa En Sync is like salsa sauce — our dance moves are hot & spicy, leaving you wanting more!"
  },
]
  return (
    <div class="relative bg-NAFPink pb-20">
      <EventHeader img={OrbitLogo} text="This year's NAF Internal Showcase, titled Orbit, presents various performances, art showcases, fun activities and booths. It aims to act as a platform for the NTU community to be more involved in as well as gain exposure and newfound interest to NTU's arts scene."></EventHeader>
      <div class="flex w-[80%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="PHYSICAL ARTS MARKET" date="20 February 2023 to 24 February 2023, 6 March 2023 to 10 March 2023, 15 to 17 March 2023, 11pm - 5pm, The Green Space @ North Spine" content="NAF Arts Market is a creative and craftswork bazaar meant to show off the artistry of local students and expose NTU to various art mediums. Home to over 30 vendors, students get to interact with these unique artists both in person and online over at the NAF 2023 website. Additionally, we will be having a photo booth where you can come and make fun memories with your friends! So come on down and enjoy a variety of talent, from candles to little trinkets to crochet!"></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="ONLINE ARTS MARKET" date="6 February 2023 to 10 February 2023, 12pm to 6pm, Hosted on the NAF website" content="NAF Arts Market is a creative and craftswork bazaar meant to show off the artistry of local students and expose NTU to various art mediums. Home to over 30 vendors, students get to interact with these unique artists both in person and online over at the NAF 2023 website. Additionally, we will be having a photo booth where you can come and make fun memories with your friends! So come on down and enjoy a variety of talent, from candles to little trinkets to crochet!"></EventCard>
        </div>
      </div>
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-full">
          <EventCard bgColor={bgcolor} title="COLLIDE" date="6 to 8 March, 11am to 6pm, Linkway" content="In the collision of worlds, Collide showcases physical arts with interactive elements like throwing balls dipped in paint to create a community art piece! If you are less for the physical collide, a mental collision of beautiful poetry and artworks from NTU students will be exhibited at the showcase as well, and you can come to admire them."></EventCard>
        </div>
      </div>
      <div class="flex w-[90%] md:w-[80%] mx-auto text-center">
        <div class="basis-full">
          <div class="min-h-[300px] bg-white w-[100%] h-fit pb-5 mb-10 lg:mb-[5rem] py-2 pt-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)]">
            <div class="font-syneExtraBold text-2xl font-bold mt-2">OPHIUCHUS</div>
            <div className={"rounded-lg mx-auto p-1 mt-3 bg-NAFPink text-white w-fit px-10"}>9 March, 7:30pm to 9:30pm, Nanyang Auditorium</div>
            <div className={"mt-3 mx-3 text-md md:w-[50%] md:mx-auto text-center whitespace-pre-wrap"}>Come enjoy a night of performances at Ophiuchus. Our very own NTU students will be there showcasing their musical talents. With 10 performances lined up, it would be an exciting night ahead! Grab tickets with your friends for just $5. Ticket sales will be donated to our beneficiaries SOS and SAMH.</div>
            <div class="mt-7 mx-3">
              <Link to="" type="button"
                className={"inline-block px-6 py-2.5 h-[45px] text-white rounded-lg shadow-md bg-black"}>
                Purchase Tickets Here
              </Link>
            </div>
            <div class="mt-7 mx-3">
              {/* <div class="grid grid-cols-2 auto-rows-[1fr]">
                {
                  content.map((one, index) => (
                    <div class="mx-5 lg:px-5 mb-[4rem]">
                      <div class='flex md:flex-row p-3 border-2 border-black ml-1 mr-1 bg-white md:shadow-[10px_10px_0_0_rgba(0,0,0)]'>
                        <img class='basis-[40%] w-[200px] h-[200px]' src={one.image} />
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
              </div> */}
              <div class="flex flex-row flex-wrap justify-center">
                {
                  content.map((one, index) => (
                    <div class="basis-[90%] lg:basis-[46%] md:mx-5 lg:px-5 mb-[4rem]">
                      <div class='flex flex-wrap md:flex-nowrap md:flex-row p-3 border-2 border-black ml-1 mr-1 bg-white md:shadow-[10px_10px_0_0_rgba(0,0,0)] h-[100%]'>
                        <img class='basis-[100%] md:basis-[40%] w-[200px] h-[200px]' src={one.image} />
                        <div class='basis-[100%] md:basis-[60%] md:max-w-[90%] md:max-w-full min-w-0'>
                          <div class="mt-3">
                            <div class="text-2xl font-syne text-ellipsis overflow-hidden whitespace-nowrap text-center bg-NAFPink w-[100%] md:w-[90%] md:px-3 md:mx-auto">{one.title}</div>
                            <div class="font-syne text-left w-[100%] md:w-[90%] mt-3 mx-auto">{one.desc}</div>
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