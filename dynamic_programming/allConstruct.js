/**
 * Write a function 'allConstruct(target,wordBank)' that takes in a target and array of words as arguments
 * 
 * The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating
 * elements of the 'wordbank' array.Each element of the 2D array should represent one combination that constructs the 'target'.
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * 
 */

//non- memoized version
//Time complexity is exponential (O(n^m) ) no matter if it is memoized or not.
const allConstruct = (target,wordBank) => {
    const allPossiblePaths = [];
    //recursive base cases 
    if (target === '') return [[]];

    //main logic
    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix,wordBank);
            const targetWays = suffixWays.map(way => [word,...way]);
            allPossiblePaths.push(...targetWays);
        }
    }

    return allPossiblePaths;

}

console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd','ef']));