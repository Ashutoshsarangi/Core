(function () {
  // This is Similar to Document.ready
  let x = new customerViewMal();
  // x.test
})()

// Here The Bellow Function is going to
// Constructor Pattern
function customerViewMal() {
  // this.
}

function handleNavigation(event) {
  let id = event.target.dataset.bind
  let allSections = document.getElementsByClassName("section");
  console.log(allSections);
  for (let item of allSections) {
    item.classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
}