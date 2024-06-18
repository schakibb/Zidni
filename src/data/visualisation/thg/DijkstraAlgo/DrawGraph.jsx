// DrawGraph.js
import * as d3 from "d3";

const drawGraph = (graph, step, selector) => {
  const container = document.querySelector(selector);
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const width = containerWidth;
  const height = containerHeight;

  d3.select(selector).selectAll("*").remove();

  const svg = d3
    .select(selector)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(20,20)");

  const nodes = Object.keys(graph).map((id) => ({ id }));
  const links = [];

  Object.keys(graph).forEach((u) => {
    graph[u].forEach(({ node: v, weight }) => {
      if (
        !links.some(
          (link) =>
            (link.source === u && link.target === v) ||
            (link.source === v && link.target === u)
        )
      ) {
        links.push({ source: u, target: v, weight });
      }
    });
  });

  const pathNodes = new Set();
  const pathEdges = [];

  Object.keys(step.previous).forEach((target) => {
    let current = target;
    while (current && step.previous[current]) {
      const prev = step.previous[current];
      pathNodes.add(current);
      pathNodes.add(prev);
      pathEdges.push({ source: current, target: prev });
      current = prev;
    }
  });

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(100)
    )
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter((width - 40) / 2, (height - 40) / 2))
    .on("tick", ticked);

  const link = svg
    .selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .style("stroke", (d) =>
      pathEdges.some(
        (pathEdge) =>
          (pathEdge.source === d.source.id &&
            pathEdge.target === d.target.id) ||
          (pathEdge.source === d.target.id && pathEdge.target === d.source.id)
      )
        ? "#f00"
        : "#ccc"
    )
    .style("stroke-width", 2);

  const node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 10)
    .style("fill", (d) => (pathNodes.has(d.id) ? "#f00" : "#007bff"));

  const label = svg
    .selectAll(".label")
    .data(nodes)
    .enter()
    .append("text")
    .attr("class", "label")
    .text(
      (d) =>
        `${d.id} (${
          step.distances[d.id] === Infinity ? "∞" : step.distances[d.id]
        })`
    )
    .attr("dx", 12)
    .attr("dy", ".35em");

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    label.attr("x", (d) => d.x).attr("y", (d) => d.y);
  }
};

export default drawGraph;
