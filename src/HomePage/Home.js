import React,{useState,useEffect} from 'react'
import AppleHeader from '../SharedPages/AppleHeader'
import Landing from './Landing'
import WhatsOn from './WhatsOn'
import Events from './Events'
import Workshops from './Workshops'
import Marketplace from './Marketplace'
import workshopService from '../services/workshops';
import { trackPromise } from 'react-promise-tracker';

const Home = () => {
  document.body.style.overflow = 'unset';

  const [workshops, setWorkshops] = useState([]);

  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    async function fetchWorkshopData() {
      const res = await trackPromise(workshopService.getAll());
      shuffle(res.data);
      //console.log(res.data);
      setWorkshops(res.data);
    }


    fetchWorkshopData();
  }, []);

  return (
    <div>
      <Landing></Landing>
      <Events></Events>
      <WhatsOn></WhatsOn>
      <Workshops workshops={workshops}/>
      <Marketplace></Marketplace>
    </div>
  )
}

export default Home