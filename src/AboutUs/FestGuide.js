import React, { useState } from "react";
import WhatIsNTUArtsFestival from "./svgs/FestGuide/WhatIsNTUArtsFestival.png";
import AppleHeader from "../SharedPages/AppleHeader";
import BigWhiteStar from "./svgs/FestGuide/BigWhiteStar.svg";
import MediumRedStar from "./svgs/FestGuide/MediumRedStar.svg";
import MediumYellowStar from "./svgs/FestGuide/MediumYellowStar.svg";
import SmallBlueStar from "./svgs/FestGuide/SmallBlueStar.svg";
import SmallPurpleDot from "./svgs/FestGuide/SmallPurpleDot.svg";
import SmallRedStar from "./svgs/FestGuide/SmallRedStar.svg";
import SmallWhiteDot from "./svgs/FestGuide/SmallWhiteDot.svg";
import MediumPurpleStar from "./svgs/FestGuide/MediumPurpleStar.svg";
import festGuide from "./pdfs/Festival Guide-03.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const FestGuide = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const PDF_VIEWPORT_FACTOR = 0.5;
  const [pdfWidth, setPDFWidth] = useState(
    window.innerWidth * PDF_VIEWPORT_FACTOR
  );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  window.addEventListener('resize', function () {
    setPDFWidth(window.innerWidth * PDF_VIEWPORT_FACTOR);
  });

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }


  return (

    <div class="flex relative lg:min-h-screen bg-NAFYellow">

      <div class=" flex flex-row w-[100%] mt-20 lg:mt-32 mx-10 sm:mb-20 md:mb-0 flex-wrap">
        <img src={BigWhiteStar} class="hidden lg:block absolute top-[40%] right-[0%] hidden lg:block"></img>
        {/* <img src={MediumRedStar} class="absolute top-[87%] left-[0%] "></img> */}
        <img src={MediumYellowStar} class="hidden lg:block absolute top-[-8%] right-[9%]"></img>
        {/* <img
          src={MediumPurpleStar}
          class="absolute top-[90%] right-[45%]"
        ></img> */}
        <img src={SmallBlueStar} class="hidden lg:block absolute top-[2%] left-[35%] hidden lg:block"></img>
        <img src={SmallPurpleDot} class="hidden lg:block absolute top-[7%] right-[3%] "></img>
        <img src={SmallRedStar} class="hidden lg:block absolute top-[9%] right-[4%] z-10 hidden lg:block"></img>
        <img src={SmallWhiteDot} class="hidden lg:block absolute top-[90%] left-[12%] hidden lg:block"></img>

        <div class="relative lg:basis-1/2 mb-10 lg:mb-20 ">
          <img src={WhatIsNTUArtsFestival} class=""></img>
          <h1 class="my-5 md:mr-10 font-syne font-normal text-lg lg:text-2xl ">
            Occurring from February to March 2023, NTU Arts Festival 2023 (NAF) is a Special Project under NTU Cultural Activities Club (CAC) which aims to develop NTU’s potential as a cultural hub and establish itself as a premiere event that will be placed on the cultural and arts calendar of Singapore. Involving the 23 CAC Member Clubs and established arts and cultural groups within NTU, NAF 2023 aims to promote the understanding and appreciation of the arts within the NTU community and bring our NTU Arts scene to greater acknowledgement in the wider local arts scene. This year, NAF 2023 will consist of 4 main segments of programmes: Glimmer, Starburst, Interstellar and Orbit.
          </h1>
          {/*./pdfs/Sample pdf document.pdf  padding: 15px 32px; */}
          <a type="submit" href={festGuide} download="NAF2023_FestGuide.pdf"
            class="justify-center hover:bg-violet-700 py-[5%] mt-2 w-[300px] h-[60px] py-[17px] box-border text-center items-center font-syne font-weight: 700; text-zinc-50 px-2 border-2 border-indigo-500/100 bg-NAFPurple rounded-lg"
          >
            DOWNLOAD FEST GUIDE
          </a>

        </div>
        <div class="lg:relative lg:basis-1/2 basis-full mb-20">
          <div class="mx-auto w-[100%] lg:w-[80%] h-[100%] bg-white align-center border-4 border-black shadow-[15px_20px_0_0_rgba(0,0,0)]">
            <AppleHeader></AppleHeader>
            <div class="flex flex-col h-fit border-solid justify-center pb-10 pl-1">
              <Document file={festGuide}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                <div class='flex md:flex-row md:gap-2 justify-around items-center ml-auto mr-auto pr-1 '>
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(Math.min(pdfWidth / 0.5, 300), 650)}
                  />
                  {window.innerWidth >= 1700 && 
                  ( pageNumber < numPages && <Page
                    pageNumber={pageNumber + 1}
                    width={Math.min(Math.min(pdfWidth / 0.5, 300), 650)}
                  />)
                  }
                </div>
              </Document>
              <div class='flex flex-row justify-around items-center mt-5'>
                <button
                class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={previousPage}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button>
                <p>
                  Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={nextPage}
                  disabled={pageNumber >= numPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestGuide;