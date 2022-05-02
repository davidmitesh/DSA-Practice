/**
 * Write a function 'canSum(targetSum,numbers)' that takes in a targetSum and array of numbers as arguments
 * 
 * The function should return boolean indication whether or not it is possible to generate the targetSum 
 * using some numbers from the array
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * - you may assume that all input numbers are non negative
 * 
 * eg: canSum(7,[5,3,4,7]) -> true
 * 3+4 = 7
 *  7 itsef in array is 7
 */

//Non memoization enabled version of the canSum problem

const canSum = (targetSum,numbers) => {
    // if (numbers.includes(targetSum)) return true;
    if (targetSum === 0) return true;
    // if (targetSum > 0){
    //     for (let number of numbers){
    //        if (canSum(targetSum - number,numbers)) return true;
    //     }
    // }

    if (targetSum < 0) return false;
    for (let number of numbers){
               if (canSum(targetSum - number,numbers)) return true;
            }

    return false;
}

//memoization enabled version of the canSum problem
// time complexity is now reduced to O(m*n) and space complexity is O(m*m)
const canSumMemo = (targetSum,numbers,memo={}) => {
    // if (numbers.includes(targetSum)) return true;
    if (targetSum === 0) return true;
    if (targetSum in memo) return memo[targetSum];
    if (targetSum < 0) return false;
    for (let number of numbers){
        memo[targetSum] =  canSumMemo(targetSum - number,numbers,memo);
        if (memo[targetSum]) return true; 
    }
     
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7,[2,3]));

console.log(canSum(7,[5,3,4,7]));
console.log(canSum(7,[2,4]));
console.log(canSum(8,[2,3,5]));

console.log(canSumMemo(300,[7,14]));
