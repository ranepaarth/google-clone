import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./SearchPage/Footer";
import MainNavigation from "./SearchPage/SearchPageInput";
import SubNavigation from "./SearchPage/SearchPageNav";
import SearchResults from "./SearchPage/SearchResultSection/SearchResults";

// import useSearch from "../hooks/useSearch";

import mocks from "../mocks.js";
import PaginationButtons from "./SearchPage/PaginationButtons";

const SearchPage = () => {
  const { search } = useLocation();
  const [startIndex, setStartIndex] = useState(1);
  const searchTerm = search?.split("?").filter((item) => item !== "")[0];
  // console.log(searchTerm);
  const data = mocks;
  // const { data } = useSearch(searchTerm,startIndex);
  // console.log(data);

  return (
    <>
      <div className="border-b border-neutral-300 dark:border-neutral-500 pb-4">
        <MainNavigation />
        <SubNavigation />
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
