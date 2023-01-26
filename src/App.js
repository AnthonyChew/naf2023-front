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
import Partners from './Partners/Partners';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ScrolltoTop from './utils/ScrolltoTop';
import NAFxAFTH from './NAFxCAC/NAFxAFTH';


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
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
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
          <Route path="/vendorlogin" element={<VendorLogin />} />
          <Route path="/adminmanage" element={<AdminManage />} />
          <Route path='/partners' element={<Partners />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>




  );
}

export default App;
