import React from "react";

const ShortAnswerInput = () => {
  return (
    <input
      type="text"
      disabled
      placeholder=""
      className="h-8  w-full rounded-lg bg-gray-100 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 p-1 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
    />
  );
};

export default ShortAnswerInput;
