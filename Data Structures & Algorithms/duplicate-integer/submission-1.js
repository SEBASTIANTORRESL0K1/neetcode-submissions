class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen= new Set();
        let dup=false;
        nums.forEach((num)=>{
            if(seen.has(num)){
                dup=true
            }
                    seen.add(num)

        })
        return dup;
    }
}
