//  function functionName(params) {

//  }

function say(message) {
    console.log(message);
}
say('Hi');

const rs = say('Hi');
console.log(rs); // undefined

// Return value

function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7

function compare () {
    if (a > b) {
        return -1;
    }
    else if (a < b) {
        return 1;
    }
    return 0;
    // return: stop executing
}

// Arguments

function demo() {
    console.log(arguments);
    console.log(typeof arguments); //object
    console.log(arguments[0]); // 1
    // convert arguments to array
    console.log(Array.from(arguments)); //[1, 2, 3]
}
demo(1, 2, 3);

// Function hoisting