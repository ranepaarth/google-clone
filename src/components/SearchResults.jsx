import React from "react";
import PaginationButtons from "./PaginationButtons";


const SearchResults = ({ data }) => {
  console.log(data);
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[52]">
      <p className="text-neutral-400 text-md mb-5 mt-3">
        About {data.searchInformation.formattedTotalResults} results (
        {data.searchInformation.formattedSearchTime} seconds)
      </p>
      {data.items?.map((data) => {
        return (
          <div key={data.link} className="max-w-xl mb-8">
            <div className="group">
              <a href={data.link} className="text-sm text-neutral-300">
                {data.formattedUrl}
              </a>
              <a href={data.link}>
                <h2 className="truncate text-xl text-blue-300 font-medium group-hover:underline">
                  {data.title}
                </h2>
              </a>
            </div>
            <p className="text-neutral-400 line-clamp-2">{data.snippet}</p>
          </div>
        );
      })}
      {/* <PaginationButtons /> */}
    </div>
  );
};

export default SearchResults;
