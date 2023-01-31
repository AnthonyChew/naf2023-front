import React, { useState, useEffect } from 'react';
import EventCard from './EventCard'
import EventHeader from './EventHeader'
import InterStellarLogo from './svgs/Interstellar2.png'
import workshopService from '../services/workshops';
import { trackPromise } from 'react-promise-tracker';
import Filter from './FilterWorkshops';

const Interstellar = () => {
  const bgcolor = "bg-NAFPurple";

  function compare(sortType, a, b) {
    // console.log(sortType, a, b);
    if (sortType === 'A-Z') { // sort by alphabetical order, A first
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    } else if (sortType === 'Date/Time') {  // sort by Date/Time, earliest first
      //earliest first
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      if (a.date === b.date) {
        if (a.startTime > b.startTime) {
          return 1;
        }
        if (a.startTime < b.startTime) {
          return -1;
        }
      }
    } else if (sortType === 'Vacancies') {  // sort by no. vacancies remaining, largest number first
      if (a.remainingVacancies > b.remainingVacancies) {
        return -1;
      }
      else {
        return 1;
      }
    }
    // a must be equal to b
    return 0;
  }

  const [workshops, setWorkshops] = useState([]);

  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    async function fetchWorkshopData() {
      const res = await trackPromise(workshopService.getAll());
      console.log(res.data);
      setWorkshops(res.data);
    }
    fetchWorkshopData();
  }, []);

  return (
    <div class="relative bg-NAFPurple pb-20">
      <div class='md:w-[70%] mx-auto'>
        <EventHeader img={InterStellarLogo} text="Workshops, titled Interstellar, collaborates with various CAC Member Clubs, arts and cultural groups and NIE to bring a variety of workshops to all NTU students. Workshops range from visual arts to music and dance, and Interstellar aims to encourage every participant to learn something new from the workshops and leave with memorable experiences and a greater appreciation for the arts. Join us and create art, no experience required! Do browse through our various workshops for the dates, times and locations."></EventHeader>
        {/* <div class="flex w-[85%] mx-auto text-center">
        <div class="basis-full">
          <EventCard button="Click here to register" href="/" bgColor={bgcolor} title="REGISTER FOR INTERSTELLAR" date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library" content="
"></EventCard>
        </div>
      </div> */}

        <div class="flex flex-col lg:justify-around items-end justify-end mb-5 lg:mr-32  ml-1 mr-1 flex-wrap">
          <Filter filterCallback={(filterOptions) => { setFilter(filterOptions); setSort(filterOptions); }}></Filter>
        </div>
        <div class="flex w-[85%] mx-auto text-center">
          <EventCard
            workshops={
              workshops.sort((a, b) => compare(sort, a, b))
            }
            bgColor={bgcolor}
            title="WORKSHOPS"
            date="18 Mar 2023, 6:15pm - 7:00pm, NLB Library"
            content="Workshops: Browse through the workshops provided and choose to your own liking! Workshops will be held from 6 March to 17 March"></EventCard>

        </div>
      </div>
    </div>
  )
}

export default Interstellar