/* eslint-disable max-len */
/* eslint-disable indent */
let gNum1;
let gNum2;
let gOperator;
let num1Done;
let num2Done;
const result = document.querySelector('#result');

function addition(num1, num2) {
    gNum1 = num1 + num2;
    result.textContent = gNum1;
    gNum2 = '';
    gOperator = '';
    num2Done = false;
}

function subtraction(num1, num2) {
    gNum1 = num1 - num2;
    result.textContent = gNum1;
    gNum2 = '';
    gOperator = '';
    num2Done = false;
}

function multiplication(num1, num2) {
    gNum1 = num1 * num2;
    result.textContent = gNum1;
    gNum2 = '';
    gOperator = '';
    num2Done = false;
}

function division(num1, num2) {
    gNum1 = num1 / num2;
    result.textContent = gNum1;
    gNum2 = '';
    gOperator = '';
    num2Done = false;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            addition(num1, num2);
            break;
        case '-':
            subtraction(num1, num2);
            break;
        case '×':
            multiplication(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
        // no default
    }
}

function numDisplay(entry) {
    if (num1Done === false) {
        gNum1 += entry.currentTarget.value;
        result.textContent = `${gNum1}${gOperator}${gNum2}`;
    }
    else if (isNaN(entry.currentTarget.value) === false && num1Done === true && num2Done === false) {
        gNum2 += entry.currentTarget.value;
        result.textContent = `${gNum1}${gOperator}${gNum2}`;
    }
    else if (entry.currentTarget.value === '=') {
        num2Done = true;
        operate(+gNum1, gOperator, +gNum2);
    }
}

function operDisplay(entry) {
    gOperator = entry.currentTarget.value;
    num1Done = true;
    result.textContent = `${gNum1}${gOperator}${gNum2}`;
}

function clearDisplay() {
    gNum1 = '';
    gNum2 = '';
    gOperator = '';
    num1Done = false;
    num2Done = false;
    result.textContent = `0${gNum1}${gOperator}${gNum2}`;
}

const numBtn1 = document.querySelector('.one');
numBtn1.addEventListener('click', numDisplay);
numBtn1.value = 1;

const numBtn2 = document.querySelector('.two');
numBtn2.addEventListener('click', numDisplay);
numBtn2.value = 2;

const numBtn3 = document.querySelector('.three');
numBtn3.addEventListener('click', numDisplay);
numBtn3.value = 3;

const numBtn4 = document.querySelector('.four');
numBtn4.addEventListener('click', numDisplay);
numBtn4.value = 4;

const numBtn5 = document.querySelector('.five');
numBtn5.addEventListener('click', numDisplay);
numBtn5.value = 5;

const numBtn6 = document.querySelector('.six');
numBtn6.addEventListener('click', numDisplay);
numBtn6.value = 6;

const numBtn7 = document.querySelector('.seven');
numBtn7.addEventListener('click', numDisplay);
numBtn7.value = 7;

const numBtn8 = document.querySelector('.eight');
numBtn8.addEventListener('click', numDisplay);
numBtn8.value = 8;

const numBtn9 = document.querySelector('.nine');
numBtn9.addEventListener('click', numDisplay);
numBtn9.value = 9;

const numBtn0 = document.querySelector('.zero');
numBtn0.addEventListener('click', numDisplay);
numBtn0.value = 0;

// const backspaceBtn = document.querySelector('.backspace');
// backspaceBtn.addEventListener('click', display);
// backspaceBtn.value = 'undo';

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearDisplay);
clearBtn.value = 'clear';

const multiBtn = document.querySelector('.multiplication');
multiBtn.addEventListener('click', operDisplay);
multiBtn.value = '×';

const divBtn = document.querySelector('.division');
divBtn.addEventListener('click', operDisplay);
divBtn.value = '/';

const subBtn = document.querySelector('.subtraction');
subBtn.addEventListener('click', operDisplay);
subBtn.value = '-';

const addBtn = document.querySelector('.addition');
addBtn.addEventListener('click', operDisplay);
addBtn.value = '+';

const equalBtn = document.querySelector('.equals');
equalBtn.addEventListener('click', numDisplay);
equalBtn.value = '=';

// const decBtn = document.querySelector('.decimal');
// decBtn.addEventListener('click', display);
// decBtn.value = '.';

clearDisplay();