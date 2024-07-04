import React from "react";
import { Graphviz } from "graphviz-react";

const Graphe = ({ nodes, link, type = "G", dis = "" }) => {
  const validlink = link === "--" || link === "->" ? link : "--";

  const nodeList = nodes.split(",");
  let edges = "";

  for (let i = 0; i < nodeList.length - 1; i += 2) {
    edges += `${nodeList[i]} ${validlink} ${nodeList[i + 1]}; `;
  }

  const graphType = validlink === "->" ? "digraph" : "graph";

  const dotString = `
    ${graphType} ${type} {
      ${edges}
    }
  `;

  return (
    <div className=" m-5">
      <Graphviz dot={dotString} options={{ height: 300, width: 250 }} />
      <p className=" my-3 text-xl font-semibold">{`${dis}`}</p>
    </div>
  );
};

export default Graphe;
