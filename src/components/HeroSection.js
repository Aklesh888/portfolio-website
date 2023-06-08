import React from 'react'
import ThreeDModel from "../components/ThreeDModel"


const HeroSection = () => {
    return (
      <>
        <div data-aos="fade-in" className="flex flex-col items-center lg:flex-row text-center justify-between px-4 py-40 max-w-[100vw] h-[80%]">
          <div className="text-2xl font-thin my-40">
            Hey, I am <span className=' text-red-500 font-bold'>Aklesh Dahal</span>. I am an aspiring <span className='text-blue-500 font-bold'> front end developer</span>, AI enthusiast
            and hobbyist game developer.
          </div>
          <ThreeDModel></ThreeDModel>
          <div className="">
            {/* <img src={developer} className=" w-auto h-auto" alt="" /> */}
          </div>
        </div>
      </>
    );
  };
  

export default HeroSection