import React from "react";
import AddSymbol from "../../icons/AddSymbol";

const SingleSelectionInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          disabled
          className="appearance-none w-4 h-4 border-[1.5px] border-gray-500 rounded-full cursor-not-allowed"
        />
        <input
          type="text"
          placeholder="Option 1"
          className="outline-none border-[1px] border-gray-200 bg-white py-[6px] px-2 w-full rounded-lg"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="radio"
          disabled
          className="appearance-none w-4 h-4 border-[1.5px] border-gray-500 rounded-full cursor-not-allowed"
        />
        <input
          type="text"
          placeholder="Option 2"
          className="outline-none border-[1px] border-gray-200 bg-white py-[6px] px-2 w-full rounded-lg"
        />
        <button>
          <AddSymbol />
        </button>
      </div>
    </div>
  );
};

export default SingleSelectionInput;
