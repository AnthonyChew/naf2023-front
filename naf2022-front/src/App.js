import React, { useEffect } from 'react';
import Drawer from './Components/Drawer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init();
  });
  return <Drawer />;
}
