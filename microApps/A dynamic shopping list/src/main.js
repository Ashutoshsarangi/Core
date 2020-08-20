(function () {
  // alert(document.getElementById("listContainer").children.length);
  console.log(document.getElementById("listContainer").children.length);
})()
function addItem() {
  let listNameObj = document.getElementById("itemName");
  let name = listNameObj.value;

  let newLiNode = document.createElement('li');
  let buttonNode = document.createElement("button");
  let spanNode = document.createElement("span");
  spanNode.textContent = name;
  spanNode.style.marginRight = "5px";
  buttonNode.textContent = "Delete"
  newLiNode.appendChild(spanNode);
  newLiNode.appendChild(buttonNode);
  document.getElementById("listContainer").style.display = "block";
  document.getElementById("listContainer").appendChild(newLiNode);

  listNameObj.value = '';
  listNameObj.focus();

}
function handleDeleteItem(event) {
  let flag = confirm(`Do you want to Remove ${event.target.previousSibling.innerText} from your List`);
  if (flag) {
    document.getElementById("listContainer").removeChild(event.target.parentNode);
  }

}