import React from "react";
import { Graphviz } from "graphviz-react";

const Graphe = ({ nodes, link }) => {
  const validlink = link === "--" || link === "->" ? link : "--";

  const nodeList = nodes.split(",");
  let edges = "";

  for (let i = 0; i < nodeList.length - 1; i += 2) {
    edges += `${nodeList[i]} ${validlink} ${nodeList[i + 1]}; `;
  }

  const graphType = validlink === "->" ? "digraph DFS" : "graph";

  const dotString = `
    ${graphType} G {
      ${edges}
    }
  `;

  return <Graphviz dot={dotString} options={{ height: 400 }} />;
};

export default Graphe;
