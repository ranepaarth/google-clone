import React from "react";
import { Link, useLocation } from "react-router-dom";

import MainNavigation from "./MainNavigation";
import SearchResults from "./SearchResults";
import SubNavigation from "./SubNavigation";
import Footer from "./Footer";

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
      <div>{data && <SearchResults data={data}/>}</div>
      {/* <div>
        <SearchResults />
      </div> */}
      <Footer />
    </>
  );
};

export default SearchPage;
