class LinkedList {
    private list: Array<number>;
    private length: number;

    constructor() {
        this.list = [];
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index > this.length - 1) {
            return -1
        }

        return this.list[index];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        this.list = [val, ...this.list];
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.list = [...this.list, val];
        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index > this.length - 1) {
            return false;
        }

        this.list.splice(index, 1);
        this.length--;

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        return this.list;
    }
}
