import React from 'react'

import astronomy from "../assets/astronomy.png";

const Projects = (props) => {
    return (
      <a href={props.url} className="flex flex-col justify-center h-[350] w-[60%] md:w-[700px] bg-slate-600 m-4 text-white rounded-md px-2 py-3">
        <div className=" text-xl text-center font-medium">{props.title}</div>
        <img src={props.image} className="py-2 h-[300px] w-[700px]" />
        <div className="text-lg">{props.description}</div>
      </a>
    );
  };
  
  const ProjectList = () => {
    return (
      <>
        <div className="" id="projects">
          <div className=" text-3xl px-4 font-light h-auto w-auto">
            <div href="#" class="group text-white transition duration-300">
              Projects
              <span class="block max-w-0 group-hover:max-w-[100px] transition-all duration-500 h-0.5 bg-white"></span>
            </div>
          </div>
          <div className="flex flex-col h-auto w-[700px] rounded-md mt-4">
            <Projects
              title="Astronomy App"
              description="This is project one. Lets write her some bullshit. But the problem is I don't know what to write even as bullshit. So I am tying what I don't know about to write as bullshit. I hope it is making sense amirite hehe."
              image={astronomy}
              url='https://github.com/Aklesh888/astronomy_app'
            />
            <Projects
              title="Project two"
              description="This is project two"
              image={astronomy}
              url={'https://github.com/Aklesh888/astronomy_app'}
            />
          </div>
        </div>
      </>
    );
  };
  
  
export default ProjectList