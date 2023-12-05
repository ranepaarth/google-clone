import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// import {useRouter} from 'react-router-dom'

const PaginationButtons = ({ setStartIndex, startIndex }) => {
  // const router = useRouter()

  // const startIndex = Number(router.query.start) || 0;
  const increaseStartIndex = () => {
    startIndex <= 0 ? setStartIndex(1) : setStartIndex(startIndex + 10);
  };
  const decreaseStartIndex = () => {
    startIndex >= 91 ? setStartIndex(91) : setStartIndex(startIndex - 10);
  };
  return (
    <div className="flex gap-2 justify-center m-2 text-white">
      <span
        className={`flex flex-col items-center cursor-pointer hover:text-blue-500 ${
          startIndex === 1 ? "hidden" : "block"
        }`}
        onClick={decreaseStartIndex}
        onKeyDown={decreaseStartIndex}
      >
        <FaChevronLeft /> Prev
      </span>
      <span
        className={`flex flex-col items-center cursor-pointer hover:text-blue-500 ${
          startIndex >= 91 ? "hidden" : "block"
        }`}
        onClick={increaseStartIndex}
        onKeyDown={increaseStartIndex}
      >
        <FaChevronRight /> Next
      </span>
    </div>
  );
};

export default PaginationButtons;
