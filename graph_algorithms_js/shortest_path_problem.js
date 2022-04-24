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
    let queue = [];//utilizing the queue that will store the path as well as the distance upto that point in the form ['xyz',2]
    let graph = buildGraph(edges);
    let visitedNodes = new Set();//keeping the visited nodes list so that we dont run into infinite loop due to cycles in graph
    queue.push([src,0]);
    while (queue.length > 0){
        let [current,distance] = queue.shift();//extracting the first element from the queue
        let currentNode = current.split("").pop();//extracting the last element that is added to path( z in 'xyz')
        visitedNodes.add(currentNode);
        if (currentNode == dest) return [current,distance];
        for (let neighbour of graph[currentNode]){
            if (!visitedNodes.has(neighbour)){
                visitedNodes.add(neighbour);
                queue.push([`${current}${neighbour}`,distance+1]);
            }
        }
    }
    return (-1);//returning -1 if no path is found between source and destination
}

console.log(returnShortestPath('w','z'));










