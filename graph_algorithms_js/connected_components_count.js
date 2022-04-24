const edges = [
    ['1','2'],
    ['4','6'],
    ['5','6'],
    ['6','7'],
    ['6','8'],
    ['9','10']
]

let graph = {};
const buildGraph = (edges) => {
    

    for (let edge of edges ){
        let [a,b] = edge;
        
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);

    }
}


const countConnectedComponents = (graph) => {
    let visitedNodes = new Set();
    let count = 0;
    for (let node in graph){
        if (explore(graph,node,visitedNodes) === true){
            count +=1;
        }
    }
    return count;
}

const explore = (graph,current,visitedNodes) => {
    if (visitedNodes.has(current)) return false;

    visitedNodes.add(current);

    for (let neighbour of graph[current]){
        explore(graph,neighbour,visitedNodes);
    }

    return true;
}


buildGraph(edges);
console.log(countConnectedComponents(graph));