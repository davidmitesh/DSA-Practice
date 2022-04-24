const edges = [ //We need to convert this to the adjacency list first to apply the algorithm
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
];

//This will build the adjacency list from the edges

const buildGraph = (edges) => {
    let graph = {};
    for (let edge of edges){
        let [a,b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


/**
 * For shortest path problem, it is best to use the BFS and we need to use queue.
 */

const returnShortestPath = (src,dest)=>{
    let queue = [];
    let graph = buildGraph(edges);
    let visitedNodes = new Set();
    queue.push([src,0]);
    while (queue.length > 0){
        let [current,distance] = queue.shift();
        let currentNode = current.split("").pop();
        visitedNodes.add(currentNode);
        if (currentNode == dest) return [current,distance];
        for (let neighbour of graph[currentNode]){
            if (!visitedNodes.has(neighbour)){
                visitedNodes.add(neighbour);
                queue.push([`${current}${neighbour}`,distance+1]);
            }
        }
    }
    return ("no path found");
}

console.log(returnShortestPath('w','z'));










