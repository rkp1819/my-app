import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProcurementWorkFlow from "./features/workflow_creation/ProcurementWorkFlow";
import ProjectOverview from "./features/project_overview/ProjectOverview";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="flex flex-row justify-center items-center">
          <li className="border-blue-400 p-2 m-2 border rounded-lg">
            <Link to="/">Procurement Workflow</Link>
          </li>
          <li className="border-blue-400 p-2 m-2 border rounded-lg">
            <Link to="/overview">Project Overview</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProcurementWorkFlow />} />
        <Route path="/overview" element={<ProjectOverview />} />
      </Routes>
    </BrowserRouter>
  );
}
