import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationButtons = ({ setStartIndex, startIndex }) => {
  const increaseStartIndex = () => {
    setStartIndex(startIndex + 10);
  };
  const decreaseStartIndex = () => {
    setStartIndex(startIndex - 10);
    console.log(startIndex);
  };
  const goToPageNumber = (pageNumber) => {
    setStartIndex(pageNumber * 10 + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 select-none my-5">
      <span
        className={`flex flex-col items-center cursor-pointer  dark:text-neutral-50 text-blue-600  hover:underline  dark:hover:text-blue-500 ${
          startIndex === 1 ? "invisible" : "visible"
        }`}
        onClick={decreaseStartIndex}
        onKeyDown={decreaseStartIndex}
      >
        <FaChevronLeft />
        <p>Prev</p>
      </span>
      <div className="flex flex-col items-center gap-2 dark:text-white text-neutral-600">
        <span className="text-4xl tracking-normal font-medium">
          <span className="dark:text-neutral-50 text-blue-600">G</span>
          {[...Array(10).keys()].map((i) => (
            <span
              className={`cursor-pointer ${
                startIndex - 1 === i ||
                startIndex - 10 === i ||
                startIndex - 10 * i + i - 1 === i
                  ? "dark:text-blue-500 text-red-500"
                  : "text-yellow-400 dark:text-neutral-50"
              }`}
              key={i}
              onKeyDown={() => goToPageNumber(i)}
              onClick={() => goToPageNumber(i)}
            >
              o
            </span>
          ))}
          <span className="dark:text-neutral-50 text-blue-600">g</span>
          <span className="dark:text-neutral-50 text-green-600">l</span>
          <span className="dark:text-neutral-50 text-red-600 transform rotate-90">
            e
          </span>
        </span>

        <div className="flex gap-3 mr-5">
          {[...Array(10).keys()].map((i) => (
            <span
              className={`flex hover:underline font-medium hover:text-blue-500 ${
                startIndex - 1 === i ||
                startIndex - 10 === i ||
                startIndex - 10 * i + i - 1 === i
                  ? "text-blue-500 underline"
                  : ""
              }`}
              key={i}
              onClick={() => goToPageNumber(i)}
              onKeyDown={() => goToPageNumber(i)}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
      <span
        className={`flex flex-col items-center dark:text-neutral-50 text-blue-600  cursor-pointer hover:underline dark:hover:text-blue-500 ${
          startIndex >= 91 ? "invisible" : "visible"
        }`}
        onClick={increaseStartIndex}
        onKeyDown={increaseStartIndex}
      >
        <FaChevronRight />
        <span>Next</span>
      </span>
    </div>
  );
};

export default PaginationButtons;
