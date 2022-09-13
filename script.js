// ELEMENTS
const currentOperation = document.querySelector('.current-operation');
const previousOperation = document.querySelector('.previous-operation');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equal');

// Variables

let currentValue = null;
let signal = false;

// EVENT LISTENERS

equals.addEventListener('click', () => {
    
})

numbers.forEach ((number) => {
    number.addEventListener('click', () => {
        if(currentOperation.textContent.includes('.') && number.textContent == '.'){
            return;
        }
        currentOperation.textContent += number.textContent;
    })
})

operators.forEach ((operator) => {
    operator.addEventListener('click', () => {
        if (operator.textContent == 'C' && !(currentOperation.textContent == '')) {
            clearScreen();
        }
        if (currentOperation.textContent == '') {
            return;
        }
        if(!signal){
            valueSaving(currentOperation.textContent);
            signal = true;
        }
        currentOperation.textContent = `${currentValue} ${operator.textContent} `;
    })
})

// Value Saving

function valueSaving(value) {
    currentValue = value;
}

// clearScreen

function clearScreen() {
    currentOperation.textContent = '';
    previousOperation.textContent = '';
    signal = false;
    currentValue = null;
}