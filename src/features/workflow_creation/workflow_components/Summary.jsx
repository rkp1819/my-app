import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function Summary({ data, isConnectable }) {
  return (
    <div className="bg-[#265966] rounded-lg border border-primary p-2 text-white">
      <div className="flex flex-row space-x-2">
        <span className="material-symbols-outlined  text-primary">
          summarize
        </span>
        <div>
          {" "}
          <p>{data.title}</p>
          <p className="text-sm text-slate-400">Permission, form type and +1</p>
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

export default Summary;
