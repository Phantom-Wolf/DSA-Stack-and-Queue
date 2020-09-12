class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  if (queue.first === null) {
    return true;
  }
  return false;
}

function display(queue) {
  let currentNode = queue.first;

  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

const starTrek = new Queue();

starTrek.enqueue("Kirk");
starTrek.enqueue("Spock");
starTrek.enqueue("Uhara");
starTrek.enqueue("Sulu");
starTrek.enqueue("Checkov");

starTrek.dequeue();
starTrek.dequeue();
display(starTrek);

// ***** create a queue class using doubly linked list *****

class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new Node(data, this.last);
    if (this.last) {
      this.last.next = node;
    }
    if (this.first === null) {
      this.first = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return "The queue is empty";
    }
    const result = this.first.value;
    this.first = this.first.next || null;
    this.first.prev = null;

    return result;
  }
}

// ***** Queue implementation using a stack *****

// Push things onto one stack when you enqueue
// When you dequeue, pop things off the first stack and push them onto the second stack to reverse the order


// ****** The Ophidian Bank *****

function ophidianBank() {
  const bank = new Queue

  bank.lineDequeue = function() {
    let hasProperPaperwork = (Math.floor(Math.random() * 100) + 1) > 25 ? true : false;

    if (hasProperPaperwork) {
      bank.dequeue()
    } else {
      let customer = bank.dequeue()
      bank.enqueue(customer)
    }
  }
}
