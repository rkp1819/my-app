import React from "react";

function Header() {
  return (
    <div className="p-2 px-8 pt-0 flex flex-row space-y-4 flex-wrap items-center  justify-between ">
      <img src="Screenshot 2023-04-02 130258.png" className="h-10 m-2"></img>
      <div className="flex flex-row flex-wrap items-center text-gray-400 text-md tracking-wider h-full">
        <p className="px-6">HOME</p>
        <p className="px-6">DASHBOARD</p>
        <p className="px-6">VENDORS</p>
        <p className="text-gray-100 flex items-center h-full rounded-lg  p-2 py-4 bg-[#003647] px-6">
          PROJECTS
        </p>
      </div>
      <div className="flex flex-row flex-wrap  items-center">
        <span className="material-symbols-outlined p-[12px] m-4 rounded-full bg-[#265966] text-white">
          bookmark
        </span>
        <span className="material-symbols-outlined p-[12px] m-4 rounded-full bg-[#265966] text-white">
          notifications
        </span>
        <div className="flex-row flex items-center">
          <span className="material-symbols-outlined  px-2 py-[6px] m-4 rounded-full bg-[white] text-primary text-4xl">
            person
          </span>

          <p className="text-white">Smith Jones</p>
          <span className="material-symbols-outlined text-white">
            arrow_drop_down
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
