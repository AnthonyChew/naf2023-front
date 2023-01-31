import React, { useEffect, useState } from 'react'
import AppleHeader from '../SharedPages/AppleHeader';
import CommitteeLogo from './svgs/maincommittee/CommitteeLogo.png';
import top4 from './svgs/maincommittee/top4.png';

import business from './svgs/maincommittee/business.png';
import exfio from './svgs/maincommittee/ex.png';
import prog from './svgs/maincommittee/prog.png';
import tech from './svgs/maincommittee/tech.png';
import publicity from './svgs/maincommittee/publicity.png';

// tech
import anthony from './svgs/maincommittee/tech/anthony.png';
import samuel from './svgs/maincommittee/tech/samuel.png';
import kish from './svgs/maincommittee/tech/kish.png';


//business
import faith from './svgs/maincommittee/business/faith.png';
import ray from './svgs/maincommittee/business/ray.png';
import syarifah from './svgs/maincommittee/business/syarifah.png';

//exfio
import ryan from './svgs/maincommittee/exfio/ryan.png';
import shiru from './svgs/maincommittee/exfio/shiru.png';

//top4
import celeste from './svgs/maincommittee/top4/celeste.png';
import manting from './svgs/maincommittee/top4/manting.png';
import nicole from './svgs/maincommittee/top4/nicole.png';
import yiteng from './svgs/maincommittee/top4/yiteng.png';

//pnp
import amber from './svgs/maincommittee/pnp/amber.png';
import cinwen from './svgs/maincommittee/pnp/cinwen.png';
import heather from './svgs/maincommittee/pnp/heather.png';
import jane from './svgs/maincommittee/pnp/jane.png';
import yongqi from './svgs/maincommittee/pnp/yongqi.png';
import xinhui from './svgs/maincommittee/pnp/xinhui.png';
import qihui from './svgs/maincommittee/pnp/qihui.png';
import jess from './svgs/maincommittee/pnp/jess.png';

//progs
import aida from './svgs/maincommittee/prog/aida.png';
import cameron from './svgs/maincommittee/prog/cameron.png';
import coco from './svgs/maincommittee/prog/coco.png';
import cynthia from './svgs/maincommittee/prog/cynthia.png';
import emmy from './svgs/maincommittee/prog/emmy.png';
import evelyn from './svgs/maincommittee/prog/evelyn.png';
import fahmy from './svgs/maincommittee/prog/fahmy.png';
import inka from './svgs/maincommittee/prog/inka.png';
import ruiying from './svgs/maincommittee/prog/ruiying.png';


//stars walao dont free flow the stars leh 
import TopRightRedStar from './svgs/maincommittee/TopRightRedStar.svg';
import TopRightWhiteDot from './svgs/maincommittee/TopRightWhiteDot.svg';
import TopRightYellowStar from './svgs/maincommittee/TopRightYellowStar.svg';
import TopLeftYellowStar from './svgs/maincommittee/TopLeftYellowStar.svg';
import TopLeftSmallWhiteStar from './svgs/maincommittee/TopLeftSmallWhiteStar.svg';
import TopLeftOrangeStar from './svgs/maincommittee/TopLeftOrangeStar.svg';
import MiddleLeftRedStar from './svgs/maincommittee/MiddleLeftRedStar.svg';
import MiddleRightYellowStar from './svgs/maincommittee/MiddleRightYellowStar.svg';
import MiddleRightPurpleDot from './svgs/maincommittee/MiddleRightPurpleDot.svg';
import BottomLeftPurpleStar from './svgs/maincommittee/BottomLeftPurpleStar.svg';
import BottomLeftWhiteStar from './svgs/maincommittee/BottomLeftWhiteStar.svg';
import BottomLeftYellowStar from './svgs/maincommittee/BottomLeftYellowStar.svg';
import BottomRightOrangeStar from './svgs/maincommittee/BottomRightOrangeStar.svg';
import BottomRightRedStar from './svgs/maincommittee/BottomRightRedStar.svg';
import BottomRightWhiteDot from './svgs/maincommittee/BottomRightWhiteDot.svg';






import LeftArrow from './svgs/maincommittee/LeftArrow.svg';
import RightArrow from './svgs/maincommittee/RightArrow.svg';

const MainCommittee = () => {
  const images = [top4, exfio, business, publicity, prog, tech];
  const techImages = [anthony, samuel, kish]
  const progImages = [emmy, evelyn, aida, cameron, coco, cynthia, inka, fahmy, ruiying]
  const pnpImages = [qihui, amber, cinwen, heather, jane, yongqi, xinhui, jess]
  const top4Images = [yiteng, manting, celeste, nicole]
  const exfioImages = [ryan, shiru]
  const bzImages = [ray, faith, syarifah]
  const [imgState, setImgState] = useState(top4Images)
  const [galleryState, setGalleryState] = useState(0)
  const [shortDes, setShortDes] = useState("The Top 4 comprises these individuals who work hard to lead the main committee! They provide support for the 30 brains behind the festival and coordinate the many moving parts of NAF'23.")

  const handleImageState = (val) => {
    console.log(val)
    switch (val) {
      case 0:
        setImgState(top4Images);
        setShortDes("The Top 4 comprises these individuals who work hard to lead the main committee! They provide support for the 30 brains behind the festival and coordinate the many moving parts of NAF'23.")
        break;
      case 1:
        setImgState(exfioImages);
        setShortDes("Our guardian angels! Our ex-officios support us every step of the way, providing the best guidance and advice to push the NAF team in the right direction.")
        break;
      case 2:
        setImgState(bzImages);
        setShortDes("In charge of securing funds and our wonderful goodie bags for NAF'23, our Business Managers reach out to sponsors to make the festival a possibility!")
        break;
      case 3:
        setImgState(pnpImages);
        setShortDes("The creative minds behind the festival, the P&P team designs all publicity materials for the arts festival with great care and publicises our event through online and physical avenues.")
        break;
      case 4:
        setImgState(progImages);
        setShortDes("The masterminds behind the wide variety of programmes planned for this year's NAF, our programmers have poured in their time and effort into the endeavour of making this event a success. We sincerely hope you will enjoy it!")
        break;
      case 5:
        setImgState(techImages);
        setShortDes("From coding to handling all things tech, the Digital Logistics Team! With them, NAF has been able to smoothly transit into a hybrid event – with both the marketplace and concert being accessible on our very own website.")
        break;
    }
    setGalleryState(0)
  }

  const ImageState = (val) => (event) => {
    if (val > (imgState.length - 1)) val = 0
    if (val < 0) val = (imgState.length - 1)
    setGalleryState(val)
  }


  return (


    <div class="relative bg-NAFBlue min-h-screen pb-[10%] overflow-y-clip">
      <img src={TopLeftSmallWhiteStar} class="hidden lg:block absolute w-[3%] top-[0%] left-[10%] z-30"></img>
      <img src={TopLeftOrangeStar} class="hidden lg:block absolute top-[0%] left-[0%] z-30"></img>

      <img src={TopRightRedStar} class="hidden lg:block absolute w-[13%] top-[0%] right-[7%] z-30"></img>
      <img src={TopRightWhiteDot} class="hidden lg:block absolute w-[2%] top-[9%] right-[3%] z-30"></img>

      <img src={MiddleLeftRedStar} class="hidden lg:block absolute top-[19%] left-[0%]"></img>
      <img src={MiddleRightYellowStar} class="hidden lg:block absolute w-[20%] top-[19%] right-[0%]"></img>
      <img src={MiddleRightPurpleDot} class="hidden lg:block absolute w-[2%] top-[49%] right-[2%] z-30"></img>

      <img src={BottomLeftPurpleStar} class="hidden lg:block absolute bottom-[-12%] left-[0%]"></img>

      <img src={BottomRightOrangeStar} class="hidden lg:block absolute bottom-[-8%] right-[0%] z-10"></img>
      <img src={BottomRightWhiteDot} class="hidden lg:block absolute bottom-[-12%] right-[0%]"></img>

      {/* <img src={BottomLeftWhiteStar} class="absolute bottom-[0%] left-[0%]"></img> */}




      <div class="mx-auto pt-[4%]">
        <img class="lg:w-[70%] mx-auto" src={CommitteeLogo}></img>
      </div>
      <div class="relative mt-[2%] w-[95%] md:w-[85%] mx-auto bg-white mb-5 border-3 border-black md:shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <img src={TopLeftYellowStar} class="hidden lg:block absolute w-[28%] top-[-18%] left-[-3%]"></img>
      <img src={TopRightYellowStar} class="hidden lg:block absolute w-[8%] top-[-4%] right-[-5%] z-30"></img>
      <img src={BottomLeftYellowStar} class="hidden lg:block absolute w-[8%] bottom-[18%] left-[-4%] z-10"></img>
      <img src={BottomRightRedStar} class="hidden lg:block absolute w-[8%] bottom-[-6%] right-[15%] z-30"></img>

        <AppleHeader></AppleHeader>
        <div class="flex bg-white relative">
          <div class="flex-col lg:basis-[15%] bg-white  basis-[30%]">
            <div class="bg-gray-400 py-2 px-1 md:p-5  border border-black h-[100%]">
              {
                images.map((oneImage, index) => (
                  <div class="my-3">
                    <img class="w-[100%] lg:w-[80%] mx-auto" src={oneImage} id={index} onClick={() => handleImageState(index)}></img>
                  </div>
                ))

              }

            </div>

          </div>
          <div class="basis-[80%] bg-white">
            <div class="text-center mt-[4%] md:mx-10 mx-2 font-syne md:text-xl">
              {shortDes}
            </div>
            <div class="flex items-center justify-center mt-[5%]">
              <div >
                <img class="cursor-pointer" src={LeftArrow} onClick={ImageState(galleryState - 1)}></img>
              </div>
              <div>
                <div class="mx-6 border-3 border-black shadow-[10px_10px_0_0_rgba(0,0,0)]">
                  <img class="w-[100%]" src={imgState[galleryState]}></img>
                </div>

              </div>

              <div>
                <img class="cursor-pointer" src={RightArrow} onClick={ImageState(galleryState + 1)}></img>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainCommittee