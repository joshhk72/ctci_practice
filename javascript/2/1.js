// simple node class to get it started

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDups = head => {
  let slow = head;
  let fastPrev = head;
  let fast = head.next;
  let slowMove = false;

  while (slow && slow.next) {
    if (slow.value === fast.value) {
      fastPrev.next = fast.next;
    } else {
      if (slowMove) {
        slow = slow.next;
      }
    }
    fastPrev = fast.next ? fast : slow;
    fast = fast.next ? fast.next : slow.next;
    slowMove = !slowMove;
  }
}

// copied printedLinkedList from https://github.com/careercup/CtCI-6th-Edition-JavaScript/
var printLinkedList = function (head) {
  var node = head;
  console.log('start of linked list');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('end of linked list');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('g');
var i = new LinkedList('g');
var j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);