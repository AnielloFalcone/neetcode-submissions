class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const ch of word) count[ch.charCodeAt(0) - 97]++;
            console.log(count)
            const key = count.join('#'); 

            if (!groups.has(key)) groups.set(key, []);
            groups.get(key)!.push(word);
        }
        
        return Array.from(groups.values());
    }
}
