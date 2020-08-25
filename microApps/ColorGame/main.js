function codeHandler() {
  resetColors();
  let temp = document.getElementById("code").value;
  if (temp > 0 && temp < 10) {
    document.getElementById(temp).style.background = "red";
  } else {
    document.getElementById("errorCode").textContent = "Please Enter a Number between 1 - 9";
  }
  document.getElementById("code").value = "";
}

function resetColors() {
  let allDiv = document.getElementsByClassName("btn");
  for (let item of allDiv) {
    item.style.background = "white";
  }
}