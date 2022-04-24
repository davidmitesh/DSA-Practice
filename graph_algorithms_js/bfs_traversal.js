const graph = { //This is the adjacency list used for the representation of graph
    a: ['c','b'],
    b: ['d'],
    c:['e'],
    d:['f'],
    e:['d'],
    f:['e']
};

/**
 * BFS - Breadth First Search
 * It internally uses queue data structure. So, not possible directly through recursion. In js, we can make 
 * array to behave like a queue by using the shift() and push() operation on array.
 */

const breadthFirstSearch = (graph,root)=>{
    let queue = [];
    let visited = new Set();//This is a lookup with o(n) time complexity. similar to hashmaps in other languages
    queue.push(root);
    let currElem;
    while (queue.length > 0){
        currElem = queue.shift();
        console.log(currElem);
        for (let neighbour of  graph[currElem]){
            if (!visited.has(neighbour)){//This check is done to avoiding traversing infinitely in case of cyclic graphs
                queue.push(neighbour)
                visited.add(neighbour);
            } 
        }
    }
}



breadthFirstSearch(graph,'a'); //the arguments are the graph and the source node/root node

