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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación de desplazamiento suave
    });
  };
  return (
    <>
      <div className="relative container mx-auto lg:grid lg:grid-cols-3  lg:grid-flow-dense">
        <div className="lg:fixed top-5 left-0  lg:row-span-2 lg:col-span-1 min-h-screen lg:w-1/3 pt-10 pl-10">
          <div class="">
            <h1 className="font-bold font-sans  text-7xl animate-fade-up underline dark:decoration-indigo-500 decoration-indigo-300">
              Hello World
            </h1>
            <div>
              <h2 className="font-light font-sans  text-2xl p-4 dark:text-slate-300">
                Gonzalo Llanos - Fullstack Developer
              </h2>
              <div className=" grid min:w-1/3 pt-12 ">
                <button
                  className="cursor-pointer font-medium font-sans text-2xl m-5 hover:bg-cyan-200  dark:hover:bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-1/2 h-1/2  hover:text-cyan-400 hover:animate-pulse text-center "
                  onClick={() => handleScrollToSection("aboutMe")}
                >
                  About me
                </button>

                <button
                  className="cursor-pointer font-medium font-sans text-2xl m-5  hover:bg-cyan-200  dark:hover:bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-1/2 h-1/2  hover:text-cyan-400 hover:animate-pulse text-center "
                  onClick={() => handleScrollToSection("projects")}
                >
                  Project
                </button>
                <button
                  className="cursor-pointer font-medium font-sans text-2xl m-5  hover:bg-cyan-200  dark:hover:bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-1/2 h-1/2  hover:text-cyan-400 hover:animate-pulse text-center "
                  onClick={() => handleScrollToSection("now")}
                >
                  Now
                </button>
                <button
                  className="cursor-pointer font-medium font-sans text-2xl m-5  hover:bg-cyan-200  dark:hover:bg-indigo-600 rounded-full shadow-md dark:shadow-indigo-600/50 w-1/2 h-1/2  hover:text-cyan-400 hover:animate-pulse text-center "
                  onClick={() => handleScrollToSection("contact")}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className=" lg:col-span-2 pl-5 ">
          <div className="min-h-screen">
            {" "}
            <AboutMe />
          </div>
          <div className="min-h-screen">
            {" "}
            <Projects />
          </div>
          <div className="min-h-screen">
            {" "}
            <Now />
          </div>
          <div className="min-h-screen">
            {" "}
            <Contact />
          </div>
        </div>
      </div>
      <div className="relative">
        <BtnDarkMode className=" top-0 right-0 inline-block " />
        <button
          className="fixed  bottom-5 right-5 bg-gradient-to-r from-slate-500  p-2 border-2 border-gray-600 rounded-full  "
          onClick={handleScrollToTop}
        >
          <UpIcon />
        </button>
      </div>
    </>
  );
};
export default Home;
