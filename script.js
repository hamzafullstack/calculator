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
let percentageApplied = false;

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
    // if operator clicked (-+*/)
   }else if(button.dataset.operator !== undefined) {
    firstNumber = Number(currentNumber);
    operator = button.dataset.operator;
    currentNumber = '';
    display.value = `${firstNumber} ${operator} ${currentNumber}`;
    // for action like (=)
   }else if(button.dataset.action === 'equals') {
    if(percentageApplied === true) {
        secondNumber = result;
        display.value = secondNumber;
        percentageApplied = false;
    }else{
    secondNumber = Number(currentNumber);
    result = operate(firstNumber, secondNumber, operator);
    display.value = result;
    }
    // for Clear display screen and state variables data.
   }else if(button.dataset.action === 'clear') {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentNumber = '';
    result = null;
    percentageApplied = false;
    display.value = '';
   }else if(button.dataset.action === 'delete') {
    
    if(currentNumber !== '') {
        currentNumber = currentNumber.slice(0, -1);
        display.value = currentNumber;
    }else if(operator !== null && operator !== '') {
        operator = null;
        display.value = firstNumber;
    }else if(firstNumber !== null && firstNumber !== '') {
        let firstNumStr = firstNumber.toString().slice(0, -1);
        firstNumber = firstNumStr !== '' ? Number(firstNumStr) : null;
        display.value = firstNumStr;
    }

   }else if(button.dataset.action === 'percentage') {

    if(firstNumber !== null && operator !== null){
        if(operator === '*'){
            result = firstNumber * (currentNumber / 100);
            percentageApplied = true;
            display.value = result;
        }else if (operator === '+'){
            result = firstNumber + (firstNumber * (currentNumber / 100));
            percentageApplied = true;
            display.value = result;
        }else if(operator === '-') {
            result = firstNumber - (firstNumber * (currentNumber / 100));
            percentageApplied = true;
            display.value = result;
        }else if(operator === '/'){
            let result = firstNumber / (currentNumber / 100);
            percentageApplied = true;
            display.value = result;
        }
    }

   }
  
}

//listener
buttonContainer.addEventListener('click', handleButtonClick);



