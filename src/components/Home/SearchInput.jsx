import React, { useState } from "react";
import { BsFillMicFill, BsSearch } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import UniSearchInput from "../UniSearchInput";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent from triggering a navigation
    if (searchTerm) navigate(`/search?${searchTerm}`);
    else navigate("/");
  };

  return <UniSearchInput className={"max-sm:w-[350px] max-md:w-[450px] md:w-[580px]"}/>;
};

export default SearchInput;
