import React from "react";
import SearchResultsItem from "./SearchResultsItem";

const SearchResults = ({ data }) => {
  // console.log(data);
  return (
    <div className="mx-auto w-full">
      <p className="text-neutral-400 text-md mb-5 mt-3 px-8 pl-[5%] md:pl-[14%] lg:pl-[52]">
        About {data?.searchInformation.formattedTotalResults} results (
        {data?.searchInformation.formattedSearchTime} seconds)
      </p>
      {data?.items?.map((data) => {
        return (
          <div key={data?.link} className="w-full mb-3">
            <SearchResultsItem data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
