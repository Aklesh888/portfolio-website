import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import html from "../assets/html.png";
import css from "../assets/css.png";

const images = [html, css, html];

const Skill = (props) => {
  return (
    <>
      <div className="w-[50vw] rounded-lg font-light text-xl text-center bg-slate-600 flex flex-col justify-center items-center">
        <div className="">{props.title}</div>
        <img src={props.img} alt="" className="w-[200px] h-[200px]" />
        <div className="">{props.description}</div>
      </div>
    </>
  );
};

const skillList = [
  <Skill
    title="in"
    img={html}
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum."
  />,
];

const Skills = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 800;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 800;
  };

  return (
    <>
      <div className="flex flex-col px-4 pb-3 text-white justify-between relative">
        <div
          href="#"
          class="text-3xl font-light group text-white transition duration-300"
        >
          Skills
          <span className="block max-w-0 group-hover:max-w-[60px] transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="absolute right-0 top-5">
          <button
            className="p-2 m-2 rounded-full bg-gray-500"
            onClick={scrollLeft}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-2 m-2 rounded-full bg-gray-500"
            onClick={scrollRight}
          >
            <ChevronRight />
          </button>
        </div>
        <div
          id="content"
          className="flex w-[50vw] items-center justify-start overflow-auto transition-all"
        >
          <div>
            <Skill
              title="in"
              img={html}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
          <div>
            <Skill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
