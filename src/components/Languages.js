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
      <div className="flex flex-col justify-center items-center text-black w-[35vh] bg-[#FAEACB] h-[35vh] md:h-[200px] md:w-[200px]  m-4 rounded-lg">
        <img
          src={props.img}
          alt=""
          className="h-[120px] w-[120px] md:h-[90px] md:w-[90px] transition duration-150 hover:scale-125 hover:font-normal hover:ease-in"
        />
        <div className=" pt-4">{props.title}</div>
      </div>
    </>
  );
};

const Languages = () => {
  return (
    <div className="px-4">
      <div
        href="#"
        className=" justify-center flex group text-black transition duration-300 rounded-lg"
      >
        <div className="w-40 rounded-lg bg-orange-400 py-1  text-3xl">
          Languages
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex  justify-center items-center flex-col md:flex-row">
          <IndieLang img={html} title="HTML" />
          <IndieLang img={css} title="CSS" />
          <IndieLang img={js} title="Javascript" />
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <IndieLang img={c} title="C" />
          <IndieLang img={cpp} title="CPP" />
          <IndieLang img={python} title="Python" />
        </div>
      </div>
    </div>
  );
};

export default Languages;
