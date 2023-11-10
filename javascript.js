/* eslint-disable indent */
function addition(num1, num2) {
    const result = num1 + num2;
    return result;
}

function subtraction(num1, num2) {
    const result = num1 - num2;
    return result;
}

function multiplication(num1, num2) {
    const result = num1 * num2;
    return result;
}

function division(num1, num2) {
    const result = num1 / num2;
    return result;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            addition(num1, num2);
            break;
        case '-':
            subtraction(num1, num2);
            break;
        case '*':
            multiplication(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
        // no default
    }
}
