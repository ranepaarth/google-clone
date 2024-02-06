import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultsItem = ({ data }) => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-700/20 w-full px-8 pl-[5%] md:pl-[14%] lg:pl-[52] py-3">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
            <img
              src={data?.pagemap?.metatags[0]["og:image"]}
              alt=""
              className="w-5 object-cover aspect-square"
            />
          </div>
          <NavLink
            to={data.link}
            target="_blank"
            className="text-sm dark:text-neutral-300 text-neutral-600"
          >
            {data.formattedUrl}
          </NavLink>
        </div>
        <NavLink
          to={data.link}
          target="_blank"
          className="visited:text-purple-400"
        >
          <h2 className="truncate text-xl dark:text-blue-300 text-blue-600 font-medium hover:underline">
            {data.title}
          </h2>
        </NavLink>
      </div>
      <p className="dark:text-neutral-400 text-neutral-600  line-clamp-3 text-sm">
        {data.snippet}
      </p>
    </div>
  );
};

export default SearchResultsItem;
