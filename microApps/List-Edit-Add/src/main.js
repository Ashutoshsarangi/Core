let addList = () => {
  event.stopPropagation();
  let ulObj = document.getElementById("listItem");
  let listName = prompt('Enter A name');
  if (listName) {
    let node = document.createElement("li");
    let text = document.createTextNode(listName);
    node.appendChild(text);
    ulObj.appendChild(node);
  }
}
let editList = (e) => {
  console.log(e.target.id);
  let newName = prompt('Enter New Name');
  if (newName) {
    document.getElementById(e.target.id).textContent = newName;
  }
}