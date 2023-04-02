import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function Condition({ data, isConnectable }) {
  return (
    <div className="bg-primary rounded-full border border-primary p-1 text-secondary">
      <div className="">
        <div className="px-4">
          <p>Add Condition</p>
        </div>
      </div>

      <Handle
        className=""
        position={Position.Bottom}
        type="source"
        isConnectable={true}
      />
      <Handle
        className=""
        position={Position.Top}
        type="target"
        isConnectable={true}
      />
    </div>
  );
}

export default Condition;
