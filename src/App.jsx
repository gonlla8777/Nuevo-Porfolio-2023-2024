import AppRouter from "./router/AppRoute";
import "./index.css";

function App() {
  return (
    <div className=" text-blue-950 bg-gradient-to-b from-sky-100 from-10% via-cyan-100 via-30% to-amber-50 to-90% dark:bg-gradient-to-b dark:from-indigo-700 dark:from-10% dark:via-blue-900  dark:via-30% dark:to-slate-900 dark:to-90% dark:text-white  h-full transition-all duration-700">
      <AppRouter />
    </div>
  );
}

export default App;
