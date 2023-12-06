import React, { useEffect, useRef, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const UniSearchInput = ({mainDivClassName,formInputClass}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent from triggering a navigation
    if (searchTerm) navigate(`/search?${searchTerm}`);
    else navigate("/");
  };
  return (
    <div className={"dark:bg-neutral-50 dark:border-none border-2 focus-within:shadow-md flex items-center justify-between px-4 py-3 rounded-full grow hover:shadow-lg shadow-black " + mainDivClassName}>
      <span className="flex items-center">
        <p className="text-neutral-600 text-xl">
          <IoMdSearch />
        </p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            ref={inputRef}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={"bg-transparent text-neutral-700 outline-none border-none ml-4 placeholder:text-neutral-600 caret-black " + formInputClass }
            placeholder="Search Google"
          />
        </form>
      </span>
      <span className="flex gap-2 text-neutral-800 text-lg cursor-pointer">
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
