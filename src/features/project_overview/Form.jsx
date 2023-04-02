import React, { useMemo } from "react";

function Form() {
  const Select = ({ number, question, option }) => {
    return (
      <div className="bg-white p-4 space-y-4 text-sm flex flex-col m-2 rounded-md">
        <p className="text-gray-500 ">Question {number}</p>
        <hr />
        <p className="font-semibold ">{question}</p>
        <select className="bg-gray-200 rounded-lg w-[40%] min-w-[150px] p-2 text-gray-600">
          <option>{option}</option>
        </select>
      </div>
    );
  };
  const Radio = ({ number, question, option1, option2 }) => {
    return (
      <div className="bg-white p-4 space-y-4 text-sm flex flex-col m-2 rounded-md">
        <p className="text-gray-500 ">Question {number}</p>
        <hr />
        <p className="font-semibold ">{question}</p>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row items-center bg-gray-200 border-[1px] border-gray-300 w-[20%] min-w-[100px] rounded-lg">
            <input
              type="radio"
              className="bg-gray-400 w-[50px]"
              value={option1}
            />
            <label className="bg-white rounded-r-lg p-2 w-full">
              {option1}
            </label>
          </div>
          <div className="flex flex-row items-center bg-gray-200 border-[1px] border-gray-300 w-[20%] min-w-[100px] rounded-lg">
            <input
              type="radio"
              className="bg-gray-400 w-[50px]"
              value={option2}
            />
            <label className="bg-white  rounded-r-lg p-2 w-full">
              {option2}
            </label>
          </div>
        </div>
      </div>
    );
  };
  const UploadDocuments = ({ number, question }) => {
    return (
      <div className="bg-white p-4 space-y-4 text-sm flex flex-col m-2 rounded-md">
        <p className="text-gray-500 ">Question {number}</p>
        <hr />
        <p className="font-semibold ">{question}</p>
        <div className="bg-gray-200 rounded-lg m-1 p-4 py-6 min-w-[150px]  text-gray-600">
          <div className="flex flex-col items-center space-y-1">
            <span class="material-symbols-outlined text-gray-400">folder</span>
            <div className="flex flex-row space-x-2">
              <p className="text-secondary font-semibold">
                Drag and Drop file or
              </p>
              <div className="text-primary flex font-bold flex-row items-center">
                <span class="material-symbols-outlined">search</span>
                <p>Browse</p>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Maximum File size:{" "}
              <strong className="text-secondary">8 MB</strong>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col sm:flex-row mt-4 items-center sm:items-start">
      <div className="flex flex-col space-y-4  sm:mt-0 flex-[0.2] text-left sm:ml-4">
        <button className="border-2 p-2 pl-4 rounded-lg text-secondary text-left  border-slate-600">
          General Information
        </button>

        <button className="pl-4 p-2 rounded-lg text-left text-secondary  bg-gray-100">
          Security & Privacy
        </button>

        <button className="pl-4 p-2 rounded-lg text-left text-secondary  bg-gray-100">
          Upload Documents
        </button>
      </div>
      <div className="flex-[0.8]">
        <div className="bg-gray-100 text-secondary  p-4 sm:ml-8 m-4 sm:mt-0 rounded-lg ">
          <p className="font-semibold">General Information</p>
          <Select
            number={1}
            question="Please select your sourcing option"
            option="Choose sourcing"
          ></Select>
          <Select
            number={2}
            question="Number range of users who will use this product"
            option="Choose users range"
          ></Select>
          <Select
            number={3}
            question="Provide an expected spend"
            option="Choose expense range"
          ></Select>
        </div>
        <div className="bg-gray-100 text-secondary  p-4 sm:ml-8 m-4 sm:mt-0 rounded-lg ">
          <p className="font-semibold">Product Feedback</p>
          <Radio
            number={4}
            question="Will you be sharing PII with the vendor?"
            option1="Yes"
            option2="No"
          ></Radio>
          <Select
            number={5}
            question="What type of PII will the vendor have access to?"
            option="Choose one or more PII type"
          ></Select>
          <Radio
            number={6}
            question="Will the vendor have access to AWS account?"
            option1="Yes"
            option2="No"
          ></Radio>
        </div>
        <div className="bg-gray-100 text-secondary  p-4 sm:ml-8 m-4 sm:mt-0 rounded-lg ">
          <p className="font-semibold">Upload Documents</p>

          <UploadDocuments
            number={7}
            question="Please attach any relevant contracts or documents:"
          ></UploadDocuments>
        </div>
      </div>
    </div>
  );
}

export default Form;
