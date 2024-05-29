let displayValue;


//Calculator Equation Variables
let firstOperand;
let operator;
let secondOperand;


//Calculation Functions
function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let a = 10;
let b = 5;

console.log(add(a,b), subtract(a,b), multiply(a,b), divide(a,b));

//Operate Function
function operate(operator, firstOperand, secondOperand) {
    if (operator === '+') {
        return add(firstOperand, secondOperand);
    } else if (operator === '-') {
        return subtract(firstOperand, secondOperand);
    } else if (operator === '*') {
        return multiply(firstOperand, secondOperand);
    } else return divide(firstOperand, secondOperand);
    }

console.log(operate('-', 10, 20));


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

clearBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "";
    console.log(displayValue);
})

//...
sevenBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "7";
    console.log(displayValue);
})

eightBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "8";
    console.log(displayValue);
})

nineBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "9";
    console.log(displayValue);
})

multiplyBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "x";
    console.log(displayValue);
})

//...
fourBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "4";
    console.log(displayValue);
})

fiveBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "5";
    console.log(displayValue);
})

sixBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "6";
    console.log(displayValue);
})

subtractBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "-";
    console.log(displayValue);
})

//...
oneBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "1";
    console.log(displayValue);
})

twoBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "2";
    console.log(displayValue);
})

threeBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "3";
    console.log(displayValue);
})

addBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "+";
    console.log(displayValue);
})

//...
zeroBtn.addEventListener('click', function() {
    let displayValue = display.textContent = "0";
    console.log(displayValue);
})

decimalBtn.addEventListener('click', function() {
    let displayValue = display.textContent = ".";
    console.log(displayValue);
})






