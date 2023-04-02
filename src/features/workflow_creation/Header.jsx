import React from "react";

function Header() {
  return (
    <div className="text-white">
      <div className="flex flex-row justify-between items-center bg-[#265966] mx-6 rounded-b-xl">
        <div className="flex items-center flex-row">
          <div className=" p-2 m-2 ">
            <button className="material-symbols-outlined">arrow_back</button>
          </div>
          <div className=" p-2 m-2 ">
            <p className="text-lg">Procurement Workflow</p>
            <p className="text-xs text-slate-400">step 2: Workflow Creation</p>
          </div>
        </div>
        <div className="flex-col flex space-y-2 md:flex-row md:space-x-2 md:space-y-0 p-2 m-2">
          <button className="border border-slate-500 w-28 rounded-lg p-2 text-sm">
            Cancel
          </button>
          <button className="border border-slate-500 w-28 rounded-lg p-2 text-sm">
            Save Draft
          </button>
          <button
            className="border border-primary w-28 rounded-lg 
              p-2 text-slate-800 font-semibold text-sm bg-primary"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
