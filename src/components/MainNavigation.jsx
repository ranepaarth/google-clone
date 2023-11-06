import React, { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { Link, useLocation, useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchQuery = useLocation();
  console.log(location.search.split("?")[1]);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault(); // prevent from triggering a navigation
    navigate(`/search?${searchTerm}`);
  };
  return (
    <div>
      <div className="pt-7 pb-2 pl-4 flex gap-4 items-center md:pl-10">
        <Link to="/">
          <span className="font-semibold text-4xl text-neutral-100 flex items-center">
          <p className="text-blue-600 dark:text-neutral-100">G</p>
            <p className="text-red-600 dark:text-neutral-100">o</p>
            <p className="text-yellow-600 dark:text-neutral-100">o</p>
            <p className="text-blue-600 dark:text-neutral-100">g</p>
            <p className="text-green-600 dark:text-neutral-100">l</p>
            <p className="text-red-600 dark:text-neutral-100">e</p>
          </span>
        </Link>
        <div className="flex px-4 py-3 border-[1px] border-neutral-400 dark:border-2 dark:border-none dark:bg-neutral-600 w-[310px] md:w-[480px] lg:w-[650px] justify-between rounded-full drop-shadow-sm">
          <div className="flex gap-3 items-center">
            <span>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search Google"
                  className="bg-transparent outline-none border-none placeholder:text-neutral-800 text-neutral-800 dark:placeholder:text-neutral-100 dark:text-neutral-100 w-[180px] md:w-[350px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </span>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <div className="gap-2 text-xl text-neutral-700 dark:text-neutral-400 pr-2 border-r-2 border-neutral-700 dark:border-neutral-400 mr-3">
              <RxCross2 />
            </div>
            <div className="flex items-center justify-between gap-3">
              <BsFillMicFill className="text-neutral-700 dark:text-neutral-400" />
              <FaGooglePlay className="text-neutral-700 dark:text-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
