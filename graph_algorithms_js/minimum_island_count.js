const grid = [//representation of the island grid, can be thought of as the graph problem
    ['W','L','W','W','W','W'],
    ['L','L','W','W','W','W'],
    ['W','L','W','W','W','W'],
    ['W','W','W','L','L','W'],
    ['W','L','L','L','L','W'],
    ['W','W','W','W','W','W']
];

const explore =(grid,r,c,visitedNodes)=>{

    const rowInBounds =  r >= 0 && r < grid.length ;
    const colInBounds = c >= 0 && c < grid[0].length ;

    if(!rowInBounds || !colInBounds) return 0;
    if(grid[r][c] === 'W') return 0;

    let pos = r+','+c;
    if (visitedNodes.has(pos)) return 0;
    visitedNodes.add(pos);

    let size = 1;

    size += explore(grid,r-1,c,visitedNodes);
    size += explore(grid,r+1,c,visitedNodes);
    size += explore(grid,r,c-1,visitedNodes);
    size += explore(grid,r,c+1,visitedNodes);

    return size;
}

const countMinimumIslands = (grid) => {
    let visitedNodes = new Set();
    let minimumIslandSize = Infinity;

    for (let r = 0;r<grid.length;r++){
        for (let c=0;c<grid[0].length;c++){
            let currentIslandSize = explore(grid,r,c,visitedNodes);

            //here the currentIslandSize should be greater than 0 because any island cant be 0
            if ( currentIslandSize > 0 &&  currentIslandSize < minimumIslandSize) minimumIslandSize = currentIslandSize;
        }
    }

    return minimumIslandSize;
}


console.log(countMinimumIslands(grid));





