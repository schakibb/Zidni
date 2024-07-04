const welshPowel = (graph) => {
  const vertices = Object.keys(graph);
  const colorAssignment = {};

  const sortedVertices = vertices.sort(
    (a, b) => graph[b].length - graph[a].length
  );

  let color = 0;

  sortedVertices.forEach((vertex) => {
    if (!colorAssignment[vertex]) {
      colorAssignment[vertex] = color;

      sortedVertices.forEach((otherVertex) => {
        if (
          !colorAssignment[otherVertex] &&
          !graph[vertex].includes(otherVertex)
        ) {
          colorAssignment[otherVertex] = color;
        }
      });

      color++;
    }
  });

  return colorAssignment;
};

export default welshPowel;
