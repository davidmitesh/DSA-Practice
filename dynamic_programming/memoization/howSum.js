/**
 * Write a function 'howSum(targetSum,numbers)' that takes in a targetSum and array of numbers as arguments
 * 
 * The function should return an array containing any combination of elements that add up to
 * exactly the targetSum.If there is no combination that adds upto the targetSum then return null.
 * 
 * If there are multiple combinations, you can simply return any one.
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * - you may assume that all input numbers are non negative
 * 
 * eg: canSum(7,[5,3,4,7]) -> true
 * 3+4 = 7
 *  7 itsef in array is 7
 * 
 * Time complexity is O(n^m * m) and space complexity is O(m)
 */
//plain old recursive function
const howSum = (targetSum,numbers) => {
    //recursion base cases
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    //logic code
    for (let number of numbers){
        let result = howSum(targetSum - number,numbers);
        if (result){
            // result.push(number);
            // return result;
            return [...result,number];
        }
    }

    return null; // if none of the combinations matches
}

//with memoization
//The time complexity now reduced to O(n*m*m) and space complexity is O(m)
const howSumMemo = (targetSum,numbers,memo={}) => {
    //recursion base cases 
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    //memo base case
    if (targetSum in memo) return memo[targetSum];

    //main logic
    for (let number of numbers){
        let result = howSumMemo(targetSum-number,numbers,memo);
        
        if (result){
            result.push(number);
            memo[targetSum] = result;
            return result;
        }
    }

    memo[targetSum] = null;
    return null;
}


//testing

console.log(howSumMemo(7,[2,3]));
console.log(howSum(7,[2,4]));
console.log(howSum(0,[1,2,3]));
console.log(howSumMemo(300,[7,14,10]));