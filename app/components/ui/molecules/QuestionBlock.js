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

const QuestionTypes = {
  shortAnswer: ShortAnswerInput,
  longAnswer: LongAnswerInput,
  singleLine: SingleSelectionInput,
  url: UrlInput,
  number: NumberInput,
};

const QuestionIcons = {
  shortAnswer: ShortAnswerIcon,
  longAnswer: LongAnswerIcon,
  singleLine: SingleSelectIcon,
  url: UrlIcon,
  number: NumberIcon,
};

const QuestionTypeDropdown = ({ isOpen, onClose, onSelect, position }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/30 transition-opacity duration-200" 
      onClick={onClose}
    >
      <div 
        className="absolute w-[300px] border-[1px] border-gray-200 rounded-2xl p-1 bg-white animate-slideIn"
        style={{ 
          top: position.y, 
          maxWidth: 'calc(100vw - 32px)',
          ...(!window.matchMedia('(min-width: 640px)').matches 
            ? {
                right: '16px',  // 16px from right on mobile
              }
            : {
                left: position.x,
              }
          )
        }}
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

const QuestionHeader = ({ 
  type, 
  questionText,
  helpText,
  onQuestionTextChange,
  onHelpTextChange,
  onTypeChange 
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const IconComponent = QuestionIcons[type];

  const handleTypeChange = (newType) => {
    // Reset 
    onTypeChange({
      type: newType,
      questionText: "",
      helpText: "",
      options: newType === 'singleLine' ? ['', ''] : [],
      isValid: false
    });
    setDropdownOpen(false);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const isMobile = !window.matchMedia('(min-width: 640px)').matches;
    
    setDropdownPosition({ 
      x: isMobile ? undefined : rect.left,
      y: rect.bottom + 5 
    });
    setDropdownOpen(true);
  };

  return (
    <div className="flex justify-between items-center gap-2 question-inputs">
      <div className="flex-1">
        <input
          type="text"
          value={questionText}
          onChange={onQuestionTextChange}
          placeholder="Write a question"
          className="outline-none border-0 font-semibold text-base w-full overflow-x-auto whitespace-nowrap"
        />
        <input
          type="text"
          value={helpText}
          onChange={onHelpTextChange}
          placeholder="Write a help text or caption (leave empty if not needed)."
          className="outline-none border-0 font-normal text-xs w-full overflow-x-auto whitespace-nowrap"
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
        onSelect={handleTypeChange}
        position={dropdownPosition}
      />
    </div>
  );
};

const QuestionBlock = ({ id, type, questionText, helpText, options, onUpdate }) => {
  console.log('QuestionBlock type:', type);
  console.log('Available types:', Object.keys(QuestionTypes));
  
  const InputComponent = QuestionTypes[type];

  const handleQuestionTextChange = (e) => {
    onUpdate({ questionText: e.target.value });
  };

  const handleHelpTextChange = (e) => {
    onUpdate({ helpText: e.target.value });
  };

  const handleOptionsChange = (newOptions) => {
    onUpdate({ options: newOptions });
  };

  return (
    <div className="w-full border-[1px] border-gray-200 rounded-2xl p-4 flex flex-col gap-2 hover:bg-gray-50 [&:hover>_.question-inputs_input]:bg-gray-50">
      <QuestionHeader 
        type={type} 
        questionText={questionText}
        helpText={helpText}
        onQuestionTextChange={handleQuestionTextChange}
        onHelpTextChange={handleHelpTextChange}
        onTypeChange={(updates) => onUpdate({ ...updates })}
      />
      {InputComponent && (
        <InputComponent 
          options={options}
          onOptionsChange={handleOptionsChange}
        />
      )}
    </div>
  );
};

export default QuestionBlock;
