import React from "react";

const About = () => {
  return (
    <div id="aboutMe" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        Sobre Mi
      </h1>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Soy un programador apasionado por la tecnología y el desarrollo de
        software. Aunque mi formación académica inicial fue en ingeniería civil
        y tengo experiencia en el campo de la construcción, decidí cambiar el
        rumbo de mi vida al sentirme atraído por la programación.
        <br />
        Durante mi formación como programador, desarrollé habilidades en
        diferentes lenguajes de programación y herramientas técnicas.
        <br /> A través de mi experiencia en la construcción y mi capacidad para
        resolver problemas complejos, he desarrollado habilidades transferibles,
        como el pensamiento analítico y la atención al detalle, que son valiosas
        en el campo de la programación.
        <br /> Estoy emocionado por aplicar mis conocimientos y experiencia en
        un entorno enfocado en el desarrollo de software. Mi objetivo es seguir
        creciendo profesionalmente, aprender nuevas tecnologías y contribuir de
        manera significativa en proyectos desafiantes.
      </h2>
      <div className="flex justify-center py-5">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698287212/b1494cc6-9d0c-44cf-aa3a-8ba9d42aea3c_kfionj.jpg"
          className="w-1/3 h hover:w-1/2 transition-all duration-1000 rounded-full shadow-xl  hover:border-cyan-300  border-4 border-cyan-200 dark:border-violet-500 dark:hover:border-violet-600"
        />
      </div>
    </div>
  );
};
export default About;
