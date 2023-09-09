import React, { useEffect, useState } from 'react';
// import './final.css'
import image2 from "./assets/front.jpg";
import image3 from "./assets/vote_a1.jpeg";
import Cookies from "universal-cookie";

function Header() {
 


    


  return (
    <>
      <div>
        <header className="h-auto md:h-[100%] bg-cover bg-[url('./assets/BG.png')] text-blue-950">
          
          <div className="h-full w-full pt-16 flex flex-wrap">
            <div
              className="text-center self-center px-4 w-full lg:h-[230px] md:px-2 lg:px-20 md:text-left md:w-6/12 md:flex md:flex-col md:justify-between"
            >
              <h3 className="text-3xl m-10 md:text-4xl text-black font-bold">
                RAGE SECURE VOTING PLATEFORM

                <h2 className='text-xl mt-2 '>"Vote With Confidence
                 Explore Our Works"</h2>

                <span className="block text-blue-950 mt-2 text-4xl"> RAGE VOTING</span>
               
              </h3>
                {/* <p className="text-[#404040] mt-1 px-2 md:mt-0 text-xl ">"Any Time Any Where"</p> */}

              {/* <div className="mx-auto md:m-0 mt-4 bg-blue-950 w-fit text-white px-3 py-2 rounded-3xl">
                Explore Our Works
                <span className="bg-blue-950 px-2 ml-2 rounded-full py-1"><i className="fa-solid fa-arrow-right"></i></span>
              </div> */}
            </div>
            <div className="w-full md:w-6/12 h-full relative">

              <img className=" z-0 hidden md:inline-block md:bg-transparent md:object-contain md:w-full md:h-full" style={{ mixBlendMode: 'multiply' }} src={image2} alt="man" />
            </div>
          </div>
        </header>

      </div>
    </>
  );
}

export default Header
