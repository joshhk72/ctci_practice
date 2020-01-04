// linkedList is copied! Tests are copied! solution is not...
var linkedList = function (value) {
  this.value = value;
  this.next = null;
};

const findKthToLast = (k, head) => {
  let current = head;
  let length = 0;

  while (current) {
    current = current.next;
    length++;
  }

  if (k < 0) return null;
  if (k > length - 1) return null;
  if (k === length - 1) return head;
  current = head;
  for (let i = 0; i < length - 1 - k; i++) {
    current = current.next;
  }

  console.log(current.value);
  return current;
}

/* TESTS */
var a = new linkedList('1');
var b = new linkedList('2');
var c = new linkedList('3');
var d = new linkedList('4');
var e = new linkedList('5');
var f = new linkedList('6');
var g = new linkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);

findKthToLast(10, a);

findKthToLast(-1, a);

findKthToLast(0, a);

findKthToLast(1, a);