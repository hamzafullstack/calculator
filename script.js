// Starting with the name of ALLAH. Who is most kind and most merciful.

// DOM References.
const display = document.querySelector('#display');
const buttonContainer = document.querySelector('#buttons');

// Calculator state Variables
let firstNumber = null;
let operator = null;
let secondNumber = null;
let currentNumber = '';

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
        case 'add':
            return add(numOne, numTwo);
            case 'subtract':
                return subtract(numOne, numTwo);
            case 'multiply':
                 return multiply(numOne, numTwo);
            case 'divide':
                return divide(numOne, numTwo);
                default:
                     return 'Invalid Operation.!';
    }
}


// input Digit function.
function inputGigit(event) {
   const button = event.target.closest('button');
   if(!button) {
    return;
   }
   if(button.dataset.value !== undefined) {
    currentNumber += button.dataset.value;
    display.value = currentNumber;
   }
}

//listener
buttonContainer.addEventListener('click', inputGigit);

