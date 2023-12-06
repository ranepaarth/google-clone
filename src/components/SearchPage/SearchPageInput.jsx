import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import UniSearchInput from "../UniSearchInput";

const SearchPageInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault(); // prevent from triggering a navigation
    if (searchTerm) navigate(`/search?${searchTerm}`);
  };
  return (
    <div>
      <div className="pt-7 pb-2 pl-4 flex gap-8 items-center md:pl-10">
        <Link to="/">
          <span className="font-semibold text-3xl text-neutral-100 flex items-center">
            <p className="text-blue-600 dark:text-neutral-100">G</p>
            <p className="text-red-600 dark:text-neutral-100">o</p>
            <p className="text-yellow-400 dark:text-neutral-100">o</p>
            <p className="text-blue-600 dark:text-neutral-100">g</p>
            <p className="text-green-600 dark:text-neutral-100">l</p>
            <p className="text-red-600 dark:text-neutral-100">e</p>
          </span>
        </Link>
        {/* <div className="flex px-4 py-3 border-[1px] border-neutral-400 dark:border-2 dark:border-none dark:bg-neutral-600 w-[310px] md:w-[480px] lg:w-[650px] justify-between rounded-full drop-shadow-sm">
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
            <span className="gap-2 text-xl text-neutral-700 dark:text-neutral-400 cursor-pointer flex">
              <p
                className="mr-2 dark:hover:text-white hover:text-blue-500"
                onClick={() => {
                  setSearchTerm("");
                }}
                onKeyDown={() => {
                  setSearchTerm("");
                }}
              >
                <RxCross2 />
              </p>
              <p className="h-5 w-px bg-neutral-200"></p>
            </span>
            <div className="flex items-center justify-between gap-3">
              <BsFillMicFill className="text-neutral-700 dark:text-neutral-400" />
              <FaGooglePlay className="text-neutral-700 dark:text-neutral-400" />
            </div>
          </div>
        </div> */}

        <div className="flex items-center justify-center">
          <UniSearchInput
            mainDivClassName={" max-sm:w-[310px] max-md:w-[410px] md:w-[550px]"}
            formInputClass={"max-sm:w-[190px] max-md:w-[290px] md:w-[430px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPageInput;
