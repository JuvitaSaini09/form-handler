import Draft from "../components/icons/Draft";
import RightUpArrow from "../components/icons/RightUpArrow";
import Tick from "../components/icons/Tick";
export default function CreateForm() {
  return (
    <main className="w-[640px] mx-auto h-screen flex flex-col overflow-hidden">
      {/* Header - fixed at top */}
      <section className="sticky top-0 w-full h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-6 bg-white">
        <input
          type="text"
          placeholder="Untitled form"
          className="outline-none border-0 font-semibold text-base  w-full max-w-[300px] overflow-x-auto whitespace-nowrap"
        />
        <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50">
          <span className="text-gray-400 font-semibold text-sm">Preview</span>
          <RightUpArrow />
        </button>
      </section>

      {/* Main - scrollable section */}
      <section className="flex-1 overflow-y-auto border-x-[1px] border-gray-200 scrollbar-hide">
        <div className="min-h-[1150px]"></div>
      </section>

      {/* Footer - fixed at bottom */}
      <section className="sticky bottom-0 w-full h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-6 bg-white">
        <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50">
          <Draft />

          <span className="text-gray-400 font-semibold text-sm">
            Save as Draft
          </span>
        </button>

        <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50 bg-[#219653] opacity-50">
          <Tick />

          <span className="text-white font-semibold text-sm ">
            Publish form
          </span>
        </button>
      </section>
    </main>
  );
}
