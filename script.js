// Starting with the name of ALLAH. Who is most kind and most merciful.

// DOM References.
const display = document.querySelector('#display');
const buttonContainer = document.querySelector('#buttons');

// Calculator state Variables
let firstNumber = null;
let operator = null;
let secondNumber = null;
let currentNumber = '';
let result = null;

// Addition function
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

// subtract function.
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

// multiply function
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}


// divide Function.
function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

// operate function 
function operate(numOne, numTwo, operation) {
    // The switch statement to route the parameters to the correct function
    switch(operation) {
        case '+':
            return add(numOne, numTwo);
            case '-':
                return subtract(numOne, numTwo);
            case '*':
                 return multiply(numOne, numTwo);
            case '/':
                return divide(numOne, numTwo);
                default:
                     return 'Invalid Operation.!';

    }
}


// Input Digit Function And State Management.
function handleButtonClick(event) {
   const button = event.target.closest('button');
   if(!button) {
    return;
   }
   // if number clicked.
   if(button.dataset.value !== undefined) {
    currentNumber += button.dataset.value;
    display.value = currentNumber;
   }else if(button.dataset.operator !== undefined) { // if operator clicked (-+*/)
    firstNumber = Number(currentNumber);
    operator = button.dataset.operator;
    currentNumber = '';
    display.value = `${firstNumber} ${operator} ${currentNumber}`;
   }else if(button.dataset.action === 'equals') { // for action like (=)
    secondNumber = Number(currentNumber);
    result = operate(firstNumber, secondNumber, operator);
    display.value = result;
    // for Clear display screen and state variables data.
   }else if(button.dataset.action === 'clear') {
    // state-reinitialization pattern
    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentNumber = '';
    result = null;
    display.value = '';
   }else if(button.dataset.action === 'delete') {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
   }
  
}

//listener
buttonContainer.addEventListener('click', handleButtonClick);



