import React, { useEffect, useState } from "react";
import MoonIcon from "../../assets/moon-svgrepo-com.svg";
import SunIcon from "../../assets/sun-svgrepo-com.svg";
const ThemeToggler = () => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === 'dark');

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
    else if (theme === "light") setDarkMode(false);
  },[]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className={`p-2 rounded-full border-2 ${
        darkMode
          ? "bg-yellow-200 border-yellow-500"
          : "bg-neutral-400 border-neutral-800"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <img src={SunIcon} alt="Light" className="w-5" />
      ) : (
        <img src={MoonIcon} alt="Dark" className="w-5 mix-blend-multiply" />
      )}
    </button>
  );
};

export default ThemeToggler;
