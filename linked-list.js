class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const node = {
        value: val,
        next: null
    }

    let current = undefined;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    return node;
  }

  remove(node) {
    let current = node.value;
    let value = node.value;

    if (this.head !== null) {
      if (this.head === node) {
        this.head = this.head.next;
        node.next = null;

        return value;
      }

      current = this.head;
      while(current.next) {
        if (current.next === node) {
          current.next = node.next;

          return value;
        }

        current = current.next;
      }
    }
  }

  displayAll() {
    let arr = [];
    let current = this.head;

    while(current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

}
