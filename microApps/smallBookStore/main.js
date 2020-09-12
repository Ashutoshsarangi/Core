function submitForm(event) {
  event.preventDefault();
  let email = document.getElementById('exampleInputEmail1').value;
  let password = document.getElementById('exampleInputPassword1').value;
  console.log(email, password);

  if (email === 'adi@gmail.com' && password === "adi") {
    alert('inside');
    location.href = 'booklist.html';
  }
}