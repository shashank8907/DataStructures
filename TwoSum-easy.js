//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.


/*

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

function twoSum(nums, target) {

    //first you have to iterate the array such that you can get add 2 with 7
    //2 with 11, 2 with 15 , then 7 with 11 then 7 with 15, then 11 with 15 
    //that's it
    //First for loop to iterate num 1 another to num 2


    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i,j]
            }
        }
    }

};

console.log(twoSum([2, 7, 11, 15], 9))