import RightUpArrow from "@/app/components/icons/RightUpArrow";
import React from "react";

const Header = ({ title, onTitleChange, isValid }) => {
  return (
    <section className="sticky top-0 w-full h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-6 bg-white">
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Untitled form"
        className="outline-none border-0 font-semibold text-base w-full max-w-[300px] overflow-x-auto whitespace-nowrap"
      />
      <button 
        disabled={!isValid}
        className={`h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 
          ${isValid ? 'hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'}`}
      >
        <span className="text-gray-400 font-semibold text-sm">Preview</span>
        <RightUpArrow />
      </button>
    </section>
  );
};

export default Header;
