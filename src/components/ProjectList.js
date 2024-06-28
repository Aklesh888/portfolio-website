import React from 'react';
import { Helmet } from 'react-helmet';
import netflix from '../assets/netflix.png';
import astronomy from '../assets/astronomy.png';
import ecommerce from '../assets/ecommerce.png';

import Carousel from './Carousel';

const Projects = (props) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={props.url}
      className="w-[80vw] lg:w-[50vw] h-[auto] min-h-[650px] rounded-lg text-2xl text-center bg-[#bfd560] flex flex-col justify-center items-center space-y-4 my-4"
    >
      <div className=" text-xl text-center font-medium">{props.title}</div>
      <img
        src={props.image}
        alt=""
        className="py-2 h-[100%] w-[150%] rounded-2xl"
      />
      <div className="text-lg">{props.description}</div>
    </a>
  );
};

const projectList = [
  <Projects
    title="Ecommerce App"
    description="An ecommerce site made using fakeapi website. It fetches all the products with its description, title, image, etc. We can add items into cart. We can also check our cart about our orders."
    image={ecommerce}
    url="https://frontend-assignment-gamma-plum.vercel.app/"
    data-aos="fade-up"
  />,
  <Projects
    title="Astronomy App"
    description="A basic website made with NASA Astronomy picture of the day API and Asteroids Api. APOD api fetches an image of a given date with its description and title. Asteroids API fetches data of Asteroids near Earth of particular date. There is also a simple quiz game in it."
    image={astronomy}
    url="https://astronomy-website-blue.vercel.app/"
    data-aos="fade-up"
  />,
  <Projects
    title="Netflix clone"
    description="This is my attempt to clone the default webpage of the popular streaming service, Netflix. It also uses react js and tailwind css."
    image={netflix}
    url="https://super-blini-5fe299.netlify.app"
    data-aos="fade-up"
  />,
];

const ProjectList = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Your Name</title>
        <meta
          name="description"
          content="Portfolio projects of Aklesh Dahal, including Ecommerce App, Astronomy App, and Netflix clone."
        />
      </Helmet>
      <section className="max-w-[100vw]" id="projects" data-aos="fade-up">
        <div className="text-3xl px-4 font-light h-auto w-auto">
          <div className="justify-center flex group text-black transition duration-300 rounded-lg">
            <div className="w-40 rounded-lg bg-yellow-400 py-1"> Projects</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[80vw] lg:w-[50vw] " data-aos="fade-up">
            <Carousel>
              {projectList.map((s, index) => (
                <div key={index}>{s}</div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
