import Draft from "@/app/components/icons/Draft";
import Tick from "@/app/components/icons/Tick";
import React from "react";

const Footer = ({ isValid }) => {
  return (
    <section className="fixed sm:sticky bottom-0 left-0 right-0 w-full h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-3 sm:px-6 bg-white">
      <button 
        disabled={!isValid}
        className={`h-8 border-[1px] border-gray-200 rounded-xl pr-2 sm:pr-[14px] pl-2 sm:pl-4 flex items-center gap-1 sm:gap-2 
          ${isValid ? 'hover:bg-gray-50 text-[#0D0D0D]' : 'text-gray-400 cursor-not-allowed'}`}
      >
        <Draft color={isValid ? '#0D0D0D' : '#959DA5'} />
        <span className="font-semibold text-xs sm:text-sm">
          Save as Draft
        </span>
      </button>

      <button 
        disabled={!isValid}
        className={`h-8 border-[1px] border-gray-200 rounded-xl pr-2 sm:pr-[14px] pl-2 sm:pl-4 flex items-center gap-1 sm:gap-2 
          ${isValid ? 'bg-[#00AA45] border-[#1E874B]' : 'bg-[#219653] opacity-50  cursor-not-allowed'}`}
      >
        <Tick />
        <span className="text-white font-semibold text-xs sm:text-sm">Publish form</span>
      </button>
    </section>
  );
};

export default Footer;
