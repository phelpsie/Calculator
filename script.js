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

//Event Listeners
//Query Selectors

let display = document.querySelector('.display');

//First Row:...
let clearBtn = document.querySelector('.clear');
let plusminusBtn = document.querySelector('.plus-minus');
let percentBtn = document.querySelector('.percent');
let divideBtn = document.querySelector('.divide');

//Second Row:...
let sevenBtn = document.querySelector('.seven');
let eightBtn = document.querySelector('.eight');
let nineBtn = document.querySelector('.nine');
let multiplyBtn = document.querySelector('.multiply');

//Third Row:...
let fourBtn = document.querySelector('.four');
let fiveBtn = document.querySelector('.five');
let sixBtn = document.querySelector('.six');
let minusBtn = document.querySelector('.minus');

//Fourth Row:...
let oneBtn = document.querySelector('.one');
let twoBtn = document.querySelector('.two');
let threeBtn = document.querySelector('.three');
let addBtn = document.querySelector('.add');

//Fifth Row:...
let zeroBtn = document.querySelector('.zero');
let decimalBtn = document.querySelector('.decimal');
let equalsBtn = document.querySelector('.equals');





