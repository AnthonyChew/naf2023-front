import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage/Home';
import AboutUs from './AboutUs/AboutUs';
import WorkshopMain from './Workshop/WorkshopMain';
import MarketPlace from './Marketplace/MarketPlace';
import Payment from './Marketplace/Payment';
import OrderSubmitted from './Marketplace/OrderSubmitted';
import Events from './Events/Events';
import Cart from './Marketplace/Cart';
import Piccrew from './Contest/Piccrew';
import Navbar from './SharedPages/Navbar';
import Footer from './SharedPages/Footer';
import Profile from './ProfilePage/Profile';
import VendorLogin from './Marketplace/VendorLogin';
import Glimmer from './Events/Glimmer';
import Nebula from './Events/Nebula';
import Orbit from './Events/Orbit';
import Interstellar from './Events/Interstellar';
import Starburst from './Events/Starburst';
import AdminManage from './AdminInterface/AdminManage'
import MainCommittee from './AboutUs/MainCommittee';
import NAFxAFTH from './NAFxCAC/NAFxAFTH';
import NAFxTOP from './NAFxCAC/NAFxTOP';
import NAFxCS from './NAFxCAC/NAFxCS';
import NAFxJDC from './NAFxCAC/NAFxJDC';
import NAFxOTHERS from './NAFxCAC/NAFxOTHERS';
import FAQ from './FAQ/FAQ';
import PrivacyPolicy from './FAQ/PrivacyPolicy';
import Partners from './AboutUs/Partners';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ScrolltoTop from './utils/ScrolltoTop';



function Home() {
  return (
    <div className="App">
      {/* Change this accordingly to your respective main page if you want view quicker, e.g Aboutus, Homepage, Workshop, Marketplace  */}
      <Homepage></Homepage>
      {/* <AboutUs></AboutUs> */}
      {/* <WorkshopMain></WorkshopMain> */}
      {/* <MarketPlace></MarketPlace> */}
    </div>
  );
}


function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrolltoTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<div class='pt-[5%]'><Home /></div>} />
          <Route path="*" element={<div class='pt-[5%]'><Home /></div>} />
          <Route path="/about" element={<div class='pt-[5%]'><AboutUs /></div>} />
          <Route path="/programmes" element={<div class='pt-[5%]'><WorkshopMain /></div>} />
          <Route path="/workshop" element={<div class='pt-[5%]'><WorkshopMain /></div>} />
          <Route path="/marketplace" element={<div class='pt-[5%]'><MarketPlace /></div>} />
          <Route path="/payment" element={<div class='pt-[5%]'><Payment /></div>} />
          <Route path="/submitted" element={<div class='pt-[5%]'><OrderSubmitted /></div>} />
          <Route path="/events" element={<div class='pt-[5%]'><Events /></div>} />
          <Route path="/cart" element={<div class='pt-[5%]'><Cart /></div>} />
          <Route path="/picrew" element={<div class='pt-[5%]'><Piccrew /></div>} />
          <Route path="/profile" element={<div class='pt-[5%]'><Profile /></div>} />
          <Route path="/glimmer" element={<div class='pt-[5%]'><Glimmer /></div>} />
          <Route path="/nebula" element={<div class='pt-[5%]'><Nebula /></div>} />
          <Route path="/orbit" element={<div class='pt-[5%]'><Orbit /></div>} />
          <Route path="/interstellar" element={<div class='pt-[5%]'><Interstellar /></div>} />
          <Route path="/starburst" element={<div class='pt-[5%]'><Starburst /></div>} />
          <Route path="/afth" element={<div class='pt-[5%]'><NAFxAFTH /></div>} />
          <Route path="/jdc" element={<div class='pt-[5%]'><NAFxJDC /></div>} />
          <Route path="/cs" element={<div class='pt-[5%]'><NAFxCS /></div>} />
          <Route path="/top" element={<div class='pt-[5%]'><NAFxTOP /></div>} />
          <Route path="/others" element={<div class='pt-[5%]'><NAFxOTHERS /></div>} />
          <Route path="/vendorlogin" element={<div class='pt-[5%]'><VendorLogin /></div>} />
          <Route path="/adminmanage" element={<div class='pt-[5%]'><AdminManage /></div>} />
          <Route path="/committee" element={<div class='pt-[5%]'><MainCommittee /></div>} />
          <Route path="/faq" element={<div class='pt-[5%]'><FAQ /></div>} />
          <Route path="/privacypolicy" element={<div class='pt-[5%]'><PrivacyPolicy /></div>} />
          <Route path="/partners" element={<div class='pt-[5%]'><Partners /></div>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>




  );
}

export default App;
