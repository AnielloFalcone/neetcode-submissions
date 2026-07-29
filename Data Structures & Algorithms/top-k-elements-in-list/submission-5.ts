class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();
        for (const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of counts) {
            buckets[freq].push(num);
        }

        const result: number[] = [];
        for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}