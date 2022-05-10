//Problem statement

// Return the two indices of the numbers from the nums array
//if the target exists else return null


//Time complexity is reduced to O(n) and space complexity is also O(n)

const findTwoSum = (numbers,target) => {
    const numbersMap = {};//use of hash map with lookup time of O(1)
    for (let p1 = 0; p1 < numbers.length;p1++){
        const numberToFind = target - numbers[p1];

        if (numbers[p1] in numbersMap) return [p1,numbersMap[numbers[p1]]];

        numbersMap[numberToFind] = p1;
    }
    return null;
}


console.log(findTwoSum([2,3,5,6,9],15));