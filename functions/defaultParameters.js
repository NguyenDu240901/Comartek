//Example

function add(a, b) {
    a = typeof a !== 'undefined' ? a : 2;
    b = typeof b !== 'undefined' ? b : 3;
    return  a + b
}

console.log(add(1, 3)); //4
console.log(add()); // 5

function sum(a = 1, b = 1) {
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum()); // 2