'use strict';
const calculator = {
  displayValue: '0',
  firstNumber: null,
  secondNumber: null,
  awaitingSecondNumber: false,
  operator: null,
};

//Hoisting
let result;
//Digit input event handler function
function inputDigit(digit) {
<<<<<<< HEAD
  if (result && calculator.awaitingSecondNumber === false) {
    reset();
  }
=======
>>>>>>> 8de57a81a0fa1b0c6ee1bbffbad10746b223dcbc
  const displayValue = calculator.displayValue;
  if (displayValue === result) {
    reset();
  } else {
    //const displayValue = calculator.displayValue;
    if (calculator.awaitingSecondNumber === true) {
      calculator.displayValue = digit;
      calculator.awaitingSecondNumber = false;
    } else {
      calculator.displayValue =
        displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
  }
}

//Decimal input event handler function
function inputDecimal(decimal) {
  if (!calculator.displayValue.includes(decimal)) {
    calculator.displayValue += decimal;
  }
}

function inputOperator(operator) {
  let { firstNumber, secondNumber } = calculator;
  if (operator === '=') {
    if (firstNumber) {
      secondNumber = parseFloat(calculator.displayValue);
      const result = evaluate(firstNumber, secondNumber, calculator.operator);
      calculator.displayValue = result;
      calculator.awaitingSecondNumber = false;
    }
    return;
  }
  //convert the string input to a floating point number
  const firstValue = parseFloat(calculator.displayValue);

  if (calculator.firstNumber === null && !isNaN(firstValue)) {
    calculator.firstNumber = firstValue;
  }
  if (calculator.operator === null) calculator.operator = operator;
  calculator.awaitingSecondNumber = true;
  console.log(calculator);
}

function evaluate(first, second, operator) {
  //let result;
  switch (operator) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '/':
      result = first / second;
      break;
    case '*':
      result = first * second;
      break;
  }
  if (!Number.isInteger(result)) {
    return result.toFixed(2);
  }
  return result;
}

function reset() {
  (calculator.displayValue = '0'),
    (calculator.firstNumber = null),
    (calculator.secondNumber = null),
    (calculator.awaitingSecondNumber = false),
    (calculator.operator = null);
}

//Update display function
function updateDisplay() {
  //grabbing the screen display
  const display = document.querySelector('.display');
  display.value = calculator.displayValue;
}

const calculatorkeys = document.querySelector('.button-container');

calculatorkeys.addEventListener('click', (event) => {
  //access the clicked element
  // const target = event.target;
  const { target } = event;
  //check if clicked element is a button, exit function if not
  if (!target.matches('button')) return;
  if (target.classList.contains('operator')) {
    inputOperator(target.value);
    //updateDisplay();
    updateDisplay();
    return;
  }
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('btn-clear')) {
    reset();
    updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});
