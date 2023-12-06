import React from "react";

const Logo = ({ textSize, mb10 }) => {
  return (
    <div className="flex justify-center items-center tracking-normal ">
      <div className={`flex  items-center dark:text-neutral-100 ${textSize} ${mb10}`}>
        <p className="text-blue-600 dark:text-neutral-100">G</p>
        <p className="text-red-600 dark:text-neutral-100">o</p>
        <p className="text-yellow-400 dark:text-neutral-100">o</p>
        <p className="text-blue-600 dark:text-neutral-100">g</p>
        <p className="text-green-600 dark:text-neutral-100">l</p>
        <p className="text-red-600 dark:text-neutral-100 ">e</p>
      </div>
    </div>
  );
};

export default Logo;
