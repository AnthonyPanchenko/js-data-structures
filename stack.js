class Stack {
  constructor(data) {
    this.arr = data || [];
  }

  add(item) {
    this.arr.push(item);
    return this.arr;
  }

  get() {
    return this.arr.pop();
  }
}
