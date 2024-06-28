import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio of Aklesh Dahal, an aspiring web developer." />
      </Helmet>
      <nav
        className={`border-b h-16 border-white fixed top-0 xl:left-60 xl:right-60 lg:left-32 lg:right-32 md:left-20 md:right-20 right-2 left-2 bg-transparent
      z-20 flex px-4 pt-6 md:pt-6 text-white justify-between max-w-[100vw] ${
          open ? '' : 'backdrop-blur-md'
        }`}
      >
        <div className="flex flex-col">
          <div className="self-start md:text-3xl text-2xl font-light w-auto pb-3">
            AkleshDahal
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={`md:hidden text-4xl fixed cursor-pointer ml-[82vw]  ${
              open ? 'hidden' : 'visible'
            }`}
          >
            <Menu size={40}></Menu>
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={`md:hidden text-4xl fixed cursor-pointer ml-[82vw] ${
              open ? 'visible' : 'hidden'
            }`}
          >
            <X size={40}></X>
          </div>
        </div>
        <div
          className={`h-full w-full flex justify-center items-center ${
            open ? 'mt-none' : 'mt-[-1000px]'
          } md:mt-[-1000px] transition-all duration-500`}
        >
          <div className="absolute bg-white rounded-lg h-auto py-4 w-[200px] mt-[650px] mr-[50%] space-y-10 font-thin text-black items-center justify-center flex flex-col z-[100]">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#contacts"
              className="m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              Contacts
            </a>
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#aboutme"
              className="m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              About Me
            </a>
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#mail"
              className="m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              SendMail
            </a>
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#skills"
              className="m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#projects"
              className="m-1 px-1 text-2xl rounded-md hover:bg-white hover:text-black transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
            >
              Projects
            </a>
          </div>
          <div
            className={`md:hidden backdrop-blur-lg h-screen w-screen absolute inset-0 z-[0] ${
              open ? 'visible' : 'hidden'
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          ></div>
        </div>
        <div
          className={`justify-end space-x-5 font-thin text-gray-100 hidden md:flex `}
        >
          <a
            href="#contacts"
            style={{ textShadow: 2 }}
            className=" self-end m-1 px-1 text-2xl rounded-md hover:text-black hover:bg-red-500 transition duration-150 hover:ease-in"
          >
            Contacts
          </a>
          <a
            href="#aboutme"
            className="self-end m-1 px-1 text-2xl rounded-md hover:text-black hover:bg-green-500 transition duration-150 hover:ease-in"
          >
            AboutMe
          </a>
          <a
            href="#skills"
            className="self-end m-1 px-1 text-2xl rounded-md hover:text-black hover:bg-blue-500 transition duration-150 hover:ease-in"
          >
            Skills
          </a>
          <a
            href="#mail"
            className="self-end m-1 px-1 text-2xl rounded-md hover:text-black hover:bg-purple-500 transition duration-150 hover:ease-in"
          >
            SendMail
          </a>
          <a
            href="#projects"
            className="self-end m-1 px-1 text-2xl rounded-md hover:text-black hover:bg-yellow-400 transition duration-150 hover:ease-in"
          >
            Projects
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
