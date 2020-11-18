let root = {
  data: 4,
  next: {
    data: 5,
    next: {
      data: 7,
      next: null
    }
  }
}
// traverse Linked List
// let head = JSON.parse(JSON.stringify(root));
// while (head) {
//   console.log(head.data);
//   head = head.next;
// }
// Insert an Element
let head = root;
while (head) {
  if (head.next == null) {
    head.next = { data: 11, next: null };
    break;
  }
  head = head.next;
}
console.log('Root', JSON.stringify(root));
