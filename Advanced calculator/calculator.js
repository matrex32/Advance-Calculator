// Select the elements we will interact with
// Digits
let digit0 = document.querySelector('#digit0');
let digit1 = document.querySelector('#digit1');
let digit2 = document.querySelector('#digit2');
let digit3 = document.querySelector('#digit3');
let digit4 = document.querySelector('#digit4');
let digit5 = document.querySelector('#digit5');
let digit6 = document.querySelector('#digit6');
let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');
// Operations
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let equals = document.querySelector('#equals');
let result = document.querySelector('.result');

// Initialize global variables
// The two numbers involved in the operation
let firstNumber = 0;
let secondNumber = 0;
// A variable to indicate which number we are building
let startBuildingSecondNumber = false;
// The type of operation to be applied
let operation = '';

// Function that builds the numbers
function buildNumber(numberReceived) {
  if (startBuildingSecondNumber === false) {
    // Building the first number.
    firstNumber = firstNumber * 10 + numberReceived;
    // Displaying the number in the result area.
    result.innerHTML = firstNumber;
  } else {
    // Building the second number.
    secondNumber = secondNumber * 10 + numberReceived;
    result.innerHTML = secondNumber;
  }
}

// Function handling click on multiply
function handleMultiplyClick() {
  // Clicking on '*' starts building the second number and sets the operation to be executed.
  startBuildingSecondNumber = true;
  operation = 'multiply';
  // Display the operation in the result area.
  result.innerHTML = '*';
}

// Function handling click on add
function handleAddClick() {
  // Clicking on '+' starts building the second number and sets the operation to be executed.
  startBuildingSecondNumber = true;
  operation = 'add';
  // Display the operation in the result area.
  result.innerHTML = '+';
}

// Function handling click on subtract
function handleSubtractClick() {
  // Clicking on '-' starts building the second number and sets the operation to be executed.
  startBuildingSecondNumber = true;
  operation = 'subtract';
  // Display the operation in the result area.
  result.innerHTML = '-';
}

// Function handling click on equals
function handleEqualsClick() {
  // Clicking on '=', depending on the operation, the calculation is performed between the two numbers and the result is displayed.
  let operationResult;

  switch (operation) {
    case 'multiply':
      operationResult = firstNumber * secondNumber;
      break;

    case 'add':
      operationResult = firstNumber + secondNumber;
      break;

    case 'subtract':
      operationResult = firstNumber - secondNumber;
      break;

    default:
      operationResult = 'Unknown operation';
      break;
  }

  result.innerHTML = operationResult;

  // Reset initial values for multiple calculations.
  firstNumber = 0;
  secondNumber = 0;
  startBuildingSecondNumber = false;
  operation = '';
}

// When we click on a digit, we build a number, so we call the buildNumber function, to which we send the clicked digit as a parameter.
digit0.addEventListener('click', function () {
  buildNumber(0);
})
digit1.addEventListener('click', function () {
  buildNumber(1);
})
digit2.addEventListener('click', function () {
  buildNumber(2);
})
digit3.addEventListener('click', function () {
  buildNumber(3);
})
digit4.addEventListener('click', function () {
  buildNumber(4);
})
digit5.addEventListener('click', function () {
  buildNumber(5);
})
digit6.addEventListener('click', function () {
  buildNumber(6);
})
digit7.addEventListener('click', function () {
  buildNumber(7);
});
digit8.addEventListener('click', function () {
  buildNumber(8);
});
digit9.addEventListener('click', function () {
  buildNumber(9);
});

add.addEventListener('click', handleAddClick);

subtract.addEventListener('click', handleSubtractClick);

multiply.addEventListener('click', handleMultiplyClick);

equals.addEventListener('click', handleEqualsClick);
