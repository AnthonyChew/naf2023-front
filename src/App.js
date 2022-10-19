import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage/Home';
import AppleHeader from './SharedPages/AppleHeader';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Homepage></Homepage>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/apple" element={AppleHeader}></Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
