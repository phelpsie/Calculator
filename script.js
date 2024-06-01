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

//Operate Function
function operate() {
    if (operator === '+') {
        display.textContent = (add(Number(firstOperand), Number(secondOperand)));
    } else if (operator === '-') {
        display.textContent = (subtract(Number(firstOperand), Number(secondOperand)));
    } else if (operator === '*') {
        display.textContent = (multiply(Number(firstOperand), Number(secondOperand)));
    } else display.textContent = (divide(Number(firstOperand), Number(secondOperand)));
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

//if display = "", firstOperand = display.textContent += ...
// else if (operator !== undefined) secondOperand = display.textContent += ...

//FOR OPERATORS, do operator variable assignment only, dont update the display

//Equals calls the Operate function with standard params

//Top to Bottom:...
clearBtn.addEventListener('click', function() {
     location.reload();
})

divideBtn.addEventListener('click', function () {
    operator = '/';
    console.log(operator);
})

//...
sevenBtn.addEventListener('click', function() {
    if(operator === undefined) {
       firstOperand = display.textContent += 7;
        console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
    } else {
        display.textContent = secondOperand;
        secondOperand = display.textContent += 7;
        console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
    }
})

eightBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 8;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 8;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

nineBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 9;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 9;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

multiplyBtn.addEventListener('click', function() {
    operator = '*';
    console.log(operator);
})

//...
fourBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 4;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 4;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

fiveBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 5;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 5;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

sixBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 6;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 6;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

subtractBtn.addEventListener('click', function() {
    operator = '-';
    console.log(operator);
})

//...
oneBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 1;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 1;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

twoBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 2;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 2;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

threeBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 3;
         console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
         display.textContent = secondOperand;
         secondOperand = display.textContent += 3;
         console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

addBtn.addEventListener('click', function() {
    operator = '+';
    console.log(operator);
})

//...
zeroBtn.addEventListener('click', function() {
    if(operator === undefined) {
        firstOperand = display.textContent += 0;
        console.log(`first try: ${firstOperand.trim()} and ${secondOperand}`);
     } else {
        display.textContent = secondOperand;
        secondOperand = display.textContent += 0;
        console.log(`second try: ${firstOperand.trim()} and ${secondOperand}`);
     }
})

decimalBtn.addEventListener('click', function() {
    if (!display.textContent.includes('.')) {
        let displayValue = display.textContent += ".";
    } else return displayValue;
    console.log(displayValue);
})

equalsBtn.addEventListener('click', operate);



//Next steps:
//  (CHECK) 1. Make Operate function itself useable on equalBtn click event (MAKE SURE TO UPDATE OPERATE FUNCTION WITH THE NEWLY ADDED DISPLAY.TEXTcONTENT AND NUMBER() ADDITIONS))!!!
//  2. Make zero button irrepeatable if number starts with it

