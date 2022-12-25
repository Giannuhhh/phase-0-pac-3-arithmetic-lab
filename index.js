1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// let number = 5;
// number++;
// number;
// number--;
// number;

// let number = 5;
// number += 3;
// number -= 2;
// number *= 10;
// number /= 5;

number = 10;

function add5() {
    return (number += 5);
}
function divideBy3() {
    return (number /= 3);
}
divideBy3();
add5();
number = 10;
add();
divideBy3();

function increment(n) {
    return (n + 1);
}
function decrement(n) {
    return (n - 1);
}


function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}
// function preserveDecimal(n) {
//     return isNaN(preserveDecimal("sldkjflksjf"));
// }






