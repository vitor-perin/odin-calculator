//Elements
const currentOperation = document.querySelector('.current-operation');
const previousOperation = document.querySelector('.previous-operation');
const buttons = document.querySelectorAll('button');


//Event listener
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if(+value >= 0 || value == '.'){
            if(currentOperation.textContent.includes('.') && value == '.') return;
            appendValue(value);
        }else {
            operation(value);
        }
    })
})

//Append the value to the screen
function appendValue(value) {
    currentOperation.textContent += value;
}

//Check type of operation
function operation(value) {
    switch (value) {
        case ('C'):
            clearScreen();
            break;
        
        case ('CE'):
            
        default:
            break;
    }
}

//Clear Screen

function clearScreen() {
    currentOperation.textContent = '';
    previousOperation.textContent = '';
}
