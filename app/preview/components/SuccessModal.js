import React from 'react'

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4" onClick={handleBackdropClick}>
      <div className="w-full max-w-[300px] border-[1px] border-gray-200 rounded-2xl p-4 bg-white flex flex-col items-center gap-4">
        <div className="text-[#00AA45] text-4xl">✓</div>
        <h3 className="text-lg font-semibold text-gray-800">
          Successfully submitted!
        </h3>
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-[#00AA45] text-white rounded-xl hover:bg-[#1E874B] font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal