import React, { useState } from "react";
import ReorderIcon from "../../icons/ReorderIcon";
import DropDown from "../../icons/DropDown";
import LongAnswerInput from "../atoms/LongAnswerInput";
import NumberInput from "../atoms/NumberInput";
import SingleSelectionInput from "../atoms/SingleSelectionInput";
import UrlInput from "../atoms/UrlInput";
import ShortAnswerInput from "../atoms/ShortAnswerInput";
import LongAnswerIcon from "../../icons/LongAnswerIcon";
import ShortAnswerIcon from "../../icons/ShortAnswerIcon";
import SingleSelectIcon from "../../icons/SingleSelectIcon";
import UrlIcon from "../../icons/UrlIcon";
import NumberIcon from "../../icons/NumberIcon";

const QuestionIcons = {
  longAnswer: LongAnswerIcon,
  singleLine: SingleSelectIcon,
  number: NumberIcon,
  url: UrlIcon,
  shortAnswer: ShortAnswerIcon,
};

const QuestionTypeDropdown = ({ isOpen, onClose, onSelect, position }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0" 
      onClick={onClose}
    >
      <div 
        className="absolute w-[300px] border-[1px] border-gray-200 rounded-2xl p-1 bg-white"
        style={{ top: position.y, left: position.x }}
      >
        <div className="px-4 py-2 bg-gray-50 rounded-lg">
          <h3 className="text-[12px] font-semibold text-gray-500">
            INPUT TYPES
          </h3>
        </div>

        <div className="flex flex-col p-1">
          {Object.entries(QuestionTypes).map(([type, _]) => {
            const Icon = QuestionIcons[type];
            const label = type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1');
            
            return (
              <button 
                key={type}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(type);
                }} 
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left"
              >
                <Icon />
                <span className="text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const QuestionHeader = ({ type, onTypeChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const IconComponent = QuestionIcons[type];

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({ 
      x: rect.left, 
      y: rect.bottom + 5 
    });
    setDropdownOpen(true);
  };

  return (
    <div className="flex justify-between items-center gap-2 question-inputs">
      <div>
        <input
          type="text"
          placeholder="Write a question"
          className="outline-none border-0 font-semibold text-base w-full max-w-[300px] overflow-x-auto whitespace-nowrap"
        />
        <input
          type="text"
          placeholder="Write a help text or caption (leave empty if not needed)."
          className="outline-none border-0 font-normal text-xs w-full max-w-[300px] overflow-x-auto whitespace-nowrap"
        />
      </div>
      <div className="flex items-center gap-2">
        <button 
          className="flex items-center"
          onClick={handleDropdownClick}
        >
          {IconComponent && <IconComponent />}
          <DropDown />
        </button>
        <ReorderIcon />
      </div>

      <QuestionTypeDropdown 
        isOpen={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        onSelect={(newType) => {
          onTypeChange(newType);
          setDropdownOpen(false);
        }}
        position={dropdownPosition}
      />
    </div>
  );
};

const QuestionTypes = {
  longAnswer: LongAnswerInput,
  singleLine: SingleSelectionInput,
  number: NumberInput,
  url: UrlInput,
  shortAnswer: ShortAnswerInput,
};

const QuestionBlock = ({ type, onTypeChange }) => {
  const InputComponent = QuestionTypes[type];

  return (
    <div className="w-full border-[1px] border-gray-200 rounded-2xl p-4 flex flex-col gap-2 hover:bg-gray-50 [&:hover>_.question-inputs_input]:bg-gray-50">
      <QuestionHeader type={type} onTypeChange={onTypeChange} />
      {InputComponent && <InputComponent />}
    </div>
  );
};

export default QuestionBlock;
