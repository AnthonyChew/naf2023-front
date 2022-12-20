import React from "react";
import LandingBg from "./svgs/workshop/landingbg.svg";
import AppleHeader from "../SharedPages/AppleHeader";
import SignUps from "./svgs/signups/workshops_signup.svg";
import SignUpsShadow from "./svgs/signups/workshops_signupshadow.svg";
import SignUpsStars from "./svgs/signups/workshops_signupstars.svg";
import SignUpsButton from "./svgs/signups/workshops_signupbutton.svg";
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

const SignUp = () => {
  return (
    <div
      class="overflow-hidden relative h-auto md:min-h-screen w-full bg-NAFPurple pt-20 md:pb-0 pb-20 px-[5%] lg:px-20"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <img class="absolute left-0 top-[45%] w-[12%]" src={BlueStar3Shadow}/>
      <img class="absolute left-0 top-[41%] w-[12%]" src={BlueStar3}/>
      <img class="absolute left-[18.5%] top-[55.5%] w-[5%]" src={RedStar1Shadow}/>
      <img class="absolute left-[18%] top-[55%] w-[5%]" src={RedStar1}/>
      <img class="absolute left-[18%] top-[55%] w-[5%]" src={RedStar1Outline}/>
      <img class="absolute left-[22%] top-[65%] w-[10%]" src={OrangeStar1Shadow}/>
      <img class="absolute left-[22%] top-[65%] w-[10%]" src={OrangeStar1}/>
      <img class="absolute left-[5.2%] top-[71.5%] w-[2%]" src={BallShadow}/>
      <img class="absolute left-[5%] top-[71%] w-[2%]" src={WhiteBall}/>
      <img class="absolute left-[18.2%] top-[73.5%] w-[2%]" src={BallShadow}/>
      <img class="absolute left-[18%] top-[73%] w-[2%]" src={YellowBall}/>
      <img class="z-10 absolute right-[12.5%] top-[12.5%] w-[8%]" src={YellowStar3Shadow}/>
      <img class="z-10 absolute right-[13%] top-[12%] w-[8%]" src={YellowStar3}/>
      <img class="z-10 absolute right-0 top-[45%] w-[25%]" src={RedStar2Shadow}/>
      <img class="z-10 absolute right-0 top-[44%] w-[25%]" src={RedStar2}/>
      <img class="z-10 absolute right-[25%] top-[32.5%] w-[2%]" src={BallShadow}/>
      <img class="z-10 absolute right-[25.2%] top-[32%] w-[2%]" src={RedBall}/>
      <img class="z-10 absolute right-[3%] top-[50.5%] w-[2%]" src={BallShadow}/>
      <img class="z-10 absolute right-[3.2%] top-[50%] w-[2%]" src={YellowBall}/>
      <div class="flex md:flex-row flex-col space-x-[5%]">
        {/* Top Left Apple Header */}
        <div class="w-full md:w-1/2 md:mt-0 mt-[33%] h-fit border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
          <AppleHeader title={"www.signupguidelines.com"}></AppleHeader>
          <p class="h-fit bg-white p-5 font-semibold text-center text-xs sm:text-sm md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            eros dui. Donec sit amet magna ligula. Mauris vitae diam aliquam,
            lobortis tellus sed, vulputate diam. Orci varius natoque penatibus
            et magnis dis parturient montes.
          </p>
        </div>
        {/* Sign Up Logo */}
        <div class="relative w-2/3 order-first md:order-last">
          <img class="z-20 absolute" src={SignUps} />
          <img class="z-10 absolute top-[4%] left-[1%]" src={SignUpsShadow} />
          <img class="z-0 absolute -top-[20%]" src={SignUpsStars} />
        </div>
      </div>
      <div class=" bg-white md:ml-[12%] mt-10 w-full md:w-10/12 h-fit border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader title={"www.signupguidelines.com"}></AppleHeader>
        {/* <p class="z-10 absolute top-[47%] left-[32%] text-4xl text-white">CLICK HERE TO SIGN UP</p>
        <img class="mx-auto my-20" src={SignUpsButton} /> */}
        <button class="flex my-[7%] py-[0.1%] px-[2.5%] text-[20px] md:text-[30px] lg:text-[40px] text-white mx-auto" style={{ backgroundImage: `url(${SignUpsButton})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >CLICK HERE TO SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUp;
