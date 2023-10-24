import React from "react";

const About = () => {
  return (
    <div id="aboutMe" className="h-auto pt-5">
      
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up ">
        About Me
      </h1>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Soy un programador apasionado por la tecnología y el desarrollo de
        software. Aunque mi formación académica inicial fue en ingeniería civil
        y tengo experiencia en el campo de la construcción, decidí cambiar el
        rumbo de mi vida al sentirme atraído por la programación.
        <br /> Mi pasión por la tecnología y el deseo de explorar nuevas
        oportunidades me llevaron a embarcarme en un bootcamp de programación.
        Durante ese programa intensivo, desarrollé habilidades en diferentes
        lenguajes de programación y herramientas técnicas, y descubrí mi
        afinidad por el desarrollo de software.
        <br /> A través de mi experiencia en la construcción y mi capacidad para
        resolver problemas complejos, he desarrollado habilidades transferibles,
        como el pensamiento analítico y la atención al detalle, que son valiosas
        en el campo de la programación.
        <br /> Estoy emocionado por aplicar mis conocimientos y experiencia en
        un entorno laboral enfocado en el desarrollo de software. Mi objetivo es
        seguir creciendo profesionalmente, aprender nuevas tecnologías y
        contribuir de manera significativa en proyectos desafiantes.
        <br /> Estoy listo para enfrentar nuevos retos y demostrar mi valía como
        programador proactivo y motivado, combinando mis habilidades en la
        construcción con mi pasión por la programación para ofrecer soluciones
        innovadoras.
      </h2>
      <div className="flex justify-center py-5">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1697091062/gonzalo_szgeyp.jpg"
          className="w-1/3 hover:w-1/2 transition-all duration-1000 rounded-lg shadow-xl border-cyan-400 border-solid hover:border-cyan-300  border-2 dark:border-violet-800 dark:hover:border-violet-600"
        />
      </div>
    </div>
  );
};
export default About;
