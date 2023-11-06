import React, { useState, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill, BsPersonCircle } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
const Home = () => {
  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system")
  const element = document.documentElement

  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)")

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
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) element.classList.add('dark');
    else element.classList.remove('dark');
  }

  onWindowMatch()

  useEffect(()=>{
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
      element.classList.remove('dark')
      localStorage.setItem('theme','light')
      break;
      case 'system':

      default:
        localStorage.removeItem('theme')
        break;
    }
  },[theme])
  return (
    <nav className="">
      <div className="flex justify-between px-10 py-2 text-neutral-800 dark:text-neutral-200">
        <div className="flex gap-4 items-center">
          <Link
            to="/about"
            className="hover:bg-neutral-500 py-2 px-4 rounded-full"
          >
            About
          </Link>
          <Link
            to="/store"
            className="hover:bg-neutral-500 py-2 px-4 rounded-full"
          >
            Store
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to="/gmail"
            className="hover:bg-neutral-500 py-2 px-4 rounded-full"
          >
            Gmail
          </Link>
          <Link
            to="/images"
            className="hover:bg-neutral-500 py-2 px-4 rounded-full"
          >
            Images
          </Link>
          <span className="p-2 text-2xl text-neutral-800 dark:text-neutral-200">
            <BsPersonCircle />
          </span>
        </div>
      </div>

      <div className="mx-14 flex items-center justify-end">
        <span className="duration-100 dark:text-gray-100 dark:bg-slate-700 bg-gray-100 rounded flex items-center justify-center p-3 gap-3">
          {options.map((item) => (
            <button className={`tex-xl rounded-full m-1 ${theme === item.text && "text-sky-600"}`}
            onClick={()=>setTheme(item.text)}
            >
              {item.icon}
            </button>
          ))}
        </span>
      </div>

      <div className="h-full mt-52">
        <div className="flex justify-center items-center">
          <div className="flex  items-center gap-1 text-8xl font-serif dark:text-neutral-100">
            <p className="text-blue-600 dark:text-neutral-100">G</p>
            <p className="text-red-600 dark:text-neutral-100">o</p>
            <p className="text-yellow-600 dark:text-neutral-100">o</p>
            <p className="text-blue-600 dark:text-neutral-100">g</p>
            <p className="text-green-600 dark:text-neutral-100">l</p>
            <p className="text-red-600 dark:text-neutral-100">e</p>
          </div>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
    </nav>
  );
};

export default Home;
