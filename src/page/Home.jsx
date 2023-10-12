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
      <div className="relative container mx-auto md:grid md:grid-cols-3  md:grid-flow-dense">
        <div className="fixed mdtop-5 md:left-10 md:row-span-2 md:col-span-1 min-h-screen pt-10 pl-10">
          <div class="fixed">
            <h1 className="font-bold font-sans  text-7xl animate-fade-up">
              Hello World
            </h1>
            <div>
              <h2 className="font-light font-sans  text-2xl p-4">
                Gonzalo Llanos - Fullstack Developer
              </h2>
              <div className=" grid min:w-1/3   ">
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
        </div>
        <div></div>
        <div className=" md:col-span-2 ">
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
