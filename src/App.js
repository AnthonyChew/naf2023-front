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





function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrolltoTop />
        <Navbar></Navbar>
        <div class="pt-[88px] md:pt-[105px]"></div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programmes" element={<WorkshopMain />} />
          <Route path="/workshop" element={<WorkshopMain />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/submitted" element={<OrderSubmitted />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/picrew" element={<Piccrew />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/glimmer" element={<Glimmer />} />
          <Route path="/nebula" element={<Nebula />} />
          <Route path="/orbit" element={<Orbit />} />
          <Route path="/interstellar" element={<Interstellar />} />
          <Route path="/starburst" element={<Starburst />} />
          <Route path="/afth" element={<NAFxAFTH />} />
          <Route path="/jdc" element={<NAFxJDC />} />
          <Route path="/cs" element={<NAFxCS />} />
          <Route path="/top" element={<NAFxTOP />} />
          <Route path="/concert" element={<NAFxOTHERS />} />
          <Route path="/vendorlogin" element={<VendorLogin />} />
          <Route path="/adminmanage" element={<AdminManage />} />
          <Route path="/committee" element={<MainCommittee />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

</div>    




  );
}


export default App;
