import React, { useState } from "react";
import drawTree from "./DrawGraph";
import AlgorithmComponent from "../AlgorithmComponent";

const Decoder = () => {
  const [pruferInput, setPruferInput] = useState("");
  const [treeOutput, setTreeOutput] = useState("");

  const decodePrufer = () => {
    try {
      const prufer = pruferInput.split(",").map(Number);
      const tree = pruferDecode(prufer);
      setTreeOutput(JSON.stringify(tree));
      drawTree(tree, "#decodedTree");
    } catch (error) {
      console.error("Error decoding Prüfer sequence:", error);
    }
  };

  const pruferDecode = (prufer) => {
    const m = prufer.length;
    const vertices = m + 2;
    const vertexSet = new Array(vertices).fill(0);
    const tree = [];

    for (let i = 0; i < vertices - 2; i++) {
      vertexSet[prufer[i] - 1]++;
    }

    let j = 0;
    for (let i = 0; i < vertices - 2; i++) {
      for (j = 0; j < vertices; j++) {
        if (vertexSet[j] === 0) {
          vertexSet[j] = -1;
          tree.push([j + 1, prufer[i]]);
          vertexSet[prufer[i] - 1]--;
          break;
        }
      }
    }

    j = 0;
    for (let i = 0; i < vertices; i++) {
      if (vertexSet[i] === 0 && j === 0) {
        tree.push([i + 1, vertices]);
        j++;
      }
    }

    return tree;
  };

  return (
    // <div>
    //   <h2 className="text-2xl font-bold">Decode Prüfer Sequence</h2>
    //   <input
    //     type="text"
    //     className="w-full p-2 border border-gray-300 rounded mb-4"
    //     placeholder="Enter Prüfer sequence (e.g., 7 ,5 ,7 ,7 ,5 ,1)"
    //     value={pruferInput}
    //     onChange={(e) => setPruferInput(e.target.value)}
    //   />
    //   <button
    //     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    //     onClick={u}
    //   >
    //     Decode
    //   </button>
    //   <p>
    //     Tree: <span className="output">{treeOutput}</span>
    //   </p>

    //   <div
    //     id="decodedTree"
    //     className="m-2 h-96 border rounded shadow-inner"
    //   ></div>
    // </div>
    <AlgorithmComponent
      title="Decode Prüfer Sequence"
      placeholder="Enter Prüfer sequence (e.g., 7,5,7,7,5,1)"
      inputValue={pruferInput}
      onInputChange={setPruferInput}
      buttonText="Decode"
      onButtonClick={decodePrufer}
      outputLabel="Tree"
      outputValue={treeOutput}
      graphContainerId="decodedTree"
    />
  );
};

export default Decoder;
