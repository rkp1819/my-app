import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar.jsx";
import Flow from "./Flow.jsx";

function ProcurementWorkFlow() {
  return (
    <div className="bg-secondary min-h-screen ">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:h-full">
        <LeftSidebar />
        <Flow />
      </div>
    </div>
  );
}

export default ProcurementWorkFlow;
