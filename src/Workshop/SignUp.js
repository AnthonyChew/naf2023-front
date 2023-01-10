import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import LandingBg from "./svgs/workshop/landingbg.svg";
import AppleHeader from "../SharedPages/AppleHeader";
import SignUpsStars from "./svgs/signups/workshops_signupstars.svg";
import SignUpsButton from "./svgs/signups/workshops_signupbutton.svg";
import SignUpsLogo from "./svgs/signups/workshopSignUpLogo.png";
import workshopService from '../services/workshops';
import { trackPromise } from 'react-promise-tracker';

import BlueStar3 from "./svgs/workshop/workshops_bluestar3.svg";
import BlueStar3Shadow from "./svgs/workshop/workshops_bluestar3shadow.svg";
import RedStar1 from "./svgs/workshop/workshops_redstar1.svg";
import RedStar1Shadow from "./svgs/workshop/workshops_redstar1shadow.svg";
import RedStar1Outline from "./svgs/workshop/workshops_redstar1outline.svg";
import OrangeStar1 from "./svgs/workshop/workshops_orangestar1.svg";
import OrangeStar1Shadow from "./svgs/workshop/workshops_orangestar1shadow.svg";
import YellowStar3 from "./svgs/workshop/workshops_yellowstar3.svg";
import YellowStar3Shadow from "./svgs/workshop/workshops_yellowstar3shadow.svg";
import RedStar2 from "./svgs/workshop/workshops_redstar2.svg";
import RedStar2Shadow from "./svgs/workshop/workshops_redstar2shadow.svg";
import BallShadow from "./svgs/workshop/workshops_BallShadow.svg";
import RedBall from "./svgs/workshop/workshops_RedBall.svg";
import WhiteBall from "./svgs/workshop/workshops_WhiteBall.svg";
import YellowBall from "./svgs/workshop/workshops_yellowball.svg";
import "./ModalStyle.css";
import SignUpPopup from "./SignUpPopup";

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [workshops, setWorkshops] = useState([]);
  
  useEffect(() => {
    async function fetchWorkshopData() {
      const res = await trackPromise(workshopService.getAll());
      setWorkshops(res.data);
    }
    fetchWorkshopData();
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  return (
    <div
      class="overflow-hidden relative h-auto w-full bg-NAFPurple pt-20 py-40 px-[5%] lg:px-20"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <img class="absolute left-0 top-[45%] w-[12%]" src={BlueStar3Shadow} />
      <img
        class="absolute left-0 top-[44%] md:top-[41%] w-[12%]"
        src={BlueStar3}
      />
      <img
        class="absolute left-[18.5%] top-[55.5%] w-[5%] md:block hidden"
        src={RedStar1Shadow}
      />
      <img
        class="absolute left-[18%] top-[55%] w-[5%] md:block hidden"
        src={RedStar1}
      />
      <img
        class="absolute left-[18%] top-[55%] w-[5%] md:block hidden"
        src={RedStar1Outline}
      />
      <img
        class="absolute left-[22%] top-[65%] w-[10%] md:block hidden"
        src={OrangeStar1Shadow}
      />
      <img
        class=" absolute left-[22%] top-[65%] w-[10%] md:block hidden"
        src={OrangeStar1}
      />
      <img
        class="absolute left-[5.2%] top-[71.5%] w-[2%] md:block hidden"
        src={BallShadow}
      />
      <img
        class="absolute left-[5%] top-[71%] w-[2%] md:block hidden"
        src={WhiteBall}
      />
      <img
        class="absolute left-[18.2%] top-[73.5%] w-[2%] md:block hidden"
        src={BallShadow}
      />
      <img
        class="absolute left-[18%] top-[73%] w-[2%] md:block hidden"
        src={YellowBall}
      />
      <img
        class="z-10 absolute right-[12.5%] top-[12.5%] w-[8%]"
        src={YellowStar3Shadow}
      />
      <img
        class="z-10 absolute right-[13%] top-[12%] w-[8%]"
        src={YellowStar3}
      />
      <img
        class="z-10 absolute right-0 top-[45%] w-[13%] md:w-[25%]"
        src={RedStar2Shadow}
      />
      <img
        class="z-10 absolute right-0 top-[44%] w-[13%] md:w-[25%]"
        src={RedStar2}
      />
      <img
        class="z-10 absolute right-[25%] top-[32.5%] w-[2%] md:block hidden"
        src={BallShadow}
      />
      <img
        class="z-10 absolute right-[25.2%] top-[32%] w-[2%] md:block hidden"
        src={RedBall}
      />
      <img
        class="z-10 absolute right-[3%] top-[50.5%] w-[2%]"
        src={BallShadow}
      />
      <img
        class="z-10 absolute right-[3.2%] top-[50%] w-[2%]"
        src={YellowBall}
      />
      
      <div class="relative flex md:flex-row flex-col space-x-[5%] flex-wrap md:flex-nowrap">
        {/* Top Left Apple Header */}
        <div class="basis-1/2 md:w-1/2 md:mt-0 mt-[22%] bg-white border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          <AppleHeader title={"www.signupguidelines.com"}></AppleHeader>
          <p class="h-fit  p-5 font-semibold text-center text-xs sm:text-sm md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam,
            lobortis tellus sed, vulputate diam. Orci varius natoque penatibus
            et magnis dis parturient montes.
          </p>
        </div>
             
        <img
            class="absolute right-[10%] w-[40%] hidden lg:block"
            src={SignUpsStars}
          />
        {/* Sign Up Logo */}
        <div class="basis-full md:basis-1/2 relative order-first md:order-last">
     
          <img class="w-[100%] lg:w-[70%]" src={SignUpsLogo} />
          
        </div>
      </div>
      <div class=" bg-white md:ml-[12%] mt-10 w-full md:w-10/12 h-fit border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader title={"www.signupguidelines.com"}></AppleHeader>
        <button
          class="flex my-[7%] py-[0.1%] px-[2.5%] text-[20px] md:text-[30px] lg:text-[40px] text-white mx-auto"
          style={{
            backgroundImage: `url(${SignUpsButton})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => setModalOpen(true)}
        >
          CLICK HERE TO SIGN UP
        </button>
        <Modal isOpen={modalOpen}>
          <SignUpPopup workshops={workshops} parentCallback = {() => setModalOpen(false)}></SignUpPopup>
        </Modal>
      </div>
    </div>
  );
};

export default SignUp;
