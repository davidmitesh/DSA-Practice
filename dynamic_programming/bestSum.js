/**
 * Write a function 'bestSum(targetSum,numbers)' that takes in a targetSum and array of numbers as arguments
 * 
 * The function should return an array containing the shortest combination of numbers that add up exactly to the targetSum
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * - you may assume that all input numbers are non negative
 * 
 * If there is any tie, return any one.
 */

//without memoization - time complexity : O(n^m * m) space complexity : O(m^2)
const bestSum = (targetSum, numbers)=>{
    let leastStepPath = null;
    //base case for recursion
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    //main logic
    for (let number of numbers){
        let remainder = targetSum - number;
        let result = bestSum(remainder,numbers);

        if (result !== null){
           if (leastStepPath === null || leastStepPath.length > result.length){
               leastStepPath = [...result,number];
           }
        }
    }


    return leastStepPath;
}

//with memoization - time complexity : O(n*m^2) space complexity : O(m^2)
const bestSumMemo = (targetSum,numbers,memo={}) => {
    let leastSumPath = null;

    //base recursive cases
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    //recursive base case
    if (targetSum in memo) return memo[targetSum];

    //main logic
    for (let number of numbers){
        let remainder = targetSum - number;
        let result = bestSumMemo(remainder,numbers,memo);

        if (result !== null){
            if (leastSumPath === null || leastSumPath.length > result.length){
                leastSumPath = [...result,number];
            }
        }
    }

    memo[targetSum] = leastSumPath;
    return memo[targetSum];
}


console.log(bestSum(7,[2,3]));
console.log(bestSumMemo (300,[7,14,10]));
console.log(bestSumMemo(8,[2,3,5]));
console.log(bestSumMemo(100,[2,5,25]));