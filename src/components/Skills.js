import React from "react";
import Carousel from "./Carousel";

import html from "../assets/html.png";
import godot from "../assets/godot.png";
import react from "../assets/react.png";
import photoshop from "../assets/photoshop.png";

const Skill = (props) => {
  return (
    <>
      <div className="w-[80vw] lg:w-[50vw] h-[auto] min-h-[650px] rounded-lg text-2xl text-center bg-[#9CC0E7] flex flex-col justify-center items-center space-y-4">
        <div className="mt-5">{props.title}</div>
        <img src={props.img} alt="" className="w-[200px] h-[200px]" />
        <div className="font-light text-xl mx-5">{props.description}</div>
      </div>
    </>
  );
};

const skillList = [
  <Skill
    title="Web Development"
    img={html}
    description="I have been learning front end development for a year now. I have learnt many technologies such as html, CSS, javascript, tailwind, 
    bootstrap and react in this time. I am still learning and enhancing my skills in front end. As an aspiring front-end web developer, I have a
    strong foundation in HTML, CSS, and JavaScript. I can build a responsive personal website using React and tailwind, showcasing my skills
    and projects like this one. 
    "
  />,
  <Skill
    title="Godot Engine"
    img={godot}
    description="I always wanted to make game since I was a kid. After some research, I concluded that learning godot would be best option to learn for me.
    Hence I started learning godot game engine. I am still a begineer in this engine but I can build simple 2D and 3D games using this engine. I will
    continue to develop my skills in this engine  and hopefully create a decent game in future."
  />,
  <Skill
    title="Graphic Design"
    img={photoshop}
    description="I have basic skills in graphic design software such as photoshop, Illustrator and Ui/UX designing software such as Figma. I also have
    understanding of basic fundamentals of UI/UX designing process, which I learned in college."
  />,
];

const Skills = () => {
  return (
    <>
      <div
        className="flex flex-col px-4 pb-3 text-white justify-between relative max-w-[100vw]"
        id="skills"
        data-aos="fade-up"
      >
        <div
          href="#"
          className=" justify-center flex group text-black transition duration-300 rounded-lg"
        >
          <div className="w-40 rounded-lg bg-blue-400 py-1 my-2 text-3xl">
            Skills
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[80vw]  lg:w-[50vw] " data-aos="fade-up">
            <Carousel>
              {skillList.map((s) => (
                <div className="">{s}</div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
