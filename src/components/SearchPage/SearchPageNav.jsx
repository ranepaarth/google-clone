import React from "react";

import { NavLink, useLocation } from "react-router-dom";
const SearchPageNav = () => {
  const { pathname, search } = useLocation();
  // console.log(pathname+search)

  return (
      <div className="w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[52] flex gap-2 text-neutral-800 dark:text-neutral-400">
        {/* <span className="p-1 flex justify-center items-center md:mt-3 md:px-4 md:py-2 border border-neutral-400 rounded-full dark:hover:bg-neutral-600 hover:bg-neutral-300">
          <NavLink to={`${pathname}${search}`}>All</NavLink>
        </span> */}
        <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full dark:hover:bg-neutral-600 hover:bg-neutral-300 invisible">
          <NavLink to=''>Images</NavLink>
        </span>
      </div>
  );
};

export default SearchPageNav;
