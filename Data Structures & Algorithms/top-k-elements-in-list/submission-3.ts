class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if (nums.length <= k) {
            return nums
        }

        const counts = nums.reduce((acc, v) => {
            return {
                ...acc,
                [v]: acc[v] ? acc[v] + 1 : 1,
            };
        }, {});

        console.log(Object.entries(counts))

        const filters = Object.entries<number>(counts).sort(([, va], [, vb]) => {
            return vb - va;
        }).map(([key, v]: [string, number]) => {
            return parseInt(key);
        });

        console.log(filters.slice(0, k))

        return filters.slice(0, k);

        // return Array.from<number>(new Set<number>(filters.map<number>(([k,]: [string, number]) => parseInt(k)))).slice(0, k);
    }
}
