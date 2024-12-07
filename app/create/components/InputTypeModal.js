import ShortAnswer from "@/app/components/icons/ShortAnswer";
import LongAnswer from "@/app/components/icons/LongAnswer";
import SingleSelect from "@/app/components/icons/SingleSelect";
import Date from "@/app/components/icons/Date";
import Url from "@/app/components/icons/Url";

export default function InputTypeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
     <div className="w-[300px] border-[1px] border-gray-200 rounded-2xl p-1 bg-white
    ">
    <div className="px-4 py-2 bg-gray-50 rounded-lg"><h3 className="text-[12px] font-semibold text-gray-500">
        INPUT TYPES
      </h3></div>

    <div className="flex flex-col p-1">
         <button className=" flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left">
           <ShortAnswer />
           <span className="text-sm font-medium">Short answer</span>
         </button>
         <button className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left">
           <LongAnswer />
           <span className="text-sm font-medium">Long answer</span>
         </button>
         <button className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left">
           <SingleSelect />
           <span className="text-sm font-medium">Single select</span>
         </button>
         <button className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left">
           <Url />
           <span className="text-sm font-medium">URL</span>
         </button>
         <button className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left">
           <Date />
           <span className="text-sm font-medium">Date</span>
         </button>
       </div>
    </div>
   </div>
  );
}
