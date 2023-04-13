// The value can be either fulfilled or rejected
// ! The 'value' if case the promise is fulfilled or 'reason' if the promise is rejected

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2]).then((result) => {
    console.log(result);
});

// Output:
// The first promise has resolved
// The second promise has rejected
// [ { status: 'resolved', value: 10 }
//   { status: 'rejected', reason: 20 } ]
