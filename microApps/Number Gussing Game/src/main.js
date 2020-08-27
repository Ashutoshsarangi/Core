let randomNumber = Math.round(Math.random() * 100);
// let formObj = document.getElementById("myForm");
let n = 5;
let count = 0;
let submitGuess = () => {
  console.log(randomNumber);
  if (count < n) {
    count += 1;
    let Obj = document.getElementById("guessNumber");
    Obj.value = '';
    appendNumber(num);
    //   if (num > randomNumber) {
    //     document.getElementById("message").textContent = "Number is too large";
    //   }
    //   else if (num < randomNumber) {
    //     document.getElementById("message").textContent = "Number is too Small";
    //   }
    //   else {
    //     document.getElementById("finalMessage").textContent = "Congratulation you Own the game";
    //     document.getElementById("finalMessage").style.background = "green";
    //     // setTimeout(() => {
    //     //   newGame();
    //     // }, 1000);
    //   }
    // } else {
    //   document.getElementById("finalMessage").textContent = "You Loose the game";
    //   document.getElementById("finalMessage").style.background = "red";
    //   // newGame();
    // }
  }
}

let appendNumber = (num) => {
  let newSpan = document.createElement("span");
  newSpan.textContent = num + " ";
  document.getElementById("numList").appendChild(newSpan);
}
let newGame = () => {
  count = 0;
  randomNumber = Math.round(Math.random() * 100);
  let val = confirm('Do you want to play Again');
  if (val) {
    formObj.elements.guessNumber.value = '';
    document.getElementById("finalMessage").textContent = '';
  }
}