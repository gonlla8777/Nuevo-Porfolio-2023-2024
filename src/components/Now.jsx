const Now = ({ data }) => {
  return (
    <div id="now" className="h-auto pt-5">
      <h1 className="font-bold font-sans text-6xl p-2 pt-4 animate-fade-up  underline dark:decoration-indigo-500 decoration-indigo-300">
        {data.title}
      </h1>
      <h2 className="font-light font-sans text-xl p-4 animate-fade animate-once animate-ease-in animate-duration-[2000ms] dark:text-slate-300">
        {data.body}
      </h2>
      <div className="flex mt-10 justify-center">
        <img
          src={
            "https://res.cloudinary.com/di5mf85h3/image/upload/v1708093477/Logo_lz2bpd.svg"
          }
          className="w-20"
        />
        <div className="flex text-3xl pl-2 pb-2">
          <p>Zenify</p> <span className="px-2 "></span>{" "}
          <p className="text-green-600">Labs</p>
        </div>
        <p className="pb-7">TM</p>
      </div>
    </div>
  );
};
export default Now;
