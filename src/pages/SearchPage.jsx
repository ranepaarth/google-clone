import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import useSearch from "../hooks/useSearch";
// import mocks from "../mocks.js";
import {
  Footer,
  PaginationButtons,
  SearchPageHeader,
  SearchResults,
} from "../routes.js";

const SearchPage = () => {
  const { search } = useLocation();
  const [startIndex, setStartIndex] = useState(1);
  const searchTerm = search?.split("?").filter((item) => item !== "")[0];
  // console.log(searchTerm);
  // const data = mocks;
  const { data } = useSearch(searchTerm, startIndex);
  // console.log(data);

  return (
    <>
      <div className="border-b border-neutral-300 dark:border-neutral-500 px-5 pb-4">
        <SearchPageHeader />
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
