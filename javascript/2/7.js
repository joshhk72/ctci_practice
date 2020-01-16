// intersection of linked lists?

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const intersection = (list1, list2) => {
  let curr1 = list1;
  let curr2 = list2;
  
  while (curr2) {
    if (curr1 === curr2) return curr1;
    
  }
}