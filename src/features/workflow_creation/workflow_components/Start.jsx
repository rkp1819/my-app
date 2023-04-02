import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function Start({ data, isConnectable }) {
  return (
    <div className="bg-[white] p-2  px-4 rounded-full border text-secondary">
      <div className="flex flex-row space-x-2">
        <span className="material-symbols-outlined  ">home</span>

        <p>Start</p>
        <span className="material-symbols-outlined ">radio_button_checked</span>
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

export default Start;
