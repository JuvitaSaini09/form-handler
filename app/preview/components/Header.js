const Header = ({ formCompletenessValue }) => {
 
  return (
    <section className="sticky top-0 w-full h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-3 sm:px-6 bg-white">
      <h3 className="font-semibold text-sm sm:text-base flex-1">Submit form</h3>
      <div className="flex-1">
        <div className="text-xs sm:text-sm text-[#0D0D0D] mt-1 text-right">
          Form completeness — {formCompletenessValue}%
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-[4px] mt-2">
          <div
            className="h-full bg-[#00AA45] rounded-full transition-all duration-300"
            style={{ width: `${formCompletenessValue}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
