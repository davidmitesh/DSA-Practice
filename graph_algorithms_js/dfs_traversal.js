const graph = { //This is the adjacency list used for the representation of graph
    a: ['c','b'],
    b: ['d'],
    c:['e'],
    d:['f'],
    e:['d'],
    f:['e']
};


/**
 * DFS - Depth First Search
 * It internally uses stack data structure. So, it is possible through iteration as well as recursion as recursion
 * internally uses call stack. In js, we can make 
 * array to behave like a stack by using the pop() and push() operation on array.
 */

 const depthFirstSearch = (graph,root)=>{
    let stack= [];
    let visited = new Set();//This is a lookup with o(n) time complexity. similar to hashmaps in other languages
    stack.push(root);
    let currElem;
    while (stack.length > 0){
        currElem = stack.pop();
        console.log(currElem);
        for (let neighbour of  graph[currElem]){
            if (!visited.has(neighbour)){//This check is done to avoiding traversing infinitely in case of cyclic graphs
                stack.push(neighbour)
                visited.add(neighbour);
            } 
        }
    }
}


 depthFirstSearch(graph,'a'); //the arguments are the graph and the source node/root node