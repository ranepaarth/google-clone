import React from "react";
import { Link } from "react-router-dom";
import { Logo, UniSearchInput } from "../../routes";

const SearchPageHeader = () => {
  return (
    <div className="py-2 flex gap-4 flex-col items-center md:flex-row md:pt-7 md:pl-10">
      <Link to="/" className="">
        <Logo textSize={"text-3xl"} mb10={"mb-0"} />
      </Link>
      <div className="flex items-center justify-center md:justify-start w-full px-5">
        <UniSearchInput
          mainDivClassName={"w-full max-w-[550px]"}
          formInputClass={"w-full"}
        />
      </div>
    </div>
  );
};

export default SearchPageHeader;
