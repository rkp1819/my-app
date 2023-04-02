import React from "react";
import Header from "./Header";
import FormHeader from "./FormHeader";
import Form from "./Form";

function ProjectOverview() {
  return (
    <div className="bg-secondary p-2 sm:p-6 pt-0">
      <div className="max-w-7xl m-auto">
        {" "}
        <Header></Header>
        <div className="bg-[#fffefe] rounded-3xl sm:p-4  p-2 ">
          <FormHeader></FormHeader>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
