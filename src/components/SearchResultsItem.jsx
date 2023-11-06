import React from "react";
import { NavLink } from "react-router-dom";

const SearchResultsItem = ({data}) => {
  return (
    <>
      <div className="group">
        <NavLink to={data.link} target='_blank' className="text-sm dark:text-neutral-300 text-neutral-600">
          {data.formattedUrl}
        </NavLink>
        <NavLink to={data.link} target='_blank' className="visited:text-purple-400">
          <h2 className="truncate text-xl dark:text-blue-300 text-blue-600  font-medium group-hover:underline">
            {data.title}
          </h2>
        </NavLink>
      </div>
      <p className="dark:text-neutral-400 text-neutral-600  line-clamp-2">{data.snippet}</p>
    </>
  );
};

export default SearchResultsItem;
