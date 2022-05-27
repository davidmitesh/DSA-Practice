//Time complexity is O(n)

const returnTrappedWater = (height)=>{
    let maxLeft = 0, maxRight = 0, total = 0, pL = 0, pR = height.length - 1;

    while (pL < pR){
        const leftHeight = height[pL];
        const rightHeight = height[pR];
        if (leftHeight <= rightHeight){
            if (leftHeight < maxLeft) {
                total += maxLeft - leftHeight
            }
            else maxLeft = leftHeight

            pL++;
        }else{
            if (rightHeight < maxRight) {
                total += maxRight - rightHeight
            }
            else maxRight = rightHeight

            pR--;
        }
    }

    return total;
} 

console.log(returnTrappedWater([0,1,0,2,1,0,3,1,0,1,2]));
console.log(returnTrappedWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(returnTrappedWater([3,4,3]));