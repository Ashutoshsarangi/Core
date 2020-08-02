/**
 * @description this is a modular pattern;
 */
let localStorageName = 'userName';
let userName = localStorage.getItem(localStorageName);
let setUser = (name) => {
  document.querySelector("h1").textContent = `Welcome ${name} `;
}
(() => {
  if (userName) {
    setUser(userName);
  }
})();


let changeUser = () => {
  let name = prompt("Enter Your Name");
  if (name) {
    if (!(userName === name)) {
      localStorage.setItem(localStorageName, name);
      setUser(name);
    }
  }
}

// }

let changeImage = () => {
  let img = document.querySelector("img");
  if (img.getAttribute("src") == "asset/heart.jpg") {
    img.setAttribute("src", "asset/minion.jpg");
  } else {
    img.setAttribute("src", "asset/heart.jpg");
  }
  console.log();
}