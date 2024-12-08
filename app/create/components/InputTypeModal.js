import UrlIcon from "@/app/components/icons/UrlIcon";
import ShortAnswerIcon from "@/app/components/icons/ShortAnswerIcon";
import SingleSelectIcon from "@/app/components/icons/SingleSelectIcon";
import LongAnswerIcon from "@/app/components/icons/LongAnswerIcon";
import NumberIcon from "@/app/components/icons/NumberIcon";

const inputTypes = [
  { type: 'shortAnswer', label: 'Short answer', Icon: ShortAnswerIcon },
  { type: 'longAnswer', label: 'Long answer', Icon: LongAnswerIcon },
  { type: 'singleLine', label: 'Single select', Icon: SingleSelectIcon },
  { type: 'url', label: 'URL', Icon: UrlIcon },
  { type: 'number', label: 'Number', Icon: NumberIcon },
];


export default function InputTypeModal({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTypeSelect = (type) => {
    onSelect(type);
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
