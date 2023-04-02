import React from "react";

function FormHeader() {
  return (
    <div>
      <div className="flex flex-col  p-2">
        <p className="text-gray-400 py-2 sm:py-0 ">
          {"Projects > ... > Project Infromation"}
        </p>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="text-3xl font-semibold py-2">Request for Software</p>
          <button className="flex flex-row max-w-[200px] my-4 sm:my-0 items-center justify-evenly border-zinc-400 font-semibold border-2 rounded-lg p-2 px-3">
            Project Overview
            <span className="material-symbols-outlined pl-1">
              chevron_right
            </span>
          </button>
        </div>
        <div className="text-gray-400 flex-row flex items-center">
          <span className="material-symbols-outlined pr-1">calendar_month</span>
          <p>12 October - 26 Octobar, 2022 . </p>
        </div>
      </div>
      <div className="flex my-4 sm:my-0 flex-row items-center justify-center flex-wrap">
        <div className="p-2 mr-4 flex flex-col items-center border-primary border-b-4">
          <p className="text-xl font-semibold text-slate-700">
            Pre-Evaluation Feedback
          </p>
          <p className="text-lg text-gray-400">12 Octobar, 2022</p>
        </div>
        <div className="p-2 ml-4 flex flex-col mt-2 items-center ">
          <p className="text-xl font-semibold text-slate-700">Intake form</p>
          <p className="text-lg text-gray-400 mb-2">16 Octobar, 2022</p>
          <div className="flex flex-row items-center w-full">
            <p className="border-primary  border-b-4  w-[100%]"></p>
            <p className="border-gray-200  border-b-4  w-[100%]"></p>
          </div>
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
}

export default FormHeader;
