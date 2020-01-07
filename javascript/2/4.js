var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const partition = (node, val) => {
  let head = node;
  let tail = node;

  let current = node.next;

  while (current) {
    if (current.value < val) {
      let temp = current.next;
      current.next = head;
      head = current;
      current = temp;
    } else {
      tail.next = current;
      tail = current;
      current = current.next;
    }
  }
  tail.next = null;
  return head;
}


/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printList(newa);