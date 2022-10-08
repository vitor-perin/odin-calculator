//Elements
const currentOperation = document.querySelector('.current-operation');
const previousOperation = document.querySelector('.previous-operation');
const buttons = document.querySelectorAll('button');

let digit = null;

//Event listener
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if(+value >= 0 || value == '.'){
            if(currentOperation.textContent.includes('.') && value == '.') return;
            
            digit = value
            appendValue();
        }else {
            operationCheck(value);
        }
    })
})

//Append the value to the screen
function appendValue(operationValue = null, operator = null, current = null, previous = null) {
    if(operationValue === null){
        currentOperation.textContent += digit;
    } else{
        if(previous === 0){
            operationValue = current;
        }
        previousOperation.textContent = `${operationValue} ${operator}`;
            currentOperation.textContent = '';
    }
}

//Check type of operation
function operationCheck(operator) {
    if (currentOperation.textContent === '' && operator !== 'C') {
        if(previousOperation !== '') {
            changeOperator(operator);
        }
        return;
     }

    let operationValue;
    let previous = +previousOperation.textContent.split(' ')[0];
    let lastOperator = previousOperation.textContent.split(' ')[1];
    let current = +currentOperation.textContent;

    if (previousOperation.textContent.includes('=')) {
        previousOperation.textContent = `${currentOperation.textContent}`;
        currentOperation.textContent = '';
        previous = 0;
        }

    switch (operator) {
        case 'C':
            clear();
            break;
        case 'CE':
            clearCurrent();
            break;
        case '/':
            operationValue = previous / current;
            appendValue(operationValue, operator, current, previous);
            break;
        case '*':
            operationValue = previous * current;
            appendValue(operationValue, operator, current, previous);
            break;
        case '-':
            operationValue = previous - current;
            appendValue(operationValue, operator, current, previous);
            break;
        case '+':
            operationValue = previous + current;
            appendValue(operationValue, operator, current, previous);
            break;
        case '=':
            equalOperator(operator, lastOperator, current, previous);
            break;
        default:
            return;
    }
}

//Clear

function clear() {
    currentOperation.textContent = '';
    previousOperation.textContent = '';
}

function clearCurrent() {
    currentOperation.textContent = '';
}

//Change operator

function changeOperator(operator) {
    const operators = ['/', '*', '-', '+'];

    if(!operators.includes(operator)) {
        return;
    }
    previousOperation.textContent = previousOperation.textContent.slice(0, -1) + operator; 
}

//Equal operator

function equalOperator(operator, lastOperator, current, previous) {
    previousOperation.textContent = `${previous} ${lastOperator} ${current} ${operator}`;
    currentOperation.textContent = previous + current;
    switch (lastOperator) {  
        case '/':
            operationValue = previous / current;
            currentOperation.textContent = previous / current;
            break;
        case '*':
            operationValue = previous * current;
            currentOperation.textContent = previous * current;
            break;
        case '-':
            operationValue = previous - current;
            currentOperation.textContent = previous - current;
            break;
        case '+':
            operationValue = previous + current;
            currentOperation.textContent = previous + current;
            break;
        default:
            return;
    }
}