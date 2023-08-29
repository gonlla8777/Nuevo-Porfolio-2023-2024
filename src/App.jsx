import AppRouter from "./router/AppRoute";
import "./index.css";

function App() {
  const light =
    "bg-gradient-to-b from-slate-400 from-10% via-slate-800 via-30% to-slate-800 to-90%";
  const dark =
    "dark:bg-gradient-to-b from-sky-950 from-10% via-cyan-950 via-30% to-slate-900 to-90% dark:text-white min-h-screen";
  return (
    <div className=" text-blue-950  bg-gradient-to-b from-stone-50 from-10% via-lime-50 via-30% to-pink-50 to-90% dark:bg-gradient-to-b dark:from-sky-950 dark:from-10% dark:via-cyan-950 dark:via-30% dark:to-slate-900 dark:to-90% dark:text-blue-200  min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
