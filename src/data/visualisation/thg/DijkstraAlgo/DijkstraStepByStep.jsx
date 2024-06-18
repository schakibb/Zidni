import React, { useState } from "react";
import dijkstra from "./Dijkstra"; // Assuming dijkstra function is implemented elsewhere
import drawGraph from "./DrawGraph"; // Updated import to use the modified drawGraph

const DijkstraStepByStep = () => {
  const [graphInput, setGraphInput] = useState("");
  const [startNode, setStartNode] = useState("");
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const runDijkstra = () => {
    try {
      const graph = parseGraph(graphInput);
      const { steps } = dijkstra(graph, startNode);
      setSteps(steps);
      setCurrentStep(0);
      drawGraph(graph, steps[0], "#graphContainer");
    } catch (error) {
      console.error("Error running Dijkstra's algorithm:", error);
      // Optionally, set an error state or display an error message to the user
    }
  };

  const parseGraph = (input) => {
    const edges = input.split(",");
    const graph = {};

    edges.forEach((edge) => {
      const [u, v, w] = edge.trim().split(" ");
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];
      graph[u].push({ node: v, weight: parseFloat(w) });
      graph[v].push({ node: u, weight: parseFloat(w) }); // For undirected graph
    });

    return graph;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      drawGraph(
        parseGraph(graphInput),
        steps[currentStep + 1],
        "#graphContainer"
      );
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      drawGraph(
        parseGraph(graphInput),
        steps[currentStep - 1],
        "#graphContainer"
      );
    }
  };

  return (
    <div className="my-3">
      <h4 className="text-2xl font-bold">Dijkstra's Algorithm Step-by-Step</h4>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter edges with weights (e.g., a b 2,b c 3,a c 4)"
        value={graphInput}
        onChange={(e) => setGraphInput(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter start node (e.g., a)"
        value={startNode}
        onChange={(e) => setStartNode(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={runDijkstra}
      >
        Run Dijkstra
      </button>
      <div className="flex justify-between w-full my-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous Step
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={nextStep}
          disabled={currentStep >= steps.length - 1}
        >
          Next Step
        </button>
      </div>
      <p>
        Current Step: {currentStep + 1}/{steps.length}
      </p>
      <div
        id="graphContainer"
        className="outputGraph m-2 h-96 border rounded shadow-inner"
      ></div>
    </div>
  );
};

export default DijkstraStepByStep;
