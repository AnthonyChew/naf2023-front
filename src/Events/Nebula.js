import React from "react";
import EventCard from "./EventCard";
import NebulaImg from "./svgs/nebula/Nebula.png";

const Nebula = () => {
  return (
    <div class="relative bg-NAFPurple pb-20">
      <div class="relative w-[40%] mx-auto py-28 text-center">
        <img class="mx-auto" src={NebulaImg}></img>
        <div class="text-white font-syne font-normal text-xl pt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>
      {/* first row */}
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-1/3">
          <EventCard title="DANCING IN THE DARK" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-1/3">
          <EventCard title="BLAST OF TUNES" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-1/3">
          <EventCard title="BRILLIANCE" date="<Date, time, location>" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      {/* 2nd row */}
      <div class="flex w-[80%] mx-auto text-center">
        <div class="basis-1/2">
          <EventCard title="MARKETPLACE" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
        <div class="basis-1/2">
          <EventCard title="PHOTOBOOTH" date="18 Mar 2023, 5:00pm - 6:00pm, NLB Library" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia."></EventCard>
        </div>
      </div>
      {/* 3rd row */}
      <div class="bg-white w-[80%] italic h-fit mx-auto py-7 border-4 rounded-2xl border-black shadow-[5px_5px_0_0_rgba(0,0,0)] text-center">
        <div class="font-yerk text-2xl font-bold mt-2">PROGRAMME SHEET</div>
        <div class=""></div>
       
    </div>
    </div>
  );

};

export default Nebula;
