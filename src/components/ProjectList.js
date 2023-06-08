import React from "react";
import netflix from '../assets/netflix.png'
import astronomy from "../assets/astronomy.png";
import ecommerce from "../assets/ecommerce.png";


const Projects = (props) => {
  return (
    <a
      target='_blank'
      rel="noreferrer"
      href={props.url}
      className="flex flex-col justify-center h-[350] w-[80%] mx-2 md:w-[90%] bg-[#FAEACB] m-4 text-black rounded-md px-2 py-3 max-w-[100vw]"
    >
      <div className=" text-xl text-center font-medium">{props.title}</div>
      <img src={props.image} alt='' className="py-2 h-[100%] w-[150%] rounded-2xl" />
      <div className="text-lg">{props.description}</div>
    </a>
  );
};

const ProjectList = () => {
  return (
    <>
      <div className=" max-w-[100vw]" id="projects" data-aos="fade-up">
        <div className=" text-3xl px-4 font-light h-auto w-auto">
          <div href="#" class=" justify-center flex group text-black transition duration-300 rounded-lg">
            <div className="w-40 rounded-lg bg-yellow-400 py-1"> Projects</div>
          </div>
        </div>
        <div className="flex flex-col h-auto items-center rounded-md mt-4 justify-center w-full">
          <Projects
            title="Astronomy App"
            description="A basic website made with NASA Astronomy picture of the day API and Asteroids Api. APOD 
            api fetches an image of a given date with its description and title. Asteroids API fetches data of Asteroids
             near Earth of aprticular date. There is also a simple quiz game in it."
            image={astronomy}
            url="http://astronomywebsite.great-site.net/"
            data-aos="fade-up"
          />
          <Projects
            title="Netflix clone"
            description="This is my attempt to clone the default webpage of the popular sstreaming service, Netflix. It also uses react js 
            and tailwind css. "
            image={netflix}
            url="http://netflixclone.infinityfreeapp.com/?i=1"
            data-aos="fade-up"
          />
          <Projects
            title="Ecommerce App"
            description="An ecommerce site made using fakeapi website. It fetches all the products with its description, title, image, etc. 
            We can add items into cart. We can also check our cart about our orders."
            image={ecommerce}
            url="https://friendly-biscuit-482fcc.netlify.app            "
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectList;
