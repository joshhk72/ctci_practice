var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

var printList = function (a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

const sumListHelper = (node1, node2, carry=0) => {
  if (!node1 && !node2 && carry === 0) {
    return null
  }

  let value = carry;
  value += node1 ? node1.value : 0;
  value += node2 ? node2.value : 0;
  const node = new LinkedList(value % 10)
  node.next = sumListHelper(
    node1 ? node1.next : null,
    node2 ? node2.next : null,
    value > 10 ? 1 : 0)
  return node
}

const sumList = (head1, head2) => {
  let dig1 = 0;
  let dig2 = 0;

  let current1 = head1;
  let current2 = head2;

  while (current1) {
    dig1++;
    current1 = current1.next;    
  }

  while (current2) {
    dig2++;
    current2 = current2.next;
  }

  // get lists to same length;

  while (dig1 !== dig2) {
    let newHead = new LinkedList(0);
    if (dig1 > dig2) {
      newHead.next = head2;
      head2 = newHead;
      dig2++;
    } else {
      newHead.next = head1;
      head1 = newHead
      dig1++;
    }
  }

  return sumListHelper(head1, head2);
}

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 9. the answer refers to 1612

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);