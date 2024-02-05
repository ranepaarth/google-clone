import React from "react";

import { Link } from "react-router-dom";
import { Logo, UniSearchInput } from "../../routes";

const SearchPageHeader = () => {
  return (
    <div>
      <div className="pt-7 pb-2 pl-4 flex gap-4 items-center md:pl-10">
        <Link to="/">
          <Logo textSize={"text-4xl"} mb10={"mb-0"} />
        </Link>
        <div className="flex items-center justify-center">
          <UniSearchInput
            mainDivClassName={"w-9/12 max-w-[550px]"}
            formInputClass={"max-sm:w-[170px] max-md:w-[300px] md:w-[430px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPageHeader;
