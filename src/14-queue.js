const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.values = [];
    this.start = null;
    this.end = null;
  }

  get size() {
    return this.values.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    this.values.push(element);

    if (this.start) {
      this.end.next = newNode;
      this.end = newNode;
    } else {
      this.start = newNode;
      this.end = newNode;
    }
  }

  dequeue() {
    this.start = this.start.next;
    return this.values.shift();
  }
}

module.exports = Queue;
