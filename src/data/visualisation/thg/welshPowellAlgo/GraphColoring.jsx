import React, { useState } from "react";
import welshPowel from "./welshPowel";
import drawColoredGraph from "./DrawColoredGraph";
import AlgorithmComponent from "../AlgorithmComponent";

const GraphColoring = () => {
  const [graphInput, setGraphInput] = useState("");
  const [colorOutput, setColorOutput] = useState("");

  const parseEdgeList = (edgeList) => {
    const edges = edgeList.split(",");
    const graph = {};

    for (let i = 0; i < edges.length; i += 2) {
      const u = edges[i].trim();
      const v = edges[i + 1].trim();

      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];

      if (!graph[u].includes(v)) graph[u].push(v);
      if (!graph[v].includes(u)) graph[v].push(u);
    }

    return graph;
  };

  const colorGraph = () => {
    try {
      const graph = parseEdgeList(graphInput);
      const colorAssignment = welshPowel(graph);
      setColorOutput(JSON.stringify(colorAssignment));
      drawColoredGraph(graph, colorAssignment, "#coloredGraph");
    } catch (error) {
      console.error("Error coloring graph:", error);
      setColorOutput("Invalid input. Please provide a valid edge list.");
    }
  };

  return (
    // <div>
    //   <h2 className="text-2xl font-bold">Graph Coloringe</h2>
    //   <input
    //     type="text"
    //     className="w-full p-2 border border-gray-300 rounded mb-4"
    //     placeholder="Enter edge list (e.g., a,b,b,c,a,c)"
    //     value={graphInput}
    //     onChange={(e) => setGraphInput(e.target.value)}
    //   />
    //   <button
    //     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    //     onClick={colorGraph}
    //   >
    //     Color Graph
    //   </button>
    //   <p>
    //     Color Assignment: <span className="output">{colorOutput}</span>
    //   </p>

    //   <div
    //     id="coloredGraph"
    //     className="m-2 h-96 border rounded shadow-inner"
    //   ></div>
    // </div>
    <AlgorithmComponent
      title="Graph Coloring"
      placeholder="Enter edge list (e.g., a,b,b,c,a,c)"
      inputValue={graphInput}
      onInputChange={setGraphInput}
      buttonText="Color Graph"
      onButtonClick={colorGraph}
      outputLabel="Color Assignment"
      outputValue={colorOutput}
      graphContainerId="coloredGraph"
    />
  );
};

export default GraphColoring;
