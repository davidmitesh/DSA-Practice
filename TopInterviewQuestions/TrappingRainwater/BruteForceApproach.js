//Time complexity is O(n^2)
const returnTrappedWater = (height) => {
    let totalWater = 0;
    for (let p1 = 0;p1<height.length;p1++){
        let lMax = 0,rMax = 0;
        const currentHeight = height[p1];
        for (let p2 = 0;p2<height.length;p2++){
            if (p2 < p1){
                if (height[p2]>lMax) lMax = height[p2];
            }else if (p2>p1){
                if (height[p2]>rMax) rMax= height[p2];
            }

        }

        const minHeight = Math.min(lMax,rMax);
         if ( minHeight - currentHeight> 0){
             totalWater += minHeight - currentHeight;
         }
    }

    return totalWater;
}

console.log(returnTrappedWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(returnTrappedWater([0,1,0,2,1,0,3,1,0,1,2]));
console.log(returnTrappedWater([3,4,3]));