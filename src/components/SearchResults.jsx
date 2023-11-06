import React from "react";
import SearchResultsItem from "./SearchResultsItem";

const SearchResults = ({ data }) => {
  // console.log(data);
  return (
    <div className="mx-auto w-full px-8 sm:pl-[5%] md:pl-[14%] lg:pl-[52]">
      <p className="text-neutral-400 text-md mb-5 mt-3">
        About {data.searchInformation.formattedTotalResults} results (
        {data.searchInformation.formattedSearchTime} seconds)
      </p>
      {data.items?.map((data) => {
        return (
          <div key={data.link} className="max-w-xl mb-8">
            <SearchResultsItem data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
