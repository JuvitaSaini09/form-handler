import ShortAnswer from "@/app/components/icons/ShortAnswerIcon";
import LongAnswer from "@/app/components/icons/LongAnswerIcon";
import SingleSelect from "@/app/components/icons/SingleSelectIcon";
import Date from "@/app/components/icons/Date";
import Url from "@/app/components/icons/UrlIcon";

const inputTypes = [
  { type: 'short_answer', label: 'Short answer', Icon: ShortAnswer },
  { type: 'long_answer', label: 'Long answer', Icon: LongAnswer },
  { type: 'single_select', label: 'Single select', Icon: SingleSelect },
  { type: 'url', label: 'URL', Icon: Url },
  { type: 'date', label: 'Date', Icon: Date },
];

export default function InputTypeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTypeSelect = (type) => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30" onClick={handleBackdropClick}>
      <div className="w-[300px] border-[1px] border-gray-200 rounded-2xl p-1 bg-white">
        <div className="px-4 py-2 bg-gray-50 rounded-lg">
          <h3 className="text-[12px] font-semibold text-gray-500">
            INPUT TYPES
          </h3>
        </div>

        <div className="flex flex-col p-1">
          {inputTypes.map(({ type, label, Icon }) => (
            <button 
              key={type}
              onClick={() => handleTypeSelect(type)} 
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md w-full text-left"
            >
              <Icon />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
