import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// import useSearch from "../hooks/useSearch";
import mocks from "../mocks.js";
import {
  Footer,
  PaginationButtons,
  SearchPageHeader,
  SearchPageNav,
  SearchResults,
} from "../routes.js";

const SearchPage = () => {
  const { search } = useLocation();
  const [startIndex, setStartIndex] = useState(1);
  const searchTerm = search?.split("?").filter((item) => item !== "")[0];
  console.log(searchTerm);
  const data = mocks;
  // const { data } = useSearch(searchTerm, startIndex);
  // console.log(data);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === 'dark');
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
    else if (theme === "light") setDarkMode(false);
  },[]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  
  return (
    <>
      <div className="border-b border-neutral-300 dark:border-neutral-500 pb-4">
        <SearchPageHeader />
        <SearchPageNav />
      </div>
      <div>{data && <SearchResults data={data} />}</div>
      <PaginationButtons
        startIndex={startIndex}
        setStartIndex={setStartIndex}
      />
      <Footer />
    </>
  );
};

export default SearchPage;
