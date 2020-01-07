// this part is copied
var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

// solutions are not copied
const deleteMidNode = node => {
  let current = node;
  while (current && current.next) {
    current.value = current.next.value;
    if (current.next.next === null) current.next = null;
    current = current.next;
  }
}



/* TEST */
// Test is copied!
var printList = function (head) {
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
deleteMidNode(c);
printList(a);