import React from "react";
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

const QuestionHeader = ({ type }) => {
  const IconComponent = QuestionIcons[type];
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
        <div className="flex items-center">
          {IconComponent && <IconComponent />}
          <DropDown />
        </div>
        <ReorderIcon />
      </div>
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

const QuestionBlock = ({ type }) => {
  const InputComponent = QuestionTypes[type];

  return (
    <div className="w-full border-[1px] border-gray-200 rounded-2xl p-4 flex flex-col gap-2 hover:bg-gray-50 [&:hover>_.question-inputs_input]:bg-gray-50">
      <QuestionHeader type={type} />
      {InputComponent && <InputComponent />}
    </div>
  );
};

export default QuestionBlock;
