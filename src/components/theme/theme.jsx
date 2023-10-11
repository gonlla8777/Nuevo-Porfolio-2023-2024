import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../svg/Icons";
const initialThemeState = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function BtnDarkMode() {
  const [theme, setTheme] = useState(initialThemeState);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div onClick={handleTheme} className="cursor-pointer ">
      {theme === "light" && (
        <button className="fixed top-5 right-5 bg-gradient-to-r from-slate-500  p-2 border-2 border-gray-600 rounded-full ">
          <MoonIcon />
        </button>
      )}
      {theme === "dark" && (
        <button className="fixed top-5 right-5 bg-gradient-to-r from-slate-500  p-2 border-2 border-gray-600 rounded-full ">
          <SunIcon />
        </button>
      )}
    </div>
  );
}

export default BtnDarkMode;
