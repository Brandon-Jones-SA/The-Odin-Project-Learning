//Create a calcullator.
//What needs to be done - operate - does the operation
//clear - clears the calculator
//Connect all buttons and the display div
//Get the first number and assign it to number 1
//Get the second number after an operator is pressed, and store the operator.
//Get the second number, and store it to number2
//When equal or another operator is pressed, get the result, and then store it in number 1 and display it
//Repeat when another operator is pressed
//Clear when the clear button is pressed

let numberButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equal');
let clearButton = document.querySelector('.clear');
let display = document.querySelector('.display');

let result = '';
let number = '';
let operator = '';
let firstOperator = true;
reset();

function reset() {
  result = '';
  number = '';
  operator = '';
  firstOperator = true;
  display.textContent = '';
}

function calculate(result, number, operator) {
  let num1 = Number(result);
  let num2 = Number(number);
  return operator == '+'
    ? String(num1 + num2)
    : operator == '-'
    ? String(num1 - num2)
    : operator == '/'
    ? String(num1 / num2)
    : operator == '*'
    ? String(num1 * num2)
    : alert('Not an operator');
}

function calculator() {
  //get the numbers when pressed, and store them in either result(1st number) or number(2nd number)
  numberButtons.forEach((numberButtons) => {
    numberButtons.addEventListener('click', function () {
      if (firstOperator) {
        result = result + this.textContent;
        display.textContent = result;
      } else if (!firstOperator) {
        number = number + this.textContent;
        display.textContent = number;
      }
    });
  });
  //listen for equal click, if first number then do nothing, if secind then store the operator, run the calculate function, and store the result in result and clear number
  equalsButton.addEventListener('click', function () {
    if (firstOperator) {
      alert('Only one number entered');
    } else if (!firstOperator) {
      let temp = calculate(result, number, operator);
      result = temp;
      display.textContent = result;
      number = '';
      operator = '';
    }
  });
}

operatorButtons.forEach((operatorButtons) => {
  operatorButtons.addEventListener('click', function () {
    if (firstOperator) {
      operator = this.textContent;
      display.textContent = operator;
      firstOperator = false;
    } else if (!firstOperator) {
      if (operator == '') {
        operator = this.textContent;
        display.textContent = operator;
      } else if (operator != '') {
        let temp = calculate(result, number, operator);
        result = temp;
        number = '';
        operator = this.textContent;
        display.textContent = operator;
      }
    }
  });
});

clearButton.addEventListener('click', reset);

calculator();
