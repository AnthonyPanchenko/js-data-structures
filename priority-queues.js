// We can design a priority queue using two approaches in the first case we can add the queue element at the end of the queue
// and we can remove the elements of the queue depending on the priority.
// In the second case we can add elements to the queue according to the priority and remove them from the front of the queeue.

// Priority Queue (second approach).

// to store element and its priority
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// PriorityQueue class
class PriorityQueue {

  // An array is used to implement priority
  constructor() {
    this.items = [];
  }

  // enqueue function to add element to the queue as per priority
  enqueue(element, priority) {
    // creating object from queue element
    const qElement = new QElement(element, priority);
    let contain = false;

    // iterating through the entire item array to add element at the correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Once the correct location is found it is enqueued
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    // if the element have the highest priority it is added at the end of the queue
    if (!contain) {
      this.items.push(qElement);
    }
  }

  // dequeue method to remove element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    return this.items.shift();
  }

  // returns the highest priority element in the Priority queue without removing it.
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }

    return this.items[0];
  }

  // returns the lowest priorty element of the queue
  rear() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }

    return this.items[this.items.length - 1];
  }

  // return true if the queue is empty.
  isEmpty() {
    return this.items.length == 0;
  }

  // prints all the element of the queue
  printPQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + " ";
    }

    return str;
  }
}

const priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("Name_1", 2);
priorityQueue.enqueue("Name_2", 1);
priorityQueue.enqueue("Name_3", 1);
priorityQueue.enqueue("Name_4", 2);
priorityQueue.enqueue("Name_5", 3);

console.log(priorityQueue.printPQueue());

console.log(priorityQueue.front().element);

console.log(priorityQueue.rear().element);

console.log(priorityQueue.dequeue().element);

priorityQueue.enqueue("Name_6", 2);

console.log(priorityQueue.printPQueue());