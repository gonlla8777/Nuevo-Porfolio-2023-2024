const Project = ({ data }) => {
  return (
    <div id="projects" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        {data.title}
      </h1>
      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        {data.subtitle1}
      </h2>
      <h2
        className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: data.body1 }}
      ></h2>
      <div className="flex justify-center space-x-7 mt-5 ">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1701733210/Screenshot_1701732424_su42um.png"
          className="w-1/4 hover:scale-125 shadow-xl left-20 top-0 transition-transform duration-300 ease-in-out"
        />
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1701733259/Screenshot_1701732385_istnuo.png"
          className="w-1/4 hover:scale-125  shadow-xl transition-transform duration-300 ease-in-out"
        />
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1701733311/Screenshot_1701732392_yuwcsv.png"
          className="w-1/4  shadow-xl hover:scale-125 transition-transform duration-300 ease-in-out"
        />
      </div>

      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        {data.subtitle2}
      </h2>
      <h2
        className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: data.body2 }}
      ></h2>
      <div className="justify-center m-auto shadow-xl ">
        <iframe
          className="w-full aspect-video rounded-lg mt-5"
          src="https://www.youtube.com/embed/kI7lSs5Ikss"
          title="Video de YouTube"
        ></iframe>
      </div>

      <h2 className="font-bold font-sans text-3xl p-2 pt-10 underline dark:decoration-indigo-500 decoration-indigo-300 decoration-3">
        {data.subtitle3}
      </h2>
      <h2
        className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: data.body3 }}
      ></h2>
      <div className="flex py-2 justify-center">
        <img
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1698845294/home_pniigh.png"
          className="w-1/3 h hover:scale-150 transition-all duration-1000 rounded-xl shadow-xl  hover:border-cyan-300  border-4 border-cyan-200 dark:border-violet-500 dark:hover:border-violet-600"
        />
      </div>
    </div>
  );
};
export default Project;
