import React from 'react'

const Navbar = () => {
    return (
      <>
        <div className="flex px-4 pt-8 text-white justify-between">
          <div className="flex flex-col">
            <div className=" self-start text-3xl font-light">Aklesh Dahal</div>
            <a href="mailto:aklesh.dahal@gmail.com">
              <div className="font-thin text-gray-400">akleshdahal@gmail.com</div>
            </a>
          </div>
  
          <div className="justify-end space-x-6 font-thin text-gray-400 hidden md:flex">
            <a
              href="#contacts"
              className="self-end m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              Contacts
            </a>
            <a
              href="#aboutme"
              className="self-end m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="self-end m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              Projects
            </a>
          </div>
          
        </div>
        <hr className=" w-[100%] md:mx-auto my-0" />
      </>
    );
  };

export default Navbar