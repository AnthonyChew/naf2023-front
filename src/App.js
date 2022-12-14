import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage/Home';
import AboutUs from './AboutUs/AboutUs';
import WorkshopMain from './Workshop/WorkshopMain';
import MarketPlace from './Marketplace/MarketPlace';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Cart from './Marketplace/Cart';

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

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/programmes" element={<WorkshopMain />} />
        <Route path="/marketplace" element={<MarketPlace />} />

      </Routes>
    </BrowserRouter>



  );
}

export default App;
