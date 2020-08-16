(function () {
  const URL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  fetch(URL).then((response) => {
    response.text().then((value) => {
      console.log(value)
    });
  });
  // let Value = await fetch(URL);
  // console.log(Value);
})()