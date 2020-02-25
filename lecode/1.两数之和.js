/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break;
    }
    temp = target - nums[i];
    let j = nums.indexOf(temp);
    if (j >= 0 && j !== i) {
      console.log(nums[i], nums[j])
      return [i,j];
    }
  }
};

var twoSum2 = function (nums, target) {
  let temp;
  numsCpoy = nums.concat();
  var strNums = numsCpoy.join(",")

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break;
    }
    temp = target - nums[i];
    reg = `${temp},|,${temp}$`;
    if (strNums.match(new RegExp(reg))) {
      console.log(temp, nums[i])
      return [].push(temp, nums[i]);
    }
  }
};


//  时间复杂度 On=n*(n+1)
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) {
        console.log(nums[i], nums[j]);
        return [].push(nums[i], nums[j]);
      }

    }
  }
};

twoSum([2, 7, 11, 15], 13);
// twoSum([2, 7, 11, 15], 9);