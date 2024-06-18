import React, { useState } from "react";
import Graphe from "./graphe";

const GraphInput = () => {
  const [nodesInput, setNodesInput] = useState("");
  const [nodes, setNodes] = useState("");
  const [message, setMessage] = useState("");
  const [edgeType, setEdgeType] = useState("--"); // Default to undirected edge

  const handleInputChange = (e) => {
    setNodesInput(e.target.value);
  };

  const handleAddNodes = () => {
    if (nodesInput.trim() === "") {
      setMessage("Please enter nodes in the format 'a,b,c,d'");
      return;
    }

    setNodes(nodesInput);
    setMessage("");
  };

  const handleEdgeTypeChange = (e) => {
    setEdgeType(e.target.value);
  };

  return (
    <div className="my-3">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter nodes (e.g., a,b,c,d)"
        value={nodesInput}
        onChange={handleInputChange}
      />

      {message && <p className="text-red-500">{message}</p>}
      <div>
        <select
          className="p-2 border border-gray-300 rounded mb-4"
          value={edgeType}
          onChange={handleEdgeTypeChange}
        >
          <option value="--">Undirected (--)</option>
          <option value="->">Directed (-{">"})</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddNodes}
      >
        Add Nodes
      </button>
      <div className="m-2 h-96 border rounded shadow-inner">
        {nodes && <Graphe nodes={nodes} link={edgeType} />}
      </div>
    </div>
  );
};

export default GraphInput;
