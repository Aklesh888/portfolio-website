import React from "react";

import python from "../assets/python.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";

const IndieLang = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-slate-600 h-[200px] w-[200px]  m-4 rounded-lg">
        <img
          src={props.img}
          alt=""
          className=" h-[90px] w-[90px] transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
        />
        <div className=" pt-4">{props.title}</div>
      </div>
    </>
  );
};

const Languages = () => {
  return (
    <div className="px-4">
      <div href="#" class="group text-white transition font-light duration-300 text-3xl">
        Languages
        <span class="block max-w-0 group-hover:max-w-[140px] transition-all duration-500 h-0.5 bg-white"></span>
      </div>
      <div className="flex justify-between">
        <IndieLang img={html} title="HTML" />
        <IndieLang img={css} title="CSS" />
        <IndieLang img={js} title="Javascript" />
      </div>
      <div className="flex justify-between">
        <IndieLang img={c} title="C" />
        <IndieLang img={cpp} title="CPP" />
        <IndieLang img={python} title="Python" />
      </div>
    </div>
  );
};

export default Languages;
