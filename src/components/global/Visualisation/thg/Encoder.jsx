import React, { useState } from "react";
import drawTree from "./DrawTree";

const Encoder = () => {
  const [treeInput, setTreeInput] = useState("");
  const [pruferOutput, setPruferOutput] = useState("");

  const encodePrüfer = () => {
    try {
      const tree = JSON.parse(treeInput);
      const prufer = pruferEncode(tree);
      setPruferOutput(prufer.join(", "));
      drawTree(tree, "#encodedTree");
    } catch (error) {
      console.error("Error encoding tree:", error);
    }
  };

  const pruferEncode = (tree) => {
    const n = tree.length + 1;
    const degree = Array(n + 1).fill(0);
    const prufer = [];

    tree.forEach(([u, v]) => {
      degree[u]++;
      degree[v]++;
    });

    for (let i = 0; i < n - 2; i++) {
      let leaf = 1;
      while (degree[leaf] !== 1) leaf++;

      for (let [u, v] of tree) {
        if (u === leaf || v === leaf) {
          const neighbor = u === leaf ? v : u;
          prufer.push(neighbor);
          degree[leaf]--;
          degree[neighbor]--;
          break;
        }
      }
    }

    return prufer;
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Encode Tree</h1>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter adjacency list (e.g., [[1,2],[1,3],[2,4]])"
          value={treeInput}
          onChange={(e) => setTreeInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={encodePrüfer}
        >
          Encode
        </button>
        <p>
          Prüfer Sequence: <span className="output">{pruferOutput}</span>
        </p>
      </div>
      <div className="mt-8 w-full max-w-xl h-96 border border-gray-300 rounded bg-white overflow-hidden">
        <div
          id="encodedTree"
          className="outputTree h-full border rounded shadow-inner"
        ></div>
      </div>
    </div>
  );
};

export default Encoder;
