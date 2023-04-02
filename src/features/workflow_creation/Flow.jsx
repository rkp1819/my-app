import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import Form from "./workflow_components/Form";
import Questionnaire from "./workflow_components/Questionnaire";
import Summary from "./workflow_components/Summary";
import Start from "./workflow_components/Start";
import Condition from "./workflow_components/Condition";
import { initialEdges, initialNodes } from "./Constants";
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  form: Form,
  questionnaire: Questionnaire,
  summary: Summary,
  start: Start,
  condition: Condition,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "#16beba" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#16beba",
  },
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      defaultEdgeOptions={defaultEdgeOptions}
      className="max-h-[800px] min-h-[70svh]"
    >
      {/* <MiniMap className="h-[120px]" zoomable pannable /> */}
      <Controls className="bg-white" />
      {/* <Background className="text-white/60" gap={16} /> */}
    </ReactFlow>
  );
}

export default Flow;
