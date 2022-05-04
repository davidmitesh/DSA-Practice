/**
 * Write a function 'canSum(targetSum,numbers)' that takes in a targetSum and array of numbers as arguments
 * 
 * The function should return boolean indication whether or not it is possible to generate the targetSum 
 * using some numbers from the array
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * - you may assume that all input numbers are non negative
 */

//time complexity is O(n*m) and space complexity is O(m)
const canSum = (targetSum,numbers) => {
    const table = Array(targetSum+1).fill(false);
    table[0] = true;

    for (let i= 0;i <= targetSum ;i++){
        if (table[i] === true){
            for (let number of numbers){
                table[i+number] = true;
            }
        }
    }

    return table[targetSum];
}


console.log(canSum(7,[2,3]));

console.log(canSum(7,[5,3,4,7]));
console.log(canSum(7,[2,4]));
console.log(canSum(8,[2,3,5]));