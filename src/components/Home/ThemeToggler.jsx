import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
const ThemeToggler = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
      );
      const element = document.documentElement;
    
      const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
    
      const options = [
        {
          icon: <BsFillSunFill />,
          text: "light",
        },
        {
          icon: <BsFillMoonFill />,
          text: "dark",
        },
        {
          icon: <RiComputerFill />,
          text: "system",
        },
      ];
    
      function onWindowMatch() {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) && darkQuery.matches)
        )
          element.classList.add("dark");
        else element.classList.remove("dark");
      }
    
      onWindowMatch();
    
      useEffect(() => {
        switch (theme) {
          case "dark":
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            break;
          case "light":
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            break;
          case "system":
    
          default:
            localStorage.removeItem("theme");
            onWindowMatch();
            break;
        }
      }, [theme]);
    
      darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
          if (e.matches) {
            element.classList.add("dark");
          } else element.classList.remove("dark");
        }
      });
  return (
    <div className="mx-14 flex items-center justify-end">
    <span className="duration-100 dark:text-gray-100 dark:bg-slate-700 bg-gray-100 rounded flex items-center justify-center p-3 gap-3">
      {options.map((item) => (
        <button
          className={`tex-xl rounded-full m-1 ${
            theme === item.text && "text-sky-600"
          }`}
          onClick={() => setTheme(item.text)}
          key={item.text}
        >
          <p>{item.icon}</p>
        </button>
      ))}
    </span>
  </div>
  )
}

export default ThemeToggler