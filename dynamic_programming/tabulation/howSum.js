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
 */

//time complexity in this case is O(m^2*n) and space complexity is O(m^2)
const howSum = (targetSum,numbers) => {
    const table = Array(targetSum+1).fill(null);
    table[0] = [];

    for (let i=0 ; i<=targetSum;i++){
        if (table[i] !== null){
            for (let number of numbers){
                table[i+number] = [...table[i],number];//this can take O(m) complexity
            }
        }
    }

    return table[targetSum];
}

console.log(howSum(7,[1,2,3]));
console.log(howSum(300,[7,14]));
console.log(howSum(8,[2,3,5]));