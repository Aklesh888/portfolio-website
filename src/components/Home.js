import React, { useRef } from "react";
import emailjs from "emailjs-com";

import AboutMe from "./Aboutme";
import Contacts from "./Contacts";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import Skills from './Skills'
import Languages from "./Languages";

import mailme from "../assets/mailme.png";




const Home = () => {
  return (
    <div className="md:px-[10%] lg:px-[20%] flex flex-col justify-center bg-black h-fit w-fit text-white space-y-10">
      <Navbar />
      <HeroSection />
      <Languages/>
      <Skills />
      <ProjectList />
      <Contacts />
      <AboutMe />
      <Sendmail />
      <Footer />
    </div>
  );
};

const Sendmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gwrkpqr",
        "template_lqby9mf",
        form.current,
        "2wUls391byVjGM2ob"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
    <div className="px-4">
      <div href="#" class="group text-white transition font-light duration-300 text-3xl">
        Send Email
        <span class="block max-w-0 group-hover:max-w-[140px] transition-all duration-500 h-0.5 bg-white"></span>
      </div>
      <div className="flex bg-slate-500 rounded-md space-y-10 text-xl my-4">
        <div className="flex flex-1 flex-col space-y-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className={
              "text-2xl font-extralight text-white flex flex-col mx-2 px-2 space-y-1"
            }
          >
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className=" rounded-lg h-[30px] bg-transparent "
            />
            <span className=" h-[2px] bg-white"></span>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="rounded-lg h-[30px] bg-transparent"
            />
            <span className=" h-[2px] bg-white"></span>
            <label>Message</label>
            <textarea
              name="message"
              className="my-2 rounded-md text-black h-[150px]"
            />
            <input
              type="submit"
              value="Send"
              className="bg-white text-black my-4 w-[20%] rounded-md cursor-pointer"
            />
          </form>
        </div>
        <img src={mailme} className="h-[400px] w-[400px] pb-16" alt="" />
      </div>
      </div>
    </>
  );
};


export default Home;
