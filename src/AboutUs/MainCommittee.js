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


import LeftArrow from './svgs/maincommittee/LeftArrow.svg';
import RightArrow from './svgs/maincommittee/RightArrow.svg';

const MainCommittee = () => {
  const images = [top4, exfio, business, publicity, prog,  tech];
  const techImages = [anthony, samuel, kish]
  const progImages = [emmy, evelyn, aida, cameron, coco, cynthia, inka, fahmy, ruiying]
  const pnpImages = [qihui, amber, cinwen, heather, jane, yongqi, xinhui, jess]
  const top4Images = [yiteng, manting, celeste, nicole]
  const exfioImages = [ryan, shiru]
  const bzImages = [ray, faith, syarifah]
  const [imgState, setImgState] = useState(top4Images)
  const [galleryState, setGalleryState] = useState(0)

  const handleImageState = (val) => {
    console.log(val)
    switch (val) {
      case 0:
        setImgState(top4Images);
        break;
      case 1:
        setImgState(exfioImages);
        break;
      case 2:
        setImgState(bzImages);
        break;
      case 3:
        setImgState(pnpImages);
        break;
      case 4:
        setImgState(progImages);
        break;
      case 5:
        setImgState(techImages);
        break;  
    }
    setGalleryState(0)
  }

  const ImageState = (val) => (event) => {
    if (val > (imgState.length  - 1)) val = 0
    if (val < 0) val = (imgState.length - 1)
    setGalleryState(val)
  }


  return (
    <div class="bg-NAFBlue min-h-screen pb-[10%]">
      <div class="mx-auto pt-[4%]">
        <img class="w-[50%] mx-auto" src={CommitteeLogo}></img>
      </div> 
      <div class="mt-5 w-[70%] mx-auto bg-white mb-5 border-3 border-black shadow-[20px_20px_0_0_rgba(0,0,0)]">
        <AppleHeader></AppleHeader>
        <div class="flex">
          <div class="flex-col basis-[20%]">
            <div class="bg-gray-400 p-5 border border-black">
              {
                images.map((oneImage, index) => (
                  <div class="my-3">
                    <img class="w-[80%] mx-auto" src={oneImage} id={index} onClick={() => handleImageState(index)}></img>
                  </div>
                ))
                
              }

            </div>

          </div>
          <div class="basis-[80%] bg-white">
            <div class="text-center mt-[4%] mx-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia risus lorem, ut efficitur nisi facilisis id. Morbi molestie neque eu urna tincidunt lacinia. Mauris a massa sed orci vestibulum pretium. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Etiam vitae lobortis lacus, at vestibulum mi. Mauris aliquet elit sed libero pharetra vestibulum.
            </div>
              <div class="flex items-center justify-center mt-[5%]">
              <div >
                <img class="" src={LeftArrow} onClick={ImageState(galleryState - 1)}></img>
              </div>
              <div>
                <div class="mx-6 border-3 border-black shadow-[10px_10px_0_0_rgba(0,0,0)]">
                  <img class="w-[100%]" src={imgState[galleryState]}></img>
                </div>

              </div>

              <div>
                <img class="" src={RightArrow} onClick={ImageState(galleryState + 1)}></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCommittee