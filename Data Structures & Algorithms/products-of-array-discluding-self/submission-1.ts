class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        return nums.map((_, i) => {
            let product = 1;

            for (let idx = 0; idx < nums.length; idx++) {
                if (i === idx) {
                    continue;
                }

                product = product * nums[idx];
            }

            return product;
        })
    }
}
