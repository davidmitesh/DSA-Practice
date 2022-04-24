const edges = [ //We need to convert this to the adjacency list first to apply the algorithm
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
];

//This will build the adjacency list from the edges
let graph = {};
const buildGraph = (edges) => {
    for (let edge of edges){
        let [a,b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
}

//hey







