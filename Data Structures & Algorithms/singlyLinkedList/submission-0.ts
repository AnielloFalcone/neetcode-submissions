class LinkedList {
    private list: Array<number>;

    constructor() {
        this.list = [];
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index > this.list.length - 1) {
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
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.list = [...this.list, val];
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index > this.list.length - 1) {
            return false;
        }

        this.list.splice(index, 1);

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        return this.list;
    }
}
