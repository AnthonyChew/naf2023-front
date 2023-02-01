import React from "react";
import EventCard from "./EventCard";
import EventHeader from "./EventHeader";
import NebulaImg from "./svgs/Nebula.png";

const Nebula = () => {
  const bgcolor="bg-NAFPurple";
  document.body.style.overflow = 'unset';
  return (
    <div class="relative bg-NAFPurple pb-20">
      <EventHeader img={NebulaImg} text=""></EventHeader>
      {/* first row */}
      <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[30%]">
          <EventCard bgColor={bgcolor} title="DANCING IN THE DARK" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-full lg:basis-[30%]">
          <EventCard bgColor={bgcolor} title="BLAST OF TUNES" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-full lg:basis-[30%]">
          <EventCard bgColor={bgcolor} title="BRILLIANCE" date="<Date, time, location>" content="Brilliance is an extravagant fashion show where models and designers are able to showcase their talents on a wider and public scale. Click to view our spectacular designers and their stunning designs!"></EventCard>
        </div>
      </div>
      {/* 2nd row */}
      <div class="flex w-[85%] mx-auto text-center flex-wrap justify-between">
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="MARKETPLACE" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-full lg:basis-[45%]">
          <EventCard bgColor={bgcolor} title="PHOTOBOOTH" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      {/* 3rd row */}
      <div class="bg-white w-[85%] h-fit mx-auto py-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)] text-center">
        <div class="font-yerk italic text-2xl font-bold mt-2">PROGRAMME SHEET</div>
        <div class=""></div>
       
    </div>
    </div>
  );

};

export default Nebula;
