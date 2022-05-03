/**
 * Write a function 'canConstruct(target,wordBank)' that takes in a target and array of words as arguments
 * 
 * The function should return boolean about whether the target word can be constructed using the words in wordBank array.
 * 
 * Constraints:
 * - You may use an element of the array as many times as needed
 * 
 */

//non-memoized version

const canConstruct = (target,wordBank)=>{
    //recursion base cases
    if (target === '') return true;


    //main logic
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            //suffix is the remainder that is left after removing the current word
            const suffix = target.slice(word.length);
            if(canConstruct(suffix,wordBank) === true) return true;
        }
    }


    return false;
}


//memoized version

const canConstructMemo = (target,wordBank,memo={})=>{
    //recursion base cases
    if (target === '') return true;
    //memoization base case
    if (target in memo) return memo[target];



    //main logic
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            //suffix is the remainder that is left after removing the current word
            const suffix = target.slice(word.length);
            if(canConstructMemo(suffix,wordBank,memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }


    memo[target] = false;
    return false;
}


console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(canConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']));

console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    'ef',
    'eeee',
    'eeeeeeee',
    'eeeeeeeeeeeeeeee',
    'eeeeeeeeeeeeeeeeeeeeeeeeee'

]))