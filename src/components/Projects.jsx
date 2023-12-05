const Project = () => {
  return (
    <div id="projects" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        Proyectos
      </h1>
      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        Party Now!
      </h2>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Party Now es una aplicación innovadora desarrollada en React Native que
        te permite explorar y descubrir la escena de la fiesta en tu ciudad de
        manera rápida y sencilla. Desde boliches nocturnos vibrantes hasta
        eventos exclusivos, nuestra aplicación te conecta con las experiencias
        más emocionantes en tiempo real.
      </h2>
      <div className="flex justify-around ">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1701733210/Screenshot_1701732424_su42um.png"
          className="w-1/4 hover:scale-110 rounded-3xl shadow-xl left-20 top-0 transition-transform duration-300 ease-in-out"
        />
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1701733259/Screenshot_1701732385_istnuo.png"
          className="w-1/4 hover:scale-110 rounded-xl shadow-xl transition-transform duration-300 ease-in-out"
        />
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1701733311/Screenshot_1701732392_yuwcsv.png"
          className="w-1/4 rounded-xl shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>

      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        Rent-fy
      </h2>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Este fue mi primer proyecto en que formé parte de un equipo.
        <br /> Rent-ify es un proyecto web innovador que ofrece a sus usuarios
        la posibilidad de alquilar productos que no están en uso, brindando así
        una alternativa sostenible y económica para aquellos que buscan acceder
        a artículos sin tener que comprarlos. La idea detrás de Rent-ify es
        aprovechar los recursos infrautilizados y fomentar la economía
        colaborativa, permitiendo a las personas ganar dinero extra alquilando
        sus productos mientras satisfacen las necesidades de otros usuarios.
      </h2>
      <div className="justify-center m-auto shadow-xl ">
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/kI7lSs5Ikss"
          title="Video de YouTube"
        ></iframe>
      </div>
    </div>
  );
};
export default Project;
