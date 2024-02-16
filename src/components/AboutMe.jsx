import React from "react";

const About = ({ data }) => {
  return (
    <div id="aboutMe" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        {data.title}
      </h1>
      <h2
        className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: data.body }}
      ></h2>
      <div className="flex justify-center py-5">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698287212/b1494cc6-9d0c-44cf-aa3a-8ba9d42aea3c_kfionj.jpg"
          className="w-1/3 h hover:scale-125 transition-all duration-1000 rounded-full shadow-xl  hover:border-cyan-300  border-4 border-cyan-200 dark:border-violet-500 dark:hover:border-violet-600"
        />
      </div>
    </div>
  );
};

export default About;
