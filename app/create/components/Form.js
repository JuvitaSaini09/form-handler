import AddSymbol from "@/app/components/icons/AddSymbol";
import React from "react";

const Form = () => {
  return (
    <section className="flex-1 overflow-y-auto border-x-[1px] border-gray-200 scrollbar-hide px-6 pb-20">
      <div className="min-h-[1150px] border-2 border-red-500 pt-6 flex flex-col gap-6">
        {/* Questions list */}
        <div className="border-2 border-blue-500">
          {" "}
          here the list of input fields will be rendered when user will add
          input fields
        </div>
        {/* Add question button */}
        <div className="flex justify-center border-2 border-blue-500">
          <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50">
            <AddSymbol />
            <span>Add Question</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
