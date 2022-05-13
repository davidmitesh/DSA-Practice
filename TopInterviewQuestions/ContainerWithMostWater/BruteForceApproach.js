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

//Time complexity is O(n^2) and space complexity is O(1).


const returnMaxArea = (lines) => {
    let maxArea = 0
    for (let p1 = 0;p1 < lines.length;p1++){
        for (let p2 = p1+1; p2<lines.length;p2++){
            const min = Math.min(lines[p1],lines[p2]);
            const width = p2 - p1;
            const area = min * width;
            maxArea = Math.max(maxArea,area);
        }
    }

    return maxArea;
}


console.log(returnMaxArea([7,1,2,3,9]));
console.log(returnMaxArea([7]));
console.log(returnMaxArea([]));