const edges = [
    ['1','2'],
    ['4','6'],
    ['5','6'],
    ['6','7'],
    ['6','8'],
    ['9','10'],
    ["6",'24']
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


const countLargestComponent = (graph) => {
    let visitedNodes = new Set();

    let largestComponentNumber = 0;

    for (let node in graph){
        let currGraphNodeCount = exploreSize(graph,node,visitedNodes);
        if (currGraphNodeCount > largestComponentNumber) largestComponentNumber = currGraphNodeCount;
    }

    return largestComponentNumber;

}

const exploreSize = (graph,current,visitedNodes)=>{
    if (visitedNodes.has(current)) return 0;

    visitedNodes.add(current);

    let size = 1;//at least has size 1 because it is the least it can be at this point of running the code

    for (let neighbour of graph[current]){
        size += exploreSize(graph,neighbour,visitedNodes);//accumulates the count of all the nodes in this fully connected component of the graph
    }

    return size;

    
}


buildGraph(edges);
console.log(countLargestComponent(graph));