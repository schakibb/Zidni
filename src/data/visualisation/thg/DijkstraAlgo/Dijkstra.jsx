// Dijkstra.js
export default function dijkstra(graph, start) {
  const distances = {};
  const previous = {};
  const steps = [];

  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[start] = 0;
  const nodes = new Set(Object.keys(graph));

  while (nodes.size > 0) {
    const u = [...nodes].reduce(
      (minNode, node) =>
        distances[node] < distances[minNode] ? node : minNode,
      [...nodes][0]
    );

    nodes.delete(u);

    for (const { node: v, weight } of graph[u]) {
      const alt = distances[u] + weight;
      if (alt < distances[v]) {
        distances[v] = alt;
        previous[v] = u;
      }
    }

    // Store the current step
    steps.push({ distances: { ...distances }, previous: { ...previous } });
  }

  return { distances, previous, steps };
}
