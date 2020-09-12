class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    /* If the stack is empty, then the node will be the top of the stack */
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }

    /* If the stack already has something, then create a new node,
      add data to the new node, and have the pointer point to the top */
    const node = new _Node(value, this.top);
    this.top = node;
  }

  pop() {
    const top = this.top;
    this.top = this.top.next; // Remove top from the stack

    return top;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return !!!this.top;
  }

  display() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

function testStack() {
  const myStack = new Stack();
  console.log("Is empty: " + myStack.isEmpty()); // true
  myStack.push("foo");
  console.log("Is empty: " + myStack.isEmpty()); // false

  console.log(myStack.peek()); // Node { value: 'foo', next: null }
  myStack.pop();
  console.log("Is empty: " + myStack.isEmpty()); // true
  myStack.push("");
}
testStack();

//  ***** check for palindromes using a stack *****

function is_palindrome(s) {
  // grab only characters from string and set to lower case
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const stack = new Stack(); // create new stack

  for (let char of s) {
    // iterate over s and push values into stack variable
    stack.push(char);
  }

  let sReversed = "";

  while (!stack.isEmpty()) {
    // move values from stack variable to sReversed
    sReversed += stack.pop().value;
  }

  // return boolean of whether value of s and sReversed are the equal
  return s === sReversed;
}

console.log(is_palindrome("dad")); // true
console.log(is_palindrome("A man, a plan, a canal: Panama")); // true
console.log(is_palindrome("1001")); // true
console.log(is_palindrome("Tauhida")); // false

// ***** Matching paraentheses in an expression *****

function parenthesesCheck(s) {
  const stack = new Stack();

  let openingIndex = [];
  let index = 0;

  for (let char of s) {
    if (char.match(/[(]/g)) {
      stack.push(char);
      openingIndex.push(index);
      console.log("stack length", stack._length);
    }

    if (char.match(/[)]/g)) {
      if (!stack.peek() || !stack.peek().value === "(") {
        return `Missing ( at index ${index}`;
      } else {
        stack.pop();
        openingIndex.pop();
      }
    }

    index++;
  }

  if (!stack.isEmpty()) {
    return `Missing ) at index ${opendingIndex[opendingIndex.length - 1]}`;
  }

  return "All parentheses are closed";
}

// ***** Sort Stack *****

function sortStack(stack) {
  const tempStack = new Stack();
  let temp;

  stack.display();

  temp = stack.pop().value;
  tempStack.push(temp);

  while (!stack.isEmpty()) {
    temp = stack.pop().value;
    while (tempStack.peek() && tempStack.peek().value < temp) {
      stack.push(tempStack.pop().value);
    }
    tempStack.push(temp);
  }

  tempStack.display();
  return tempStack;
}

function testSortStack() {
  const stack = new Stack();

  stack.push(34);
  stack.push(3);
  stack.push(31);
  stack.push(98);
  stack.push(92);
  stack.push(23);

  let sortedStack = sortStack(stack);
}
testSortStack();
