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
  const searchTerm = search?.split('?')[1];
  console.log(searchTerm);
  // const data = mocks
  // console.log(data);
  const {data} = useSearch(searchTerm)

  
  return (
    <>
      <div className="border-b border-neutral-500 pb-4">
        <MainNavigation />
        <SubNavigation />
      </div>
      <div>{data && <SearchResults data={data}/>}</div>
      <Footer />
    </>
  );
};

export default SearchPage;

// {/* <div className="pt-7 pb-2 pl-4 flex gap-8 items-center md:pl-10">
//           <Link to="/">
//             <span className="font-semibold text-4xl text-neutral-100">
//               Google
//             </span>
//           </Link>
//           <div className="flex px-4 py-3 bg-neutral-600 w-8/12 justify-between rounded-full md:w-7/12 drop-shadow-lg">
//             <div className="flex gap-3 items-center">
//               <span>
//                 <form>
//                   <input
//                     type="text"
//                     placeholder="Search Google"
//                     className="bg-transparent outline-none border-none placeholder:text-neutral-100 text-neutral-100"
//                   />
//                 </form>
//               </span>
//             </div>
//             <div className="flex gap-2 justify-between items-center">
//               <div className="gap-2 text-xl text-neutral-400 pr-2 border-r-2 border-neutral-400 mr-3">
//                 <RxCross2 />
//               </div>
//               <div className="flex items-center justify-between gap-3">
//                 <BsFillMicFill className="text-neutral-400" />
//                 <FaGooglePlay className="text-neutral-400" />
//               </div>
//             </div>
//           </div>
//         </div> */}

// {/* <div className="pl-4 flex gap-2 text-neutral-200 md:pl-10">
//           <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
//             <Link to="/all">All</Link>
//           </span>
//           <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
//             <Link to="/images">Images</Link>
//           </span>
//           <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
//             <Link to="/news">News</Link>
//           </span>
//           <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
//             <Link to="/maps">Maps</Link>
//           </span>
//           <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
//             <Link to="/shopping">Shopping</Link>
//           </span>
//         </div> */}
