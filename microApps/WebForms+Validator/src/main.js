(function () {
  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  dd = dd < 10 ? '0' + dd : dd;
  mm = mm < 10 ? '0' + mm : mm;
  let today = `${yyyy}-${mm}-${dd}`;
  document.getElementById("userDOB").setAttribute("max", today);
})()
function formValidator(event) {
  console.log(event);
  let name = event.target.dataset.bind;
  let flag = false;
  switch (name) {
    case 'name':
      // call a function from Validator plugin
      flag = nameValidator(event.target.value);
      if (flag) {
        successHandler(event);
      } else {
        let msg = "Enter a valid Name";
        errorHandler(event, msg);
      }
      break;
    case 'email':
      // call a function from Validator plugin
      flag = emailValidator(event.target.value);
      if (flag) {
        successHandler(event);
      } else {
        let msg = "Enter a valid Email";
        errorHandler(event, msg);
      }
      break;
    case 'date':
      // call a function from Validator plugin
      let minAge = 18;
      flag = ageRestriction(event.target.value, minAge);
      if (flag) {
        successHandler(event);
      } else {
        let msg = "Your Age Should Be more than " + minAge;
        errorHandler(event, msg);
      }
      break;
    case 'password':
      // call a function from Validator plugin
      flag = nameAlphaNumericValidator(event.target.value);
      if (flag) {
        successHandler(event);
      } else {
        let msg = "Your Password Should Be Alpha Numeric";
        errorHandler(event, msg);
      }
      break;
    case 'confPassword':
      // call a function from Validator plugin
      flag = nameAlphaNumericValidator(event.target.value);
      if (flag) {
        successHandler(event);
      } else {
        let msg = "Your Password Should Be Alpha Numeric";
        errorHandler(event, msg);
      }
      flag = matchPasswordAndConfPassword(document.getElementById("userPassword").value, event.target.value);
      if (flag) {
        successHandler(event);
      } else {
        let msg = "Your Password Should match with Confirm Password";
        errorHandler(event, msg);
      }
      break;
  }
}
function successHandler(event) {
  resetClassHandler(event);
  const inputId = event.target.id;
  const iconId = event.target.dataset.iconid;
  document.getElementById(inputId).classList.add("successBorder");
  document.getElementById(iconId).classList.add("fa-check");
  document.getElementById(iconId).classList.add("successIcon");

}
function errorHandler(event, msg) {
  resetClassHandler(event);
  const inputId = event.target.id;
  const iconId = event.target.dataset.iconid;
  const errorId = event.target.dataset.errorid;

  document.getElementById(inputId).classList.add("errorBorder");
  document.getElementById(iconId).classList.add("fa-exclamation");
  document.getElementById(iconId).classList.add("errorIcon");
  document.getElementById(errorId).classList.add("errorMessage");
  document.getElementById(errorId).textContent = msg;
}

function resetClassHandler(event) {
  const inputId = event.target.id;
  const iconId = event.target.dataset.iconid;
  const errorId = event.target.dataset.errorid;

  document.getElementById(inputId).classList.remove("successBorder");
  document.getElementById(inputId).classList.remove("errorBorder");

  document.getElementById(iconId).classList.remove("fa-check");
  document.getElementById(iconId).classList.remove("successIcon");
  document.getElementById(iconId).classList.remove("fa-exclamation");
  document.getElementById(iconId).classList.remove("errorIcon");
  document.getElementById(errorId).classList.remove("errorMessage");
  document.getElementById(errorId).textContent = "";
}