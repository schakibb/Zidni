import { Graphviz } from "graphviz-react";
import Graphe from "../visualisation/thg/graphe";

export const thg = {
  id: 38,
  title: "Graph theory",
  description:
    "Explore graph theory concepts, including vertices, edges, paths, cycles, and graph coloring, with applications in computer science and networks.",
  comingSoon: false,
  isNew: true,
  chapters: [
    {
      chapterId: 1,
      title: "Introduction to Graph Theory",
      chapterDescription:
        "Graph theory is a branch of mathematics focused on the study of graphs, which are structures made up of vertices (or nodes) connected by edges. Graphs are used to model pairwise relations between objects, making them a valuable tool in various fields such as computer science, biology, and social sciences.",
      subChapter: [
        {
          id: 101,
          title: "1 Basic Definitions",
          subChapterContent: (
            <div>
              <h4>
                <strong>1.1.Graphs : </strong>
              </h4>
              <p>
                Graphs are data structures composed of a set of vertices, with
                the aim of representing relationships between objects.
              </p>
              <br></br>
              <p>Real-life example of using Graphs :</p>
              <ul>
                <li>
                  <strong>- Social Networks : </strong> As mentioned earlier,
                  social media platforms like Facebook, Twitter, and LinkedIn
                  utilize graphs to represent connections between users.
                </li>
                <li>
                  <strong>- Transportation Networks : </strong> Road networks,
                  railway systems, and airline routes can be represented as
                  graphs, where nodes represent locations (such as cities or
                  stations) and edges represent the connections between them.
                </li>
                <li>
                  <strong>- Internet and Web : </strong> The World Wide Web can
                  be represented as a graph, where web pages are nodes and
                  hyperlinks between pages are edges.
                </li>
                <li>
                  <strong>- Recommendation Systems : </strong> Graphs are used
                  in recommendation systems to model relationships between
                  users, products, or content, helping to suggest relevant items
                  based on connections within the graph.
                </li>
              </ul>
              <br />
              <div className="flex items-center">
                <Graphe nodes={"1,2,2,3,3,1"} link={"--"} />
                <div>
                  <p>
                    <strong>This graph can be noted G(V,R)</strong>
                  </p>
                  <br></br>
                  <p>
                    <strong>V={"{1,2,3}"} set of vertices</strong>
                  </p>
                  <br></br>
                  <p>
                    <strong>R={"{(1,2),(2,3),(3,2)}"} set of relations</strong>
                  </p>
                </div>
              </div>
              <h4>
                <strong>1.2.Vertices (or Nodes) : </strong>
              </h4>{" "}
              The elements of the set (1 is a node or a vertice)
              <br />
              <br />
              <h4>
                <strong>1.3.Edges : </strong>
              </h4>{" "}
              The elements of the relations or links between vertices
              <br />
              <br />
              <h4>
                <strong>1.4.Directed Graph : </strong>
              </h4>{" "}
              A graph where each edge has a direction
              <Graphe
                nodes={"1,2,2,5,2,4,3,6,4,4,4,1,4,5,5,4"}
                link="->"
                type="BFS"
              />
              <h4>
                <strong>1.5.Undirected Graph : </strong>
              </h4>{" "}
              A graph where edges have no direction.
              <Graphe nodes={"1,2,2,3,3,1,4,5"} link={"--"} />
              <h4>
                <strong>1.6.Loop:</strong>
              </h4>{" "}
              An edge that connects a vertex to itself Example :
              <Graphe nodes={"A,B,B,B"} link="->" type="BFS" />
              <br />
              <h4>
                <strong>1.7.Order</strong>
              </h4>
              Is the number of vertices . Example Ordr 3
              <Graphe nodes={"A,B,B,C"} link={"->"} type="BFS" />
              <h4>
                <strong>1.8.Vertex degree</strong>
              </h4>
              <p>Noted d(V) ,is the number of relations of the vertex</p>
              <br />
              <h4>
                <strong>1.9.Regular Graph</strong>
              </h4>
              If the degree of all the vertices are equals
            </div>
          ),
        },
        {
          id: 102,
          title: "2 Types of Graphs",
          subChapterContent: (
            <div>
              <strong>Simple Graph:</strong> A graph with no loops or multiple
              edges.
              <br />
              <br />
              <strong>Multigraph:</strong> A graph that can have multiple edges
              between the same pair of vertices.
              <br />
              <br />
              <h4>
                <strong>Pseudograph : </strong>
              </h4>{" "}
              A graph that may contain both loops and multiple edges.
              <br />
              <br />
              <h4>
                <strong>Complete Graph : </strong>{" "}
              </h4>
              A graph in which every pair of distinct vertices is connected by a
              unique edge. Denoted as \( K_n \), where \( n \) is the number of
              vertices.
              <Graphe nodes={"A,B,A,C,A,D,B,C,B,D,C,D"} link={"--"} />
              <br />
              <br />
              <strong>Bipartite Graph:</strong> A graph whose vertices can be
              divided into two disjoint sets \( U \) and \( V \) such that no
              two vertices within the same set are adjacent. Represented as \(
              K_{"{(m, n)}"} \) where \( m \) and \( n \) are the number of
              vertices in the two sets.
              <br />
              <br />
              <strong>Subgraph:</strong> A graph formed from a subset of the
              vertices and edges of another graph.
              <br />
              <br />
              <strong>Complement:</strong> A graph containing all the edges that
              are not present in the original graph.
              <br />
              <br />
              <strong>Example:</strong>
              <br />
              <Graphe nodes={"A,B,B,C,C,A"} link={"--"} />
              <h4>
                <strong>2.6.Reflexive Graph : </strong>
              </h4>
              its a graphe that has a loop on each vertex.
              <Graphe nodes="A,A,A,B,A,C,B,B,C,C,C,A" link={"->"} type="BFS" />
              <h4>
                <strong>2.7.Symmetric Graph : </strong>
              </h4>
              IDf, for every arc (x, y) belonging to R, the arc (y, x) also
              belongs to R.
              <Graphe nodes="A,B,A,C,B,A,B,C,C,A,C,B" link={"->"} type="BFS" />
              <h4>
                <strong>2.8.Antisymmetric Graph : </strong>
              </h4>
              If, for every arc (x, y) belonging to R, the arc (y, x) does not
              belong to R.
              <Graphe nodes="1,3,2,1,2,3" link={"->"} type="BFS" />
              <h4>
                <strong>2.9.Transitive Graph : </strong>
              </h4>
              If, for any two adjacent arcs (x, y) and (y, z) belonging to R,
              then the arc (x, z) also belongs to R.
              <Graphe nodes="A,B,A,C,B,C" link={"->"} type="BFS" />
            </div>
          ),
        },
        {
          id: 103,
          title: "1.3 Graph Representations",
          subChapterContent: (
            <div>
              <strong>Adjacency Matrix:</strong> A 2D array \( A \) where \(
              A[i][j] = 1 \) if there is an edge between vertices \( i \) and \(
              j \), and 0 otherwise.
              <br />
              <br />
              <strong>Adjacency List:</strong> A list where each vertex \( v \)
              has a sublist of vertices it is connected to by an edge.
              <br />
              <br />
              <strong>Incidence Matrix:</strong> A 2D array \( B \) where rows
              represent vertices and columns represent edges. \( B[i][j] = 1 \)
              if vertex \( i \) is incident to edge \( j \), and 0 otherwise.
              <br />
              <br />
              <strong>Example:</strong>
              <br />
              <div>
                {/* Adjacency Matrix Example */}
                <Graphe nodes={"A,B,B,C"} link={"--"} />

                <div>
                  <strong>Adjacency Matrix:</strong>
                  <pre>
                    {`0 1 0
  1 0 1
  0 1 0`}
                  </pre>
                </div>
                <div>
                  <strong>Adjacency List:</strong>
                  <pre>
                    {`A: [B]
  B: [A, C]
  C: [B]`}
                  </pre>
                </div>
                <div>
                  <strong>Incidence Matrix:</strong>
                  <pre>
                    {`1 0
  1 1
  0 1`}
                  </pre>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 104,
          title: "1.4 Graph Traversal Algorithms",
          subChapterContent: (
            <div>
              <strong>Depth-First Search (DFS):</strong> An algorithm that
              starts at a root vertex and explores as far as possible along each
              branch before backtracking.
              <br />
              <br />
              <strong>Steps:</strong>
              <ol>
                <li>Start at the root vertex.</li>
                <li>
                  Explore each branch by visiting the deepest unvisited vertex.
                </li>
                <li>
                  Backtrack to the previous vertex if no unvisited vertices
                  remain.
                </li>
              </ol>
              <br />
              <strong>Example:</strong>
              <br />
              <Graphe nodes={"A,B,A,C,B,D"} link={"->"} type="DFS" />
              <br />
              <strong>Breadth-First Search (BFS):</strong> An algorithm that
              starts at a root vertex and explores all neighbors at the present
              depth before moving on to vertices at the next depth level.
              <br />
              <br />
              <strong>Steps:</strong>
              <ol>
                <li>Start at the root vertex.</li>
                <li>Visit all adjacent vertices.</li>
                <li>Move to the next level and repeat.</li>
              </ol>
              <br />
              <strong>Example:</strong>
              <br />
              <Graphe
                nodes={"A,B,A,C,B,D,D,A,D,D,D,B"}
                link={"->"}
                type="BFS"
              />
              {/* <Graphviz
                  dot={`
                    digraph BFS {
                      A -> { B C };
                      B -> D;
                    }
                  `}
                /> */}
            </div>
          ),
        },
      ],
    },
  ],
  //fin
  path: "/courses/thg/learn",
  quiz: "/courses/thg/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
  next: "/courses/completed_path",
};
