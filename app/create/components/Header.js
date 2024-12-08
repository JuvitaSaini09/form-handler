import RightUpArrow from "@/app/components/icons/RightUpArrow";
import React from "react";
import { useRouter } from 'next/navigation';

const Header = ({ title, onTitleChange, isValid }) => {
  const router = useRouter();
  const handlePreviewClick=()=>{
    router.push('/preview');
  }
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
      onClick={handlePreviewClick}
        disabled={!isValid}
        className={`h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 
          ${isValid ? 'hover:bg-gray-50 text-[#0D0D0D]' : 'text-gray-400 cursor-not-allowed'}`}
      >
        <span className="font-semibold text-sm">Preview</span>
        <RightUpArrow color={isValid ? '#0D0D0D' : '#959DA5'} />
      </button>
    </section>
  );
};

export default Header;
