import React from "react";
import LandingBg from "./svgs/workshop/landingbg.svg";
import AppleHeader from "../SharedPages/AppleHeader";
import SignUps from "./svgs/signups/workshops_signup.svg";
import SignUpsShadow from "./svgs/signups/workshops_signupshadow.svg";
import SignUpsStars from "./svgs/signups/workshops_signupstars.svg";
import SignUpsButton from "./svgs/signups/workshops_signupbutton.svg";

const SignUp = () => {
  return (
    <div
      class="h-auto md:min-h-screen w-full bg-NAFPurple py-[8%] px-[5%] lg:px-20"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
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
          <img class="z-10 absolute top-[4%]" src={SignUpsShadow} />
          <img class="z-0 absolute -top-[20%]" src={SignUpsStars} />
        </div>
      </div>
      <div class="relative bg-white md:ml-[12%] mt-10 w-full md:w-10/12 h-fit border-4 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader title={"www.signupguidelines.com"}></AppleHeader>
        {/* <p class="z-10 absolute top-[47%] left-[32%] text-4xl text-white">CLICK HERE TO SIGN UP</p>
        <img class="mx-auto my-20" src={SignUpsButton} /> */}
        <button class="flex my-[7%] py-[0.1%] px-[2.5%] text-[20px] md:text-[30px] lg:text-[40px] text-white mx-auto" style={{ backgroundImage: `url(${SignUpsButton})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >CLICK HERE TO SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUp;
