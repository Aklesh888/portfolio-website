import React from 'react';
import { Helmet } from 'react-helmet';

import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Contacts = () => {
  return (
    <section className="" id="contacts" data-aos="fade-in">
      <Helmet>
        <title>Contact Information - Your Name</title>
        <meta name="description" content="Contact information for Aklesh Dahal." />
      </Helmet>
      <article className="text-3xl px-4 py-3 font-light" data-aos="fade-up">
        <div className="justify-center flex group text-black transition duration-300 rounded-lg">
          <div className="w-40 rounded-lg bg-red-400 py-1 text-3xl">Contacts</div>
        </div>
      </article>
      <div className="flex justify-center space-x-5 py-5">
        <a rel="noreferrer" target="_blank" href="https://github.com/Aklesh888">
          <img
            src={github}
            alt="GitHub"
            className="h-[50px] w-[50px] transition scale-150 duration-150 hover:scale-[2] hover:ease-in"
          />
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:aklesh.dahal@gmail.com">
          <img
            src={mail}
            alt="Email"
            className="h-[50px] w-[50px] transition duration-150 hover:scale-125 hover:ease-in"
          />
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/aklesh-dahal/">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-[50px] w-[50px] transition duration-150 hover:scale-125 hover:ease-in"
          />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
