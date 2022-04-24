const grid = [//representation of the island grid, can be thought of as the graph problem
    ['W','L','W','W','L','W'],
    ['L','L','W','W','L','W'],
    ['W','L','W','W','W','W'],
    ['W','W','W','L','L','W'],
    ['W','L','W','L','L','W'],
    ['W','W','W','W','W','W']
];

const explore =(grid,r,c,visitedNodes)=>{

    const rowInBounds =  r >= 0 && r < grid.length ;
    const colInBounds = c >= 0 && c < grid[0].length ;

    if(!rowInBounds || !colInBounds) return false;
    if(grid[r][c] === 'W') return false;

    let pos = r+','+c;
    if (visitedNodes.has(pos)) return false;
    visitedNodes.add(pos);

    explore(grid,r-1,c,visitedNodes);
    explore(grid,r+1,c,visitedNodes);
    explore(grid,r,c-1,visitedNodes);
    explore(grid,r,c+1,visitedNodes);

    return true;
}

const countIslands = (grid) => {
    let visitedNodes = new Set();
    let islandCount = 0;


    for (let r = 0;r<grid.length;r++){
        for (let c=0;c<grid[0].length;c++){
            if (explore(grid,r,c,visitedNodes) === true) islandCount++;
        }
    }

    return islandCount;
}


console.log(countIslands(grid));





