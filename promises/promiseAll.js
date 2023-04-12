// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// })

// Promise.all([ p1, p2, p3 ]).then((results) => {
//     const total = results.reduce((p, c) => p + c);

//     console.log(`Results: ${results}`); // Results: 10, 20, 30
//     console.log(`Total: ${total}`); // Total: 60
// })

//

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject('Failed');
    }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});

// Promise.all([p1, p2, p3])
//     .then(console.log) // never execute
//     .catch(console.log); //The catch() method is executed to display the reason for the rejected promise.

Promise.all([p1, p2, p3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
