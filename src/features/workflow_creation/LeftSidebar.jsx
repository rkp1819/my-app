import React from "react";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col md:flex-col p-2 m-2 items-center text-white">
      <button className="material-symbols-outlined rotate-90 p-2 cursor-grab text-zinc-400">
        drag_indicator
      </button>
      <div
        className="bg-[#265966] max-w-fit p-2 
      rounded-lg  flex-wrap flex items-center 
      flex-row md:flex-col"
      >
        <div className="flex flex-col items-center m-4">
          <button className="material-symbols-outlined">space_dashboard</button>
          <p className="text-xs text-slate-400">Forms</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <button className="material-symbols-outlined">description</button>
          <p className="text-xs text-slate-400">Questionnaire</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <button className="material-symbols-outlined">rebase</button>
          <p className="text-xs text-slate-400">Workflow</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <button className="material-symbols-outlined">summarize</button>
          <p className="text-xs text-slate-400">Summary</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <button className="material-symbols-outlined">check_circle</button>
          <p className="text-xs text-slate-400">Approval</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <button className="material-symbols-outlined">more</button>
          <p className="text-xs text-slate-400">More</p>
        </div>
      </div>
    </div>
  );
}
