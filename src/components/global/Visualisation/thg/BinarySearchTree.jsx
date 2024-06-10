import React, { useState, useRef } from "react";
import * as d3 from "d3";

const BinarySearchTree = () => {
  const [values, setValues] = useState("");
  const [treeCreated, setTreeCreated] = useState(false);
  const svgRef = useRef(null);
  const containerRef = useRef(null); // Ref for the container div

  // Function to build BST from array of values
  const buildBST = (values) => {
    class TreeNode {
      constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
      }
    }

    function insertIntoBST(root, val) {
      if (!root) return new TreeNode(val);
      if (val < root.val) root.left = insertIntoBST(root.left, val);
      else root.right = insertIntoBST(root.right, val);
      return root;
    }

    let root = null;
    values.forEach((val) => {
      root = insertIntoBST(root, val);
    });
    return root;
  };

  // Function to draw BST using D3
  const drawBST = (root) => {
    // Get the width and height of the container dynamically
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", containerWidth)
      .attr("height", containerHeight)
      .append("g")
      .attr("transform", "translate(20,20)");

    const bstToHierarchy = (root) => {
      if (!root) return null;
      return {
        name: root.val,
        children: [
          bstToHierarchy(root.left),
          bstToHierarchy(root.right),
        ].filter(Boolean),
      };
    };

    const hierarchyData = d3.hierarchy(bstToHierarchy(root));
    const treeLayout = d3
      .tree()
      .size([containerWidth - 40, containerHeight - 40]);
    const treeData = treeLayout(hierarchyData);

    svg
      .selectAll(".link")
      .data(treeData.links())
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke", "#ccc")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    const node = svg
      .selectAll(".node")
      .data(treeData.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    node.append("circle").attr("r", 10).style("fill", "#007bff");

    node
      .append("text")
      .style("fill", "#fff")
      .style("font-size", "10px")
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .text((d) => d.data.name);
  };

  const handleSubmit = () => {
    const valuesArray = values.split(",").map(Number);
    if (valuesArray.some(isNaN)) {
      alert("Please enter valid numerical values separated by commas.");
      return;
    }
    const bst = buildBST(valuesArray);
    drawBST(bst);
    setTreeCreated(true);
    setValues("");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <div
        ref={containerRef}
        className="bg-white p-8 rounded shadow-md w-full max-w-xl"
        style={{ height: "auto" }} // Allow the container to grow manually
      >
        <h1 className="text-2xl font-bold mb-4">
          Binary Search Tree Encoder/Decoder
        </h1>
        <input
          type="text"
          id="bstInput"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter values (e.g., 5,3,7,2,4,6,8)"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
        {treeCreated && (
          <p className="text-green-500 mt-2">
            Binary Search Tree created successfully!
          </p>
        )}
      </div>
      <div className="mt-8 w-full max-w-xl border border-gray-300 rounded bg-white overflow-hidden">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default BinarySearchTree;
