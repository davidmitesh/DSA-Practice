//Suppose our graph is given in this form instead of the adjacency list. Our job is to convert this structure to the
// adjacency list to run other graph algorithms over it
const edges = [
    ["i","j"],
    ["k","i"],
    ["m","k"],
    ["k","l"],
    ["o","n"]
]

//Building the adjacency list of the graph
const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges){
        const [a,b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    console.log(graph);
}

buildGraph(edges);