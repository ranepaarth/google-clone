import React, { useEffect, useRef, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const UniSearchInput = ({ mainDivClassName, formInputClass }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent from triggering a navigation
    if (searchTerm) navigate(`/search?${searchTerm}`);
  };
  // console.log(searchTerm);
  return (
    <div
      className={`dark:bg-neutral-600 dark:border-none border-2 focus-within:shadow-md flex items-center justify-between px-4 py-2 rounded-full grow hover:shadow-xl shadow-black ${mainDivClassName}`}
    >
      <span className="flex items-center w-full">
        <p className="text-neutral-700 dark:text-neutral-100 text-xl">
          <IoMdSearch />
        </p>
        <form onSubmit={handleSearch} className="w-[88%]">
          <input
            type="text"
            value={searchTerm}
            ref={inputRef}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`bg-transparent dark:text-neutral-100 font-medium outline-none border-none mx-4 text-neutral-800 dark:placeholder:text-neutral-100 dark:caret-white caret-black ${formInputClass}`}
            spellCheck="false"
            placeholder="Search Google"
          />
        </form>
      </span>
      <span className="flex gap-2 dark:text-neutral-300 text-blue-500 text-lg cursor-pointer">
        <p>
          <BsFillMicFill />
        </p>
        <p>
          <FaGooglePlay />
        </p>
      </span>
    </div>
  );
};

export default UniSearchInput;
