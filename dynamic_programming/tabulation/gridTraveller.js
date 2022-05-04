/**
 * Say that you are a traveller on a 2D grid.You begin in the top-left corner and your goal is to travel to the
 * bottom-right corner.You may only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with dimensions m*n?
 * 
 * Write a function 'gridTraveller(m,n)' that calculates this.
 */

//time complexity is O(m*n) and space complexity is O(m*n).
const gridTraveller = (m,n) => {
    const table = Array(m+1).fill().map(() => Array(n+1).fill(0)); //creating a m*n 2D matrix in js
    
    table[1][1] = 1;

    for (let i= 0; i<=m ; i++){
        for (let j=0;j<=n;j++){
            const current = table[i][j];
            if(j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }
    console.log(table);
    return table[m][n];
}

console.log(gridTraveller(3,2));