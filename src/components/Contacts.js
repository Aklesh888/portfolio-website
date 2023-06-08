import React from 'react'

import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contacts = () => {
    return (
      <div className="" id="contacts">
        <div className="text-3xl px-4 py-3 font-light">
          <div href="#" class="group text-white transition duration-300">
            Contacts
            <span class="block max-w-0 group-hover:max-w-[110px] transition-all duration-500 h-0.5 bg-white"></span>
          </div>
        </div>
        <div className="flex space-x-5 py-5">
          <a href="https://github.com/Aklesh888">
            <img
              src={github}
              alt=""
              className="h-[50px] w-[50px] transition duration-150 hover:scale-125 hover:ease-in"
            />
          </a>
          <a href="mailto:aklesh.dahal@gmail.com">
            <img
              src={mail}
              alt=""
              className="h-[50px] w-[50px] transition duration-150 hover:scale-125 hover:ease-in"
            />
          </a>
          <a href="https://www.linkedin.com/in/aklesh-dahal/">
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