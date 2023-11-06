import React, { useState } from "react";
import { BsSearch, BsFillMicFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) =>{
    e.preventDefault(); // prevent from triggering a navigation
    navigate(`/search?${searchTerm}`);
  }

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex px-4 py-3 dark:bg-neutral-100 bg-transparent border-neutral-300 border-[1px] w-[350px] md:w-[500px] justify-between rounded-full drop-shadow-sm">
        <div className="flex gap-3 items-center">
          <BsSearch className="text-neutral-700" />
          <span className="w-[210px] md:w-[300px]">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Google"
                className="bg-transparent outline-none border-none placeholder:text-neutral-700 text-neutral-900 min-w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </span>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <BsFillMicFill className="text-neutral-700" />
          <FaGooglePlay className="text-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
