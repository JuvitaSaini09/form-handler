import React from "react";
import ReorderIcon from "../../icons/ReorderIcon";
import ShortAnswer from "../../icons/ShortAnswer";
import DropDown from "../../icons/DropDown";
import AddSymbol from "../../icons/AddSymbol";



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

const LongAnswerInput = () => {
  return (
    <input
      type="text"
      disabled
      placeholder=""
      className="h-20  w-full rounded-lg bg-gray-100 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 p-1 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
    />
  );
};

const SingleLineInput = () => {
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

const NumberInput = () => {
  return (
    <input
      type="number"
      disabled
      placeholder=""
      className="h-8  w-full rounded-lg bg-gray-100 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 p-1"
    />
  );
};
const UrlInput = () => {
  return (
    <input
      type="url"
      disabled
      placeholder=""
      className="h-8  w-full rounded-lg bg-gray-100 border-[1px] border-gray-200 focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-200 p-1"
    />
  );
};

const QuestionTypes={
  shortAnswer:ShortAnswerInput,
  longAnswer:LongAnswerInput,
  singleLine:SingleLineInput,
  number:NumberInput,
  url:UrlInput
}
const QuestionBlock = ({type}) => {
  return (
    <div className="w-full border-[1px] border-gray-200 rounded-2xl p-4 flex flex-col gap-2 hover:bg-gray-50 [&:hover>_.question-inputs_input]:bg-gray-50">
      <div className="flex justify-between items-center gap-2 question-inputs">
        <div>
          <input
            type="text"
            placeholder="Write a question"
            className="outline-none border-0 font-semibold text-base  w-full max-w-[300px] overflow-x-auto whitespace-nowrap"
          />
          <input
            type="text"
            placeholder="Write a help text or caption (leave empty if not needed)."
            className="outline-none border-0 font-normal text-xs  w-full max-w-[300px] overflow-x-auto whitespace-nowrap"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <ShortAnswer />
            <DropDown />
          </div>
          <ReorderIcon />
        </div>
      </div>
      {QuestionTypes[type]?.()}
    </div>
  );
};

export default QuestionBlock;
