import { useEffect, useState } from "react";

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
    <div onClick={handleTheme} className="cursor-pointer">
      {theme === "light" && (
        <button className="fixed top-5 right-5 bg-slate-400">
          LightMode{localStorage.getItem("theme")}
        </button>
      )}
      {theme === "dark" && (
        <button className="fixed top-5 right-5 bg-slate-300">
          DarkMode{localStorage.getItem("theme")}
        </button>
      )}
    </div>
  );
}

export default BtnDarkMode;
