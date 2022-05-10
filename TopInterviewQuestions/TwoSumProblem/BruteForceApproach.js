//Problem statement

// Return the two indices of the numbers from the nums array
//if the target exists else return null

//This approach has a time complexity of O(n^2) and space complexity
// of O(1) or constant time.


// Our goal should be to improve the time complexity while compensating
//it with the increase in space complexity.


const findTwoSum = (nums,target) => {
    for (let p1 = 0; p1 < nums.length;p1++){
        const numberToFind = target - nums[p1];

        for (let p2 = p1 + 1 ; p2 < nums.length ; p2++){
            if (numberToFind === nums[p2]) return [p1,p2]; 
        }
    }

    return null;
}


console.log(findTwoSum([2,3,5,6,9],15));