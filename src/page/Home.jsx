import BtnDarkMode from "../components/theme/theme";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Now from "../components/Now";
import {
  UpIcon,
  Ln,
  Git,
  Phone,
  EsIcon,
  EnIcon,
} from "../components/svg/Icons";
import React, { useState, useEffect } from "react";
import {
  getStoredLanguage,
  setLanguage,
} from "../components/languageService/languageService";
import data from "../assets/utils/data/data.json";

const Home = () => {
  const [language, setLanguageState] = useState(getStoredLanguage());
  useEffect(() => {
    setLanguage(language);
  }, [language]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguageState(selectedLanguage);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación de desplazamiento suave
    });
  };
  console.log(data[language]);
  return (
    <>
      <div className="relative container mx-auto lg:grid lg:grid-cols-3  lg:grid-flow-dense">
        <div className="lg:fixed top-5 left-0  lg:row-span-2 lg:col-span-1 min-h-screen lg:w-1/3 pt-10 ">
          <div class="">
            <h1 className="font-bold  mt-6   font-sans  text-7xl animate-fade-up underline dark:decoration-indigo-500 decoration-indigo-300 text-center">
              Hello World
            </h1>
            <h2 className="font-light font-sans  text-2xl p-4 dark:text-slate-300 text-center">
              Gonzalo Llanos - Fullstack Developer
            </h2>
            <div>
              <div className="grid min:w-1/3 pt-7 sm:pt-28 text-center ">
                <div className="mx-auto grid gap-4">
                  <button
                    className="cursor-pointer font-medium font-sans text-2xl  mt-3 hover:bg-cyan-200 dark:hover-bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-44 h-14 hover:text-cyan-400 hover:animate-pulse inline-block"
                    onClick={() => handleScrollToSection("aboutMe")}
                  >
                    {data[language].home.aboutMe}
                  </button>

                  <button
                    className="cursor-pointer font-medium font-sans text-2xl mt-3 hover:bg-cyan-200 dark:hover-bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-44 h-14 hover:text-cyan-400 hover:animate-pulse inline-block"
                    onClick={() => handleScrollToSection("projects")}
                  >
                    {data[language].home.projects}
                  </button>

                  <button
                    className="cursor-pointer font-medium font-sans text-2xl mt-3 hover:bg-cyan-200 dark:hover-bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-44 h-14 hover:text-cyan-400 hover:animate-pulse inline-block"
                    onClick={() => handleScrollToSection("now")}
                  >
                    {data[language].home.now}
                  </button>

                  <div className="flex justify-center space-x-4 inset-x-0 bottom-0 pt-14 sm:pt-40">
                    <Ln />
                    <Git />
                    <Phone />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className=" lg:col-span-2 pl-5 ">
          <div className="min-h-screen">
            {" "}
            <AboutMe data={data[language].aboutMe} />
          </div>
          <div className="min-h-screen">
            {" "}
            <Projects data={data[language].projects} />
          </div>
          <div className="min-h-screen">
            {" "}
            <Now data={data[language].now} />
          </div>
        </div>
      </div>
      <div className="relative">
        <BtnDarkMode className=" top-0 right-0 inline-block " />

        <button className="fixed  bottom-20 right-5 bg-gradient-to-r from-slate-500  p-2 border-2 border-gray-600 rounded-full  ">
          {language === "english" && (
            <button onClick={() => handleLanguageChange("spanish")}>
              <EsIcon />
            </button>
          )}
          {language === "spanish" && (
            <button onClick={() => handleLanguageChange("english")}>
              <EnIcon />
            </button>
          )}
        </button>
        <button
          className="fixed  bottom-5 right-5 bg-gradient-to-r from-slate-500  p-2 border-2 border-gray-600 rounded-full  "
          onClick={handleScrollToTop}
        >
          <UpIcon />
        </button>
        <div className="w-auto">
          <ul class="floatingBoxes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
