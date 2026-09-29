class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let num1, num2;
        for(let i=0;i<nums.length;i++){
         // console.log(i)
          for(let j= i+1; j<nums.length;j++){
          // console.log("i+j="+(nums[i]+nums[j]))
            if(nums[i]+nums[j]===target){
              return [i,j]
            }
          }
        }
    }
}
