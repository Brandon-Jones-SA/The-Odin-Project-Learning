let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.num');
let operatorButton = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equal');
let printButton = document.querySelector('.printButton');

let num1;
let operator;
let num2;
let num2true;
reset();
display.textContent = '';

function reset() {
  num1 = '';
  operator = '';
  num2 = '';
  num2true = false;
}

function calculator() {
  numberButtons.forEach((numberButtons) => {
    numberButtons.addEventListener('click', function () {
      if (num2true == false) {
        num1 = num1 + this.textContent;
        display.textContent = num1;
        console.log(num1);
      } else if (num2true == true) {
        num2 = num2 + this.textContent;
        display.textContent = num2;
        console.log(num2);
      }
    });
  });

  clear.addEventListener('click', function () {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
    console.log('Clear');
    console.log(num1, num2);
  });

  operatorButton.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function () {
      operator = operatorButton.textContent;
      num2true = true;
      display.textContent = operator;
      console.log(operator);
    });
  });

  equals.addEventListener('click', function () {
    let total = operate(num1, operator, num2);
    display.textContent = total;
    num1 = num2;
    num2 = '';
  });
}

function operate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return operator == '+'
    ? num1 + num2
    : operator == '-'
    ? num1 - num2
    : operator == '*'
    ? num1 * num2
    : operator == '/'
    ? num1 / num2
    : console.log('Not an operator');
}

printButton.addEventListener('click', function () {
  console.log(num1, typeof num1);
  console.log(operator, typeof operator);
  console.log(num2, typeof num2);
  console.log(num2true);
});
calculator();
