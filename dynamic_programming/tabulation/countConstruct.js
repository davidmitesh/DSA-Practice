
//time complexity is O(m^2*n) where m = target.length and n=wordBank.length and space is O(m)
const countConstruct = (target,wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0 ; i <= target.length ; i++ ){
        if (table[i] > 0){
            for (let word of wordBank){
                if (target.slice(i,i+word.length) === word){
                    table[i+word.length] +=table[i];
                }
            }
        }
    }
    console.log(table);
    return table[target.length];

}

console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd','ef']));