import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage/Home';
import AppleHeader from './SharedPages/AppleHeader';
import Navbar from './SharedPages/Navbar';
import Footer from './SharedPages/Footer';
import AboutUs from './AboutUs/AboutUs';
import WorkshopMain from './Workshop/WorkshopMain';
import MarketPlace from './Marketplace/MarketPlace';
import Payment from './Marketplace/Payment';
import OrderSubmitted from './Marketplace/OrderSubmitted';
import Events from './Events/Events';
import Cart from './Marketplace/Cart';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Piccrew from './Contest/Piccrew';



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
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programmes" element={<WorkshopMain />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/submitted" element={<OrderSubmitted/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/piccrew" element={<Piccrew/>}/>


      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    </div>




  );
}

export default App;
