import React from "react";
import { NavLink } from "react-router-dom";
import noThumbnail from "../../../assets/no-thumbnail.jpg";

const SearchResultsItem = ({ data }) => {
  // console.log({ data });
  return (
    <div className="bg-neutral-500 md:bg-transparent dark:bg-neutral-700/20 dark:md:bg-transparent w-full md:w-[70%] xl:w-[50%] px-8 pl-[5%] md:pl-[14%] lg:pl-[52] py-3">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
            <img
              src={noThumbnail}
              alt={"noThumbnail"}
              onError={(e) =>
                (e.target.onerror = null)((e.target.src = noThumbnail))
              }
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
