import React from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div>
      <div className="pt-7 pb-2 pl-4 flex gap-8 items-center md:pl-10">
        <Link to="/">
          <span className="font-semibold text-4xl text-neutral-100">
            Google
          </span>
        </Link>
        <div className="flex px-4 py-3 bg-neutral-600 w-8/12 justify-between rounded-full md:w-7/12 drop-shadow-lg">
          <div className="flex gap-3 items-center">
            <span>
              <form>
                <input
                  type="text"
                  placeholder="Search Google"
                  className="bg-transparent outline-none border-none placeholder:text-neutral-100 text-neutral-100"
                />
              </form>
            </span>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <div className="gap-2 text-xl text-neutral-400 pr-2 border-r-2 border-neutral-400 mr-3">
              <RxCross2 />
            </div>
            <div className="flex items-center justify-between gap-3">
              <BsFillMicFill className="text-neutral-400" />
              <FaGooglePlay className="text-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
