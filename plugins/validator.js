let numberValidator = (num) => {
  num.forEach((item) => {
    if (!item.parseInt() >= 0) {
      return false;
    }
  });
  return true;
}
let nameValidator = (name) => {
  let regExpression = /^[a-zA-Z ]{2,30}$/;
  let t = regExpression.test(name);
  console.log(t);
  return t;
}

let emailValidator = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
let ageRestriction = (date, minAge) => {
  console.log(new Date());
  console.log(new Date(date));
  let ageInMs = new Date() - new Date(date);
  let age = (ageInMs / (1000 * 3600 * 24 * 30 * 12)).toFixed();
  if (age >= minAge) {
    return true;
  } else {
    return false;
  }
}

let nameAlphaNumericValidator = (name) => {
  var letter = /[a-zA-Z]/;
  var number = /[0-9]/;
  var valid = number.test(name) && letter.test(name); //match a letter _and_ a number
  return valid;
}

let matchPasswordAndConfPassword = (password, confPassword) => {
  if (password === confPassword) {
    return true;
  }
  else {
    return false;
  }
}