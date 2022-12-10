import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a creative developer and hardworker, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both pixel perfect and development services of web applications or websites!
        </p>

        <br />
        <p className="text-xl">
        I love creating pages where I’m able to actually create enjoyable interactions and experiences for everyone! And with programing'hero education and support, I’m now able to truly call myself a Front-End Developer 
        </p>
      </div>
    </div>
  );
};

export default About;
