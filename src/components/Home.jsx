import React,{useState} from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import SearchInput from "./SearchInput";
const Home = () => {
  return (
    <div className="text-neutral-200">
      <div className="flex justify-between px-10 py-4">
        <div className="flex gap-4 ">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <BsPersonCircle className="text-2xl text-neutral-200" />
        </div>
      </div>
      <div className="h-full mt-52">
        <div className="flex justify-center items-center">
          <div className="text-7xl font-bold font-serif md:text-8xl text-neutral-100">Google</div>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Home;
