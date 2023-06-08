import React from 'react'

import developer from "../assets/devv.png";


const HeroSection = () => {
    return (
      <>
        <div className="flex flex-col lg:flex-row text-left justify-between px-4 py-12">
          <div className="text-2xl font-thin">
            Hey, I am Aklesh Dahal. I am an aspiring web developer, AI enthusiast
            and hobbyist game developer.
          </div>
          <div className="">
            <img src={developer} className=" w-auto h-auto" alt="" />
          </div>
        </div>
      </>
    );
  };
  

export default HeroSection