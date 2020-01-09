// check if palindrome?

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const palindrome = list => {
  const stack = [];
  let current = list;
  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] !== stack[stack.length-1-i]) return false;
  }
  return true;
}