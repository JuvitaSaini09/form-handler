import React from "react";
import AddSymbol from "../../icons/AddSymbol";

const SingleSelectionInput = ({ options = ['', ''], onOptionsChange }) => {
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    onOptionsChange(newOptions);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="radio"
            disabled
            className="appearance-none w-4 h-4 border-[1.5px] border-gray-500 rounded-full cursor-not-allowed"
          />
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            className="outline-none border-[1px] border-gray-200 bg-white py-[6px] px-2 w-full rounded-lg"
          />
          {index === options.length - 1 && (
            <button
              onClick={() => onOptionsChange([...options, ''])}
            >
              <AddSymbol />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SingleSelectionInput;
