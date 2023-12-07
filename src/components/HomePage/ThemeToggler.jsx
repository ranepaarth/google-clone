import React from "react";
import MoonIcon from "../../assets/moon-svgrepo-com.svg";
import SunIcon from "../../assets/sun-svgrepo-com.svg";
import { useDarkMode } from "../../hooks/useDarkMode";
const ThemeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={`p-2 rounded-full border-2 ${
        darkMode
          ? "bg-yellow-200 border-yellow-500"
          : "bg-neutral-400 border-neutral-800"
      }`}
      onClick={toggleDarkMode}
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
