class DynamicArray {
    private array: Array<number> = []
    private size: number = 0

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.array = Array.from({length: capacity})
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.size === this.array.length) {
            this.resize();
        }
        
        this.array[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const x = this.array[this.size - 1];
        this.size--;
        return x;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newSpace: Array<number> = Array.from({length: this.array.length});
        this.array = [...this.array, ...newSpace];
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {

        return this.array.length;
    }
}
