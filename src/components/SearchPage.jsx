import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import SearchResults from "./SearchResults";
import SubNavigation from "./SubNavigation";

import useSearch from "../hooks/useSearch";

import mocks from "../mocks.js";

const SearchPage = () => {
  const {search} = useLocation();
  const searchTerm = search?.split('?').filter((item) => item !== '')[0];
  // console.log(searchTerm);
  const data = mocks
  // const {data} = useSearch(searchTerm)
  // console.log(data);



  return (
    <>
      <div className="border-b border-neutral-300 dark:border-neutral-500 pb-4">
        <MainNavigation />
        <SubNavigation />
      </div>
      <div>{data && <SearchResults data={data} />}</div>
      <Footer />
    </>
  );
};

export default SearchPage;
