import RightUpArrow from '../components/icons/RightUpArrow';
export default function CreateForm() {
  return (
    <main className="w-[640px] mx-auto min-h-screen" >
       
       { /* Header */}
       <section className="h-14 border-[1px] border-t-0 border-gray-200 flex justify-between items-center px-6">
       <input type="text" placeholder="Untitled form" className="outline-none border-0 font-semibold text-base" />
       <button className="h-8 border-[1px] border-gray-200 rounded-xl pr-[14px] pl-4 flex items-center gap-2 hover:bg-gray-50">
        <span className="text-gray-400 font-semibold text-sm">Preview</span>
        <RightUpArrow />
       </button>
       </section>
       {/* Main */}
       {/* <section className="border-2">
        
        </section> */}
       {/* Footer */}
       {/* <section className="border-2>
        
        </section> */}

    </main>
  );
}

