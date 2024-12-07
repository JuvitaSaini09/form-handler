import Draft from "@/app/components/icons/Draft";
import Tick from "@/app/components/icons/Tick";
import React from "react";

const Footer = () => {
  return (
    <section className="sticky bottom-0 w-full h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-6 bg-white">
      <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50">
        <Draft />

        <span className="text-gray-400 font-semibold text-sm">
          Save as Draft
        </span>
      </button>

      <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50 bg-[#219653] opacity-50">
        <Tick />

        <span className="text-white font-semibold text-sm ">Publish form</span>
      </button>
    </section>
  );
};

export default Footer;
