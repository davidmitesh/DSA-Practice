//Problem statement

/**
 * You are given an array of positive integers where each integer 
 * represents height of a vertical line on a chart. Find two lines
 * which together with the x-axis forms a container that would hold
 * the greatest amount of water. Return the area of water 
 * it would hold.
 */

/**
 * Test cases
 * 
 * [7,1,2,3,9] -> 28
 * [] -> 0
 * [7] -> 0
 * [6,9,3,4,5,8] -> 
 */

//Time complexity is O(n) and space complexity is O(1).

//Here we are using the shifting pointers approach.

const returnMaxArea = (lines) => {
    let p1 = 0, p2 = lines.length - 1;
    let maxArea = 0;
    if (lines.length > 2) {
        do {
            let min = Math.min(lines[p1],lines[p2]);
            let width = p2-p1;
            let area = min * width;
            maxArea = Math.max(area,maxArea);
            lines[p1] < lines[p2] ? p1++ : p2--;
        }while (p1 < p2);
    }
    

    return maxArea;
}

console.log(returnMaxArea([7,1,2,3,9]));
console.log(returnMaxArea([7]));
console.log(returnMaxArea([]));

console.log(returnMaxArea([6,9,3,4,5,8]));

