const Project = () => {
  return (
    <div id="projects" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        Projects
      </h1>
      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        Pokédex
      </h2>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Mi primer proyecto como desarrollador fue una PokeApi en React Native,
        contaba además con otras funcionalidades, como por ejemplo la creación
        de tareas con sus respectivos checks y una visualización de las tareas
        pendientes. También integré la ubicación en tiempo real a través de un
        framework.
      </h2>
      <div className="flex space-x-4 pt-2">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698842175/porfolioReact_pyqktb.png"
          className="w-1/3 rounded-3xl"
        />
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698842171/porforlioReact2_d9kqdw.png"
          className="w-1/3 rounded-xl"
        />
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698842173/porforlioReact3_c8eibu.png"
          className="w-1/3 rounded-xl"
        />
      </div>
      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        Renti-fy
      </h2>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Mi primer proyecto como desarrollador fue una PokeApi en React Native,
        contaba además con otras funcionalidades, como por ejemplo la creación
        de tareas con sus respectivos checks y una visualización de las tareas
        pendientes. También integré la ubicación en tiempo real a través de un
        framework.
      </h2>
      <div className="flex pt-2">
        <iframe
          class="w-full aspect-video ..."
          src="https://www.youtube.com/watch?v=kI7lSs5Ikss"
        ></iframe>
      </div>
    </div>
  );
};
export default Project;
