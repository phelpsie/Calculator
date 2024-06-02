//Calculator Equation Variables
let firstOperand;
let operator;
let secondOperand;


//Calculation Functions
function add(a, b) {
    return (a + b).toFixed(3);
}

function subtract(a,b) {
    return (a - b).toFixed(3);
}

function multiply(a,b) {
    return (a * b).toFixed(3);
}

function divide(a,b) {
    if(b === 0) {
        return "nope";
    }
    return (a / b).toFixed(3);
}

//Operate Function
function operate() {
    if (operator === '+') {
        return (add(Number(firstOperand), Number(secondOperand)));
    } else if (operator === '-') {
        return (subtract(Number(firstOperand), Number(secondOperand)));
    } else if (operator === '*') {
        return (multiply(Number(firstOperand), Number(secondOperand)));
    } else return (divide(Number(firstOperand), Number(secondOperand)));
    }


//Query Selectors

let display = document.querySelector('.display');


let clearBtn = document.querySelector('.clear');
let plusminusBtn = document.querySelector('.plus-minus');
let percentBtn = document.querySelector('.percent');
let divideBtn = document.querySelector('.divide');


let sevenBtn = document.querySelector('.seven');
let eightBtn = document.querySelector('.eight');
let nineBtn = document.querySelector('.nine');
let multiplyBtn = document.querySelector('.multiply');


let fourBtn = document.querySelector('.four');
let fiveBtn = document.querySelector('.five');
let sixBtn = document.querySelector('.six');
let subtractBtn = document.querySelector('.subtract');


let oneBtn = document.querySelector('.one');
let twoBtn = document.querySelector('.two');
let threeBtn = document.querySelector('.three');
let addBtn = document.querySelector('.add');


let zeroBtn = document.querySelector('.zero');
let decimalBtn = document.querySelector('.decimal');
let equalsBtn = document.querySelector('.equals');



//Event Listeners

//Top to Bottom:...
clearBtn.addEventListener('click', function() {
     location.reload();
})

divideBtn.addEventListener('click', function () {
    if(secondOperand !== undefined) {
        display.textContent = operate();
        firstOperand = operate();
        secondOperand = undefined;
    }
    operator = '/';
})

//...
sevenBtn.addEventListener('click', function() {
    if(operator === undefined) {
       firstOperand = display.textContent += 7;
    } else {
        display.textContent = secondOperand;
        secondOperand = display.textContent += 7;
    }
})

eightBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 8;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 8;
     }
})

nineBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 9;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 9;
     }
})

multiplyBtn.addEventListener('click', function() {
    if(secondOperand !== undefined) {
        display.textContent = operate();
        firstOperand = operate();
        secondOperand = undefined;
    }
    operator = '*';
})

//...
fourBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 4;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 4;
     }
})

fiveBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 5;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 5;
     }
})

sixBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 6;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 6;
     }
})

subtractBtn.addEventListener('click', function() {
    if(secondOperand !== undefined) {
        display.textContent = operate();
        firstOperand = operate();
        secondOperand = undefined;
    }
    operator = '-';
})

//...
oneBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 1;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 1;
     }
})

twoBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 2;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 2;
     }
})

threeBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 3;
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 3;
     }
})

addBtn.addEventListener('click', function() {
    if(secondOperand !== undefined) {
        display.textContent = operate();
        firstOperand = operate();
        secondOperand = undefined;
    }
    operator = '+';
})

//...
zeroBtn.addEventListener('click', function() {
    if(operator === undefined) {
        if(firstOperand === undefined || firstOperand === 0) {
            firstOperand = display.textContent = 0;
        } else {
            firstOperand = display.textContent += 0;
        }
     } else {
        if(secondOperand === undefined || secondOperand === 0) {
            secondOperand = display.textContent = 0;
        } else {
            secondOperand = display.textContent += 0;
        }
     }
})

decimalBtn.addEventListener('click', function() {
    if(operator === undefined) {
        if(secondOperand === undefined && !display.textContent.includes('.'))
        firstOperand = display.textContent += '.';
     } else {
        if(!display.textContent.includes('.'))
            secondOperand = display.textContent += '.';
        }
     }
    );

equalsBtn.addEventListener('click', function () {
    display.textContent = operate();
});