/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(props = []) {
    this.stack = props;
  }

  push(element) {
    this.stack.unshift(element);
  }

  pop() {
    return this.stack.splice(0, 1)[0];
  }

  peek() {
    return this.stack[0];
  }
}

module.exports = Stack;
