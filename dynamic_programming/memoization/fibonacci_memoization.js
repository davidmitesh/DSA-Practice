// normal recursion
// Time complexity is exponential O( 2 ^ n) and space complexity is linear O(n)

const normalFib = (n) => {
    //base case
    if (n <= 2) return 1;

    //recursive call
    return normalFib(n-1) + normalFib(n-2);
}

// console.log(normalFib(6));//
// console.log(normalFib(8));
// console.log(normalFib(50));//Takes much long time, fails, so we need to decrease the time complexity significantly


/**
 * For the reasons above, we now use the method of memoization under dynamic programming where each problem is sub divided into 
 * subproblems and are optimized such that time complexity reduces significantly.
 * For storing the memo, we need to use hashmap kind of data structure where lookup time is order of constant.
 * In js, we can use simply object or even set.
 * 
 * The time complexity reduced to O(n) linear time and space complexity is intact i.e O(n);
 */

const memoFib = (n,memo={}) => {
    //base case
    if (n <= 2) return 1;

    // Memo base case added
    if (n in memo) return memo[n];

    // storing the key-value pair in memo and executing the recursive call
    memo[n] = memoFib(n-1,memo) + memoFib(n-2,memo);
    return memo[n];
}

console.log(memoFib(6));//
console.log(memoFib(8));
console.log(memoFib(50));//This compiles very fast