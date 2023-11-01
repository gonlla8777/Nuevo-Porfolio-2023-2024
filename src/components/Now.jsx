const Now = () => {
  return (
    <div id="now" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        Ahora
      </h1>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        Actualmente, me encuentro cursando en una emocionante pasantía como
        programador en la ONG "Pájaros Caídos". Mi principal función dentro de
        esta organización es la de desarrollador frontend.
        <br /> A través de esta experiencia, tengo la oportunidad de combinar mi
        pasión por la programación con un propósito aún más significativo:
        contribuir al trabajo valioso que realiza "Pájaros Caídos" en beneficio
        de la comunidad.
      </h2>
      <div className="flex py-2 justify-center">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698845294/home_pniigh.png"
          className="w-1/3 h hover:w-1/2 transition-all duration-1000 rounded-xl shadow-xl  hover:border-cyan-300  border-4 border-cyan-200 dark:border-violet-500 dark:hover:border-violet-600"
        />
      </div>
    </div>
  );
};
export default Now;
