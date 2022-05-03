/**
 * Write a function 'countConstruct(target,wordBank)' that takes in a target and array of words as arguments
 * 
 * The function should return number of ways that the "target" can be constructed by concatenating elements of the 
 * 'wordBank' array.
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * 
 */

//non-memoized version

const countConstruct = (target,wordBank) => {
    let totalWays = 0;
    //base recursion cases
    if (target === '') return 1;

    //main logic
    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            totalWays += countConstruct(suffix,wordBank);        }
    }

    return totalWays;
}


//memoized version
//here n - length of the wordBank, m = target word length
//time complexity - O(n^m *m) space complexity - O(m^2) 

const countConstructMemo = (target,wordBank,memo={}) => {
    let totalWays = 0;
    //base recursion cases
    if (target === '') return 1;
    //memoization base cases
    if (target in memo) return memo[target];

    //main logic
    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            totalWays += countConstruct(suffix,wordBank,memo);

        }
    }

    memo[target] =  totalWays;
    return totalWays;
}


console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd','ef']));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    'ef',
    'eeee',
    'eeeeeeee',
    'eeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeee'

]))
console.log(countConstructMemo('skateboard',['bo','rd','ate','t','ska','sk','boar']));