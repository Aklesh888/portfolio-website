import React from 'react'


import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contacts = () => {
  

    return (
      <div className="" id="contacts" data-aos="fade-in">
        <div className="text-3xl px-4 py-3 font-light"  data-aos="fade-up">
        <div
        href="#"
        class=" justify-center flex group text-black transition duration-300 rounded-lg"
      >
        <div className="w-40 rounded-lg bg-red-400 py-1  text-3xl">
          Contacts
        </div>
      </div>
        </div>
        <div className="flex justify-center  space-x-5 py-5">
          <a rel='noreferrer' target='_blank' href="https://github.com/Aklesh888">
            <img
              src={github}
              alt=""
              className="h-[50px] w-[50px] transition scale-150 duration-150 hover:scale-[2] hover:ease-in"
            />
          </a>
          <a rel='noreferrer' target='_blank' href="mailto:aklesh.dahal@gmail.com">
            <img
              src={mail}
              alt=""
              className="h-[50px] w-[50px] transition duration-150 hover:scale-125 hover:ease-in"
            />
          </a>
          <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/aklesh-dahal/">
            <img
              src={linkedin}
              alt=""
              className="h-[50px] w-[50px] transition duration-150 hover:scale-125 hover:ease-in"
            />
          </a>
        </div>
      </div>
    );
  };

export default Contacts