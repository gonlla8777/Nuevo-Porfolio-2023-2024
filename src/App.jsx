import AppRouter from "./router/AppRoute";
import "./index.css";

function App() {
  return (
    <div className=" text-blue-950 bg-gradient-to-b from-blue-200 from-10% via-cyan-100 via-30% to-sky-100 to-90% dark:bg-gradient-to-b dark:from-indigo-900 dark:from-10% dark:via-blue-950  dark:via-30% dark:to-indigo-950 dark:to-90% dark:text-white  h-fit  transition-all duration-700">
      <AppRouter />
    </div>
  );
}

export default App;
