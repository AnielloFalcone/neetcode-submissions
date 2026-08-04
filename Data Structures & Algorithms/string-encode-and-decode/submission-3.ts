class Solution {
    encode(strs: string[]): string {
        const parts: string[] = [];
        for (const str of strs) {
            parts.push(`${str.length}#${str}`);
        }
        return parts.join("");
    }

    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;

            const length = parseInt(str.slice(i, j));
            const start = j + 1;

            result.push(str.slice(start, start + length));
            i = start + length;
        }

        return result;
    }
}