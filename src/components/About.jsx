import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 font-sans">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div> </div>
        </div>
        <div className="max-w-[1000px] px-4 w-full grid sm:grid-cols-2 gap-8 font-serif ">
          <div className="sm:text-right text-3xl font-bold ">
            <p>Hi, I'm Kelvin, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              I am passionate about building excellent software that improves
              the lives of those around me. i specialize in creating sofware for
              clients ranging from individuals and small-businesses all the way
              to large enterprise corporations. What would you do if you had a
              software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
