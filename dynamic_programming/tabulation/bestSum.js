const bestSum = (sumTarget,numbers) => {
    const table = Array(sumTarget+1).fill(null);
    table[0] = [];

    for (let i=0; i<=sumTarget;i++){
        if (table[i] !== null){
            for (let number of numbers){
                const current = table[i+number];
                const change = [...table[i],number];

                if (current === null || change.length < current.length) table[i+number] = change;
            }
        }
    }

    return table[sumTarget];
    
}

console.log(bestSum(7,[1,2,3]));
console.log(bestSum(100,[2,5,25]));