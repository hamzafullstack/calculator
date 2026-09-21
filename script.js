// Starting with the name of ALLAH. Who is most kind and most merciful.

// DOM References.
const display = document.querySelector('#display');
const buttonContainer = document.querySelector('#buttons');

// Calculator state Variables
let firstNumber = null;
let operator = null;
let secondNumber = null;

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
    if(event.target.tagName === 'BUTTON') {
        // 1 reads and stores the value in State Variable
        firstNumber = event.target.dataset.value;
        // 2 displays the value at calculators screen.
        display.value = firstNumber;

        // testing
        console.log(firstNumber);
    }
}

//listener
buttonContainer.addEventListener('click', inputGigit);

