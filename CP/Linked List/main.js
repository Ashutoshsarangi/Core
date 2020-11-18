function Node(item) {
  this.data = item;
  this.next = null;
  return this;
}
function LinkedList() {

  this.linkedList = null; // This Is Where we are going to store out Value
  let head = null; // This Would be the Pointer

  // Add new Item to Linked List
  this.addElement = (data) => {
    let newNode = new Node(data);
    head = this.linkedList; // This Is For Update the List
    if (!head) {
      this.linkedList = newNode; // This Must be done to start the Linked List Else It Will not Work
    }
    else {
      while (head) {
        if (head.next === null) {
          head.next = newNode;
          break;
        }
        head = head.next;
      }
    }
  }

  /**
   * @description This Functionality is responsible for Traverse the Linked List;
   */
  this.traverse = () => {
    let head = JSON.parse(JSON.stringify(this.linkedList));
    while (head) {
      console.log(head.data);
      head = head.next;
    }
  }
  this.popElement = () => {
    let head = this.linkedList;
    while (head) {
      if (head.next == null) {
        head.next = null;
        break;
      }
      head = head.next;
    }
    console.log(head, this.linkedList);
  }
}

let ll = new LinkedList();

ll.addElement(4);
ll.addElement(3);
ll.addElement(9);
ll.addElement(1);
ll.traverse();
ll.popElement();
ll.popElement();
ll.traverse();

