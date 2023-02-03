import React from 'react'
import Gallery from './Gallery'
import SignUp from './SignUp'
import Workshops from './Workshops'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WorkshopMain = () => {
  const location = useLocation();
  const history = useNavigate();
  const [workshop, setWorkshops] = useState();


  useEffect(() => {
    if (location['state'] !== null) {
      if (!location['state']['workshop']) history('/');
      setWorkshops(location['state']['workshop'])
    }
    else {
      history('/')
    }
  }, [])

  document.body.style.overflow = 'unset';

  return (


    <div class="overflow-hidden">
      <Workshops workshop={workshop}></Workshops>
      <SignUp workshop={workshop && workshop}></SignUp>
      <Gallery></Gallery>
    </div>
  )
}

export default WorkshopMain