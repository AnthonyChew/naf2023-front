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

  useEffect(() => {
    async function fetchWorkshopData() {
      const res = await trackPromise(workshopService.getAll());
      console.log(res.data);
      setWorkshops(res.data);
    }
    fetchWorkshopData();
  }, []);

  return (
    <div>
      <Landing></Landing>
      <WhatsOn></WhatsOn>
      <Events></Events>
      <Workshops workshops={workshops}/>
      <Marketplace></Marketplace>
    </div>
  )
}

export default Home