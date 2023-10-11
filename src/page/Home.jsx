import BtnDarkMode from "../components/theme/theme";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Now from "../components/Now";
import Contact from "../components/Contact";
import { UpIcon } from "../components/svg/Icons";
const Home = () => {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="relative container mx-auto xl:grid xl:grid-cols-2 ">
        <div className="xl:fixed top-0 Left-0 p-4 h-screen">
          <h1 className="font-bold font-sans  text-8xl animate-fade-up">
            Hello World
          </h1>
          <div>
            <h2 id="top" className="font-light font-sans  text-2xl p-4">
              Gonzalo Llanos - Fullstack Developer
            </h2>
            <div className=" grid w-1/3   ">
              <button
                className="cursor-pointer font-medium font-sans text-2xl pt-20 p-4  hover:text-cyan-400 hover:animate-pulse text-left "
                onClick={() => handleScrollToSection("aboutMe")}
              >
                About me
              </button>
              <button
                className="cursor-pointer font-medium font-sans text-2xl pt-10 p-4 hover:text-cyan-400 hover:animate-pulse text-left"
                onClick={() => handleScrollToSection("projects")}
              >
                Project
              </button>
              <button
                className="cursor-pointer font-medium font-sans text-2xl pt-10 p-4 hover:text-cyan-400 hover:animate-pulse text-left "
                onClick={() => handleScrollToSection("now")}
              >
                Now
              </button>
              <button
                className="cursor-pointer font-medium font-sans text-2xl py-10 p-4 hover:text-cyan-400 hover:animate-pulse text-left "
                onClick={() => handleScrollToSection("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <div className="h-full">
          <div className="screen">
            {" "}
            <AboutMe />
          </div>
          <div>
            {" "}
            <Projects />
          </div>
          <div>
            {" "}
            <Now />
          </div>
          <div>
            {" "}
            <Contact />
          </div>
        </div>
      </div>
      <div className="relative">
        <BtnDarkMode className=" top-0 right-0 inline-block " />
        <button
          className="fixed block bottom-5 right-5 bg-gradient-to-r from-slate-500  p-2 border-2 border-gray-600 rounded-full "
          onClick={() => handleScrollToSection("now")}
        >
          <UpIcon className="absolute" />
        </button>
      </div>
    </>
  );
};
export default Home;
