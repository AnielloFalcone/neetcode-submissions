class ListNode {
    val: number;
    next: ListNode | null = null;
    constructor(val: number) { this.val = val; }
}

class LinkedList {
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    private length = 0;

    get(index: number): number {
        if (index < 0 || index > this.length - 1) return -1;
        let cur = this.head;
        for (let i = 0; i < index; i++) cur = cur!.next;
        return cur!.val;
    }

    insertHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        if (!this.tail) this.tail = node;
        this.length++;
    }

    insertTail(val: number): void {
        const node = new ListNode(val);
        if (this.tail) this.tail.next = node;
        else this.head = node;
        this.tail = node;
        this.length++;
    }

    remove(index: number): boolean {
        if (index < 0 || index > this.length - 1) return false;
        if (index === 0) {
            this.head = this.head!.next;
            if (!this.head) this.tail = null;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) prev = prev!.next;
            prev!.next = prev!.next!.next;
            if (prev!.next === null) this.tail = prev;
        }
        this.length--;
        return true;
    }

    getValues(): number[] {
        const out: number[] = [];
        let cur = this.head;
        while (cur) { out.push(cur.val); cur = cur.next; }
        return out;
    }
}