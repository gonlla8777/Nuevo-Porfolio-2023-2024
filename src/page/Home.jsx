import BtnDarkMode from "../components/theme/theme";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Now from "../components/Now";
const Home = () => {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div>
        <BtnDarkMode className="fixed top-0 right-0 bg-white" />
      </div>
      <div className="container mx-auto xl:grid xl:grid-cols-2 ">
        <div className="xl:fixed top-0 Left-0 p-4 ">
          <h1 className="font-bold font-sans  text-8xl animate-fade-up">
            Hello World
          </h1>
          <h2 className="font-light font-sans  text-2xl p-4">
            Mi nombre es Gonzalo Llanos y soy Fullstack Developer
          </h2>
          <h3
            className="font-medium font-sans text-2xl pt-20 p-4 hover:text-cyan-400  "
            onClick={() => handleScrollToSection("aboutMe")}
          >
            About me
          </h3>
          <h3
            className="font-medium font-sans  text-2xl p-4 hover:text-cyan-400"
            onClick={() => handleScrollToSection("projects")}
          >
            Project
          </h3>
          <h3
            className="font-medium font-sans text-2xl p-4 hover:text-cyan-400"
            onClick={() => handleScrollToSection("now")}
          >
            Now
          </h3>
        </div>
        <div></div>
        <div className="h-full">
          <div>
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
        </div>
      </div>
    </>
  );
};
export default Home;
