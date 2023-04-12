// Example 1: All promises fulfilled example

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log
//             ('Promise 1 fulfilled');
//         resolve(1);
//     }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise 2 fulfilled');
//         resolve(2);
//     }, 2000);
// })

// const p = Promise.any([p1, p2]);
// p.then((value) => {
//     console.log('Return Promise');
//     console.log(value);
// });

// Output:
// Promise 1 fulfilled
// Returned Promise
// 1
// Promise 2 fulfilled

//Example 2: One promise rejected example

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise 1 rejected');
//         reject('error');
//     }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise 2 fulfilled');
//         resolve(2);
//     }, 2000);
// });

// const p = Promise.any([p1, p2]);
// p.then((value) => {
//     console.log('Return Promise');
//     console.log(value);
// })

// Output:

// Promise 1 rejected
// Promise 2 fulfilled
// Returned Promise
// 2

//Example 3: All promises rejected example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 1 rejected');
        reject('error1');
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 2 rejected');
        reject('error2');
    }, 2000);
});

const p = Promise.any([p1, p2]);
p.catch((e) => {
    console.log('Returned Promise');
    console.log(e, e.errors);
});

// Output:

// Promise 1 rejected
// Promise 2 rejected
// Returned Promise
// [AggregateError: All promises were rejected] [ 'error1', 'error2' ]
