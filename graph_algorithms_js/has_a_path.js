const graph = { //This is the adjacency list used for the representation of graph
    a: ['c','b'],
    b: ['d'],
    c:['e'],
    d:['f'],
    e:['d'],
    f:['e']
};



/**
 * Has a path problem
 * The goal of the problem is to find out if there exists any path between the source node and destination node in a 
 * graph.
 * Can be solved using BFS as well as DFS.
 */

/** ITERATIVE VERSIONS */

const hasAPathUsingBFS=(graph,srcNode,destNode) => {
    let queue = [];
    let visited = new Set();//This is a lookup with o(n) time complexity. similar to hashmaps in other languages
    queue.push(srcNode);
    let currElem;
    while (queue.length > 0){
        currElem = queue.shift();
        if (currElem == destNode) return true;
        for (let neighbour of  graph[currElem]){
            if (!visited.has(neighbour)){//This check is done to avoiding traversing infinitely in case of cyclic graphs
                queue.push(neighbour)
                visited.add(neighbour);
            } 
        }
    }

    return false;
}

const hasAPathUsingDFS = (graph,srcNode,destNode) => {
    let stack= [];
    let visited = new Set();//This is a lookup with o(n) time complexity. similar to hashmaps in other languages
    stack.push(srcNode);
    let currElem;
    while (stack.length > 0){
        currElem = stack.pop();
        if (currElem == destNode) return true;
        for (let neighbour of  graph[currElem]){
            if (!visited.has(neighbour)){//This check is done to avoiding traversing infinitely in case of cyclic graphs
                stack.push(neighbour)
                visited.add(neighbour);
            } 
        }
    }
    return false;
}

/** RECURSIVE VERSION */

const hasAPathUsingDFSRecursion = (graph,srcNode,destNode,visited) => {
    if (srcNode == destNode ) return true;
    if (visited.has(srcNode)) return false;
    visited.add(srcNode);

    for (let neighbour of graph[srcNode]){
        
            if (hasAPathUsingDFSRecursion(graph,neighbour,destNode,visited) === true) return true;
    }

    return false;
}


console.log(hasAPathUsingBFS(graph,"a","f"));
console.log(hasAPathUsingDFSRecursion(graph,"f","a",new Set()));