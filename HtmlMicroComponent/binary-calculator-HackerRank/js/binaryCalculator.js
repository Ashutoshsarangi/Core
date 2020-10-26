let arr = ['+', '-', '*', '/']
function calculatorHandler(event) {
  let resultObj = document.getElementById('res');
  let preValue = resultObj.innerText;
  let operator = '';
  switch (event.target.id) {
    case 'btnClr':
      resultObj.textContent = '';
      break;
    case 'btn0':
      resultObj.textContent = preValue + '0';
      break;
    case 'btn1':
      resultObj.textContent = preValue + '1';
      break;
    case 'btnSum':
      resultObj.textContent = preValue + '+';
      break;
    case 'btnSub':
      resultObj.textContent = preValue + '-';
      break;
    case 'btnMul':
      resultObj.textContent = preValue + '*';
      break;
    case 'btnDiv':
      resultObj.textContent = preValue + '/';
      break;
    case 'btnEql':
      for (let i = 0; i < arr.length; i++) {
        if (preValue.indexOf(arr[i]) >= 0) {
          operator = arr[i];
        }
      }
      console.log(operator);
      document.getElementById('res').textContent = calculate(preValue, operator);
  }

}
function calculate(preValue, operator) {
  let operands = preValue.split(operator);
  console.log(operands);
  let a = parseInt(operands[0], 2);
  let b = parseInt(operands[1], 2);
  let result = '';
  switch (operator) {
    case '+':
      result = (a + b).toString(2);
      break;
    case '*':
      result = (a * b).toString(2);
      break;
    case '-':
      result = (a - b).toString(2);
      break;
    case '/':
      result = (a / b).toString(2);
      break;
  }
  console.log(result);
  return result;
}