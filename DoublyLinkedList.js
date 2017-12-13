class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    let currentNode = this.head;
    let parentNode = this.head;

    if (!this.head) {
      this.head = { value: val, next: null, parent: null };
    } else {
      while (currentNode && currentNode.next) {
        parentNode = currentNode;
        currentNode = currentNode.next;
      }

      currentNode.next = { value: val, parent: currentNode, next: null };
    }

    return currentNode && currentNode.next || currentNode;
  }

  removeLast() {
    let currentNode = this.head;
    let parentNode = this.head;

    if (!currentNode.parent && !currentNode.next) {
      parentNode = null;
      this.head = null;
    } else {
      while (currentNode && currentNode.next) {
        parentNode = currentNode;
        currentNode = currentNode.next;
      }

      parentNode.next = null;
    }

    return parentNode;
  }

  getArrayOfNodes() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.add({ id: '111-eee', title: 'first' });
doublyLinkedList.add({ id: '222-eee', title: 'second' });
const lastAded = doublyLinkedList.add({ id: '333-eee', title: 'third' });
console.log(lastAded.parent.next.value);

console.log(doublyLinkedList.getArrayOfNodes());

console.log(doublyLinkedList.removeLast());
console.log(doublyLinkedList.getArrayOfNodes());
