// Double Ended Queue

class Deque() {
  items = [];

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  getRear() {
    return this.items.pop();
  }

  insertRear(item) {
    this.items.push(item);
  }

  deleteRear() {
    this.items.splice(this.items.length - 1, 1);
  }

  getFront() {
    return this.items.shift();
  }

  insertFront(item) {
    this.items.unshift(item);
  }

  deleteFront() {
    this.items.splice(0, 1);
  }
}
