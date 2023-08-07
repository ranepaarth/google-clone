import React from 'react'

import { Link } from "react-router-dom";
const SubNavigation = () => {
  return (
    <div><div className="pl-4 flex gap-2 text-neutral-200 md:pl-10">
    <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
      <Link to="/all">All</Link>
    </span>
    <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
      <Link to="/images">Images</Link>
    </span>
    <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
      <Link to="/news">News</Link>
    </span>
    <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
      <Link to="/maps">Maps</Link>
    </span>
    <span className="mt-3 px-4 py-2 border border-neutral-400 rounded-full hover:bg-neutral-600">
      <Link to="/shopping">Shopping</Link>
    </span>
  </div></div>
  )
}

export default SubNavigation